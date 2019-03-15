import PortalEventHandler from "./portal.event.handler";

export class PortalEvent {
    public type: string | symbol;
    public handlers: PortalEventHandler[] = [];
    public getHandlersIfAllowed(max: number) {
        if (this.handlers.length >= max) {
            throw new Error(`Memory leak detected in portal (${this.type.toString()}). Max number of listeners exceeded.`);
        }
        return this.handlers;
    }
}
