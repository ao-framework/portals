import { EventTable } from './interfaces/event.table.interface';
import PortalEvent from './portal.event';
import PortalEventHandler from './portal.event.handler';

export default class Portal {
    private maxListeners: number = 10;
    public events: EventTable = {}

    public constructor(public name: string) { }

    public allocate(name: string | symbol) {
        if (!(this.events[<string>name] instanceof PortalEvent)) {
            this.events[<string>name] = new PortalEvent();
            this.events[<string>name].type = name;
        }
        return this.events[<string>name];
    }

    public addListener(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = null;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).push(handler)
        return this;
    }
    public on(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        return this.addListener(event, listener, context);
    }
    public once(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = 1;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).push(handler)
        return this;
    }
    public only(event: string | symbol, count: number, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = count;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).push(handler)
        return this;
    }
    public prependListener(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = null;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).unshift(handler)
        return this;
    }
    public prependOnceListener(event: string | symbol, listener: (...args: any[]) => void, context: any = null) {
        let portalEvent = this.allocate(event);
        let handler = new PortalEventHandler();
        handler.count = 1;
        handler.listener = listener;
        handler.context = context;
        portalEvent.getHandlersIfAllowed(this.maxListeners).unshift(handler)
        return this;
    }
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
    public off(event: string | symbol, listener: (...args: any[]) => void) {
        return this.removeListener(event, listener);
    }
    //removeAllListeners(event?: string | symbol): this;
    public removeAllListeners(event?: string | symbol) {
        if (event == void 0) {
            this.events = {};
        } else {
            delete this.events[<string>event];
        }
        return this;
    }
    public setMaxListeners(n: number) {
        this.maxListeners = n;
        return this;
    }
    public getMaxListeners(): number {
        return this.maxListeners;
    }
    public listeners(event: string | symbol): Function[] {
        return this.portalHandlers(event).map(handler => handler.listener);
    }
    public portalHandlers(event: string | symbol): PortalEventHandler[] {
        let portalEvent = this.allocate(event);
        return portalEvent.handlers
    }
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

    public eventNames(): Array<string | symbol> {
        return Object.keys(this.events);
    }

    public listenerCount(event: string | symbol) {
        let portalEvent = this.allocate(event);
        return portalEvent.handlers.length;
    }
}



