/**
 * Definition of service tap
 */
export default class ServiceChannelTap {

    /**
     * Holds the context for the handler
     */
    public context: any;

    /**
     * Holds the handler
     */
    public handler: (...args: any[]) => any

    /**
     * Creates the instance of the service channel tap
     * 
     * @param channel The name of the channel
     */
    public constructor(public channel: string | symbol) { }
}
