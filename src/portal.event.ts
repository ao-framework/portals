import PortalEventHandler from "./portal.event.handler";

/**
 * Definition of a portal event
 */
export default class PortalEvent {

    /**
     * The name or type of the channel
     */
    public type: string | symbol;

    /**
     * The list of the handlers for the event
     */
    public handlers: PortalEventHandler[] = [];

    /**
     * Helper method to stop extra handlers
     * from being added when the max number
     * has been met
     * @param max 
     */
    public getHandlersIfAllowed(max: number) {
        if (this.handlers.length >= max) {
            throw new Error(`Memory leak detected in portal (${this.type.toString()}). Max number of listeners exceeded.`);
        }
        return this.handlers;
    }
}
