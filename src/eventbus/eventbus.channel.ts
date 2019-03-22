import EventBusHandler from "./eventbus.handler";

export default class EventBusChannel {
    /**
     * The list of the handlers for the event
     */
    public handlers: EventBusHandler[] = [];

    /**
     * Create an event bus channel
     * 
     * @param channel The name of the channel
     */
    public constructor(public channel: string | symbol) { }

    /**
     * Helper method to stop extra handlers
     * from being added when the max number
     * has been met
     * 
     * @param max 
     */
    public getHandlersIfAllowed(max: number) {
        if (this.handlers.length >= max) {
            throw new Error("Max number of listeners reached");
        }
        return this.handlers;
    }
}
