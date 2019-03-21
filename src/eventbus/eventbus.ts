import { EventBusChannelTable } from "../interfaces/eventbus.interfaces";
import EventBusChannel from "./eventbus.channel";
import EventBusHandler from "./eventbus.handler";


/**
 * Definition of an event bus in portals
 */
export default class EventBus {

    /**
     * The max number of listeners that can
     * subscribe to a channel
     */
    private maxListeners: number = 10;

    /**
     * Holds the table of all channels for the
     * current event bus
     */
    private channels: EventBusChannelTable = {}

    /**
     * Creates the instance
     * 
     * @param name The name of the event bus
     */
    public constructor(public name: string) { }

    /**
     * If the channel exists with a given channel
     * name, it will be returned. If not, a channel
     * will be created and returned
     * 
     * @param channel The name of the channel
     */
    private allocate(channel: string | symbol) {
        if (!this.channels[<string>channel]) {
            this.channels[<string>channel] = new EventBusChannel(channel);
        }
        return this.channels[<string>channel];
    }

    /**
     * Add a listener to a particular channel
     * @param channel The name of the channel
     * @param listener The listener to fire on emission
     * @param context The context for the the listener
     */
    public addListener(channel: string | symbol, listener: (...args: any[]) => void, context?: any) {
        let eventChannel = this.allocate(channel)
        let handler = new EventBusHandler();
        handler.listener = listener;
        handler.context = context;
        eventChannel.getHandlersIfAllowed(this.maxListeners).push(handler);
        return this;
    }

    /**
     * Add a listener to a particular channel
     * @param channel The name of the channel
     * @param listener The listner to fire on emission
     * @param context The context for the listener
     */
    public on(channel: string | symbol, listener: (...args: any[]) => void, context?: any) {
        return this.addListener(channel, listener, context);
    }

    /**
     * Add a listener to a particular channel that will only fire once
     * @param channel The name of the channel
     * @param listener The listener to fire on emission
     * @param context The context for the listener
     */
    public once(channel: string | symbol, listener: (...args: any[]) => void, context?: any) {
        let eventChannel = this.allocate(channel)
        let handler = new EventBusHandler();
        handler.count = 1
        handler.listener = listener;
        handler.context = context;
        eventChannel.getHandlersIfAllowed(this.maxListeners).push(handler);
        return this;
    }

    /**
     * Prepend a listener to a particular channel
     * @param channel The name of the channel
     * @param listener The listener to fire on emission
     * @param context The context for the listener
     */
    public prependListener(channel: string | symbol, listener: (...args: any[]) => void, context?: any) {
        let eventChannel = this.allocate(channel)
        let handler = new EventBusHandler();
        handler.listener = listener;
        handler.context = context;
        eventChannel.getHandlersIfAllowed(this.maxListeners).unshift(handler);
        return this;
    }

    /**
     * Prepend a listener to a particular channel that only fire once
     * @param channel The name of the channel
     * @param listener The listener to fire on emission
     * @param context 
     */
    public prependOnceListener(channel: string | symbol, listener: (...args: any[]) => void, context?: any) {
        let eventChannel = this.allocate(channel)
        let handler = new EventBusHandler();
        handler.count = 1
        handler.listener = listener;
        handler.context = context;
        eventChannel.getHandlersIfAllowed(this.maxListeners).unshift(handler);
        return this;
    }

    /**
     * Remove a listener from a channel
     * 
     * @param channel The name of the channel
     * @param listener The listener for the channel
     */
    public removeListener(channel: string | symbol, listener: (...args: any[]) => void) {
        let eventChannel = this.allocate(channel);
        let length = eventChannel.handlers.length;
        while (length--) {
            if (eventChannel.handlers[length].listener === listener) {
                eventChannel.handlers.splice(length, 1);
            }
        }
        return this;
    }

    /**
     * Remove a listener from a channel
     * 
     * @param channel The name of the channel
     * @param listener The listener for the channel
     */
    public off(channel: string | symbol, listener: (...args: any[]) => void) {
        return this.removeListener(channel, listener);
    }

    /**
     * If a channel is supplied, all event listeners for that
     * channel will be removed. However, if no channel is supplied,
     * all channels for this event bus will be removed
     * 
     * @param channel The name of the channle
     */
    public removeAllListeners(channel?: string | symbol) {
        if (typeof channel === "string" || typeof channel === "symbol") {
            delete this.channels[<string>channel];
        } else {
            this.channels = {}
        }
        return this;
    }

    /**
     * Set the max number of listeners to be 
     * applied to a particular event channel
     * 
     * @param n The number of listeners
     */
    public setMaxListeners(n: number) {
        this.maxListeners = n;
        return this;
    }

    /**
     * Get the max number of listeners
     */
    public getMaxListeners(): number {
        return this.maxListeners;
    }

    /**
     * Get a list of the listener references for a
     * particular channel
     * 
     * @param channel The name of the channel
     */
    public listeners(channel: string | symbol): Function[] {
        return this.handlers(channel).map(handler => handler.listener);
    }

    /**
     * Get a list of the event bus handlers for a 
     * particular channel
     * 
     * @param channel The name of the channel 
     */
    public handlers(channel: string | symbol): EventBusHandler[] {
        let eventChannel = this.allocate(channel);
        return eventChannel.handlers
    }

    /**
     * Broadcast to a listeners for a particular channel
     * 
     * @param channel The name of the channel 
     * @param args List of arguments to be supplied to the listeners
     */
    public emit(channel: string | symbol, ...args: any[]) {
        let hasListeners = false;
        let eventChannel = this.allocate(channel);
        let removeIndices: number[] = [];
        eventChannel.handlers.forEach((handler, index) => {
            hasListeners = true;
            handler.listener.apply(handler.context, args);
            if (typeof handler.count === "number" && handler.count === 1) {
                removeIndices.unshift(index);
            }
        })
        removeIndices.forEach(index => {
            eventChannel.handlers.splice(index, 1);
        })
        return hasListeners;
    }

    /**
     * Returns a list of all channel names
     */
    public channelNames(): Array<string | symbol> {
        return Object.keys(this.channels);
    }

    /**
     * Returns the number listeners subscribed to a channel
     * 
     * @param channel The name of the channel 
     */
    public listenerCount(channel: string | symbol) {
        let eventChannel = this.allocate(channel);
        return eventChannel.handlers.length;
    }
}
