import { ServiceChannelTable } from "../interfaces/service.interfaces";
import ServiceChannel from "./service.channel";
import ServiceChannelTap from "./service.channel.tap";

export default class Service {
    /**
     * Holds a private table of service channels
     */
    private $channels: ServiceChannelTable = {}

    /**
     * Creates a service
     * 
     * @param name The name of the serve
     */
    public constructor(private serviceName: string) { }

    /**
     * Allocates a channel
     * 
     * If the channel does not exist, it is created
     * and returned
     * 
     * @param channel 
     */
    private allocate(channel: string | symbol) {
        if (!this.$channels[<string>channel]) {
            this.$channels[<string>channel] = new ServiceChannel(channel, this.serviceName);
        }
        return this.$channels[<string>channel];
    }

    /**
     * Gets the name of the service
     */
    public name() {
        return this.serviceName;
    }

    /**
     * Returns a list of the service channel names
     */
    public channels() {
        return Object.keys(this.$channels)
    }

    /**
     * Get all tap instances for the a channel
     * 
     * @param channel The name of the channel
     */
    public taps(channel: string) {
        return this.allocate(channel).taps;
    }

    /**
     * Remove a route tap from a channel where the handler
     * shares a reference with the handler provided
     * 
     * @param channel The name of the channel
     * @param handler The handler for the tap to remove
     */
    public removeTap(channel: string | symbol, handler: (...args: any[]) => any) {
        let serviceChannel = this.allocate(channel)
        let length = serviceChannel.taps.length
        while (length--) {
            if (serviceChannel.taps[length].handler === handler) {
                serviceChannel.taps.splice(length, 1);
            }
        }
    }

    /**
     * Remove all route taps for a channel
     * 
     * @param channel The name of the channel
     */
    public removeAllTaps(channel: string | symbol) {
        let serviceChannel = this.allocate(channel);
        serviceChannel.taps = [];
    }

    /**
     * Make a request to a service channel
     * 
     * @param channel The name of the channel
     * @param args The data to be passed to the channel handler
     */
    public request<Context>(channel: string | symbol, ...args: any[]): Promise<Context> {
        let serviceChannel = this.allocate(channel);
        if (!serviceChannel.secure) {
            serviceChannel.taps.forEach(tap => tap.handler.call(tap.context, ...args));
        }
        return Promise.resolve(serviceChannel.handler.call(serviceChannel.context, ...args));
    }

    /**
     * Remove a channel
     * 
     * @param channel The name of the channel
     */
    public remove(channel: string | symbol) {
        let serviceChannel = this.allocate(channel);
        if (!serviceChannel.locked) {
            delete this.$channels[<string>channel]
        } else {
            throw new Error(`Can not remove channel via the remove method on locked channel ${channel.toString()}. Use the returned destroyer instead.`)
        }
    }

    /**
     * Declare route to direct all traffic from a particular
     * channel to a specific handler
     * 
     * @param channel The name of the channel
     * @param handler The handler that will handle the request
     * @param context The context for the handler
     */
    public route(channel: string | symbol, handler: (...args: any[]) => any, context?: any) {
        let serviceChannel = this.allocate(channel)
        if (!serviceChannel.locked) {
            serviceChannel.secure = false;
            serviceChannel.locked = false;
            serviceChannel.context = context;
            serviceChannel.handler = handler;
            return () => {
                delete this.$channels[<string>channel];
            }
        } else {
            this.throwLocked(channel)
        }
    }


    /**
     * Declare route to direct all traffic from a particular
     * channel to a specific handler that is locked and can
     * not be overriden. The route can only be destroyed by 
     * the destroyer function that is returned
     * 
     * @param channel The name of the channel
     * @param handler The handler that will handle the request
     * @param context The context for the handler
     */
    public routeLock(channel: string | symbol, handler: (...args: any[]) => any, context?: any) {
        let serviceChannel = this.allocate(channel)
        if (!serviceChannel.locked) {
            serviceChannel.secure = false;
            serviceChannel.locked = true;
            serviceChannel.context = context;
            serviceChannel.handler = handler;
            return () => {
                delete this.$channels[<string>channel];
            }
        } else {
            this.throwLocked(channel)
        }
    }

    /**
     * Declare route to direct all traffic from a particular
     * channel to a specific handler that is locked and is secure
     * disallowing any taps from listening to request being made
     * 
     * @param channel The name of the channel
     * @param handler The handler that will handle the request
     * @param context The context for the handler
     */
    routeLockSec(channel: string | symbol, handler: (...args: any[]) => any, context?: any) {
        let serviceChannel = this.allocate(channel)
        if (!serviceChannel.locked) {
            serviceChannel.secure = true;
            serviceChannel.locked = true;
            serviceChannel.context = context;
            serviceChannel.handler = handler;
            return () => {
                delete this.$channels[<string>channel];
            }
        } else {
            this.throwLocked(channel)
        }
    }

    /**
     * Declare route tap to listens to each request made to
     * the main route but can not respond, nor can see the 
     * response
     * 
     * @param channel The name of the channel
     * @param handler The handler that will handle the request
     * @param context The context for the handler
     */
    public routeTap(channel: string, handler: (...args: any[]) => any, context?: any) {
        let serviceChannel = this.allocate(channel)
        let tap = new ServiceChannelTap(channel);
        tap.handler = handler;
        tap.context = context;
        serviceChannel.taps.push(tap)
    }

    /**
     * Helper method to throw the locked exception
     * 
     * @param channel The name of the channel
     */
    private throwLocked(channel: string | symbol) {
        throw new Error(`Could not set route on channel "${channel.toString()}" because it is locked`);
    }
}
