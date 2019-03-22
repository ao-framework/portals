export default class EventBusHandler {
    /**
     * The number of times that this listener
     * can be called
     */
    public count: number = null;

    /**
     * The context for this listener
     */
    public context: any;

    /**
     * Holds the listener that will be fired
     */
    public listener: (...args: any[]) => any;
}
