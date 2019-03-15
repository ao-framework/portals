import { EventTable } from './interfaces/event.table.interface';
import PortalEvent from './portal.event';
import PortalEventHandler from './portal.event.handler';

/**
 * Definition of the portal
 * 
 * The namespaceable event emitter
 */
export default class Portal {

    /**
     * The max number of listeners that
     * can be assigned to one event
     */
    private maxListeners: number = 10;

    /**
     * Holds the table of the events
     * for lookup
     */
    public events: EventTable = {}

    /**
     * Creates the instance
     * @param name The name of the portal
     */
    public constructor(public name: string) { }

    /**
     * Create or retrieve the events by name
     * @param name The of the event channel
     */
    private allocate(name: string | symbol) {
        if (!(this.events[<string>name] instanceof PortalEvent)) {
            this.events[<string>name] = new PortalEvent();
            this.events[<string>name].type = name;
        }
        return this.events[<string>name];
    }

    /**
     * Add a listener to an event channel
     * @param event The name of the event channel
     * @param listener The handler to fire
     * @param context The context for the handler to fire in
     */
    public addListener(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = null;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).push(handler)
        return this;
    }

    /**
     * Add a listener to an event channel; an alias for addListener
     * @param event The name of the event channel
     * @param listener The handler to fire
     * @param context The context for the handler to fire in
     */
    public on(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        return this.addListener(event, listener, context);
    }

    /**
     * Add a listener to an event channel that with only fire once
     * @param event The name of the vent channel
     * @param listener The handler to fire
     * @param context The context for the handler to fire in
     */
    public once(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = 1;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).push(handler)
        return this;
    }

    /**
     * Prepend listener to an event channel
     * @param event The name of the event channel
     * @param listener The handler to fire
     * @param context The context that the handler will fire in
     */
    public prependListener(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = null;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).unshift(handler)
        return this;
    }

    /**
     * Prepend listener to an event channel that will only fire once
     * @param event The name of the event channel
     * @param listener The handler to fire
     * @param context The context that the handler will fire in
     */
    public prependOnceListener(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = 1;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).unshift(handler)
        return this;
    }

    /**
     * Remove a listener from an event channel
     * @param event The name of the event channel
     * @param listener The listener to remove
     */
    public removeListener(event: string | symbol, listener: (...args: any[]) => void) {
        let portalEvent = this.allocate(event);
        let length = portalEvent.handlers.length;
        while (length--) {
            if (portalEvent.handlers[length].listener === listener) {
                portalEvent.handlers.splice(length, 1);
            }
        }
        return this;
    }

    /**
     * Remove a listener from an event channel; alias for removeListener
     * @param event The name of the event channel
     * @param listener The listener to remove
     */
    public off(event: string | symbol, listener: (...args: any[]) => void) {
        return this.removeListener(event, listener);
    }

    /**
     * Removes all listeners from an event channel if an event 
     * channel is supplied. If no event channel is supplied, all
     * events will be removed from the portal
     * @param event 
     */
    public removeAllListeners(event?: string | symbol) {
        if (event == void 0) {
            this.events = {};
        } else {
            delete this.events[<string>event];
        }
        return this;
    }

    /**
     * Set the max number of listeners to be 
     * applied to a particular event channel
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
     * Get the list of function references for an 
     * event channel
     * @param event The name of the event channel
     */
    public listeners(event: string | symbol): Function[] {
        return this.handlers(event).map(handler => handler.listener);
    }

    /**
     * Get the list of the handlers assigned to
     * an event channel
     * @param event The name of the event channel
     */
    public handlers(event: string | symbol): PortalEventHandler[] {
        let portalEvent = this.allocate(event);
        return portalEvent.handlers
    }

    /**
     * Call a handlers for the event channel suppling
     * a list of the arguments
     * @param event The name of the event channel
     * @param args The list of arguments to send
     */
    public emit(event: string | symbol, ...args: any[]) {
        let hadListeners: boolean = false;
        let portalEvent = this.allocate(event);
        portalEvent.handlers.forEach(handler => {
            if (handler.count !== 0) {
                hadListeners = true;
                handler.listener.apply(handler.context, args);
                if (typeof handler.count === "number" && handler.count > 0) {
                    handler.count--;
                    if (handler.count === 0) {
                        this.removeListener(event, handler.listener)
                    }
                }
            }
        })
        return hadListeners;
    }

    /**
     * Returns a list of all event channels
     */
    public eventNames(): Array<string | symbol> {
        return Object.keys(this.events);
    }

    /**
     * Counts the number of listeners for a
     * given event channel
     * @param event The name of the event channel
     */
    public listenerCount(event: string | symbol) {
        let portalEvent = this.allocate(event);
        return portalEvent.handlers.length;
    }
}
