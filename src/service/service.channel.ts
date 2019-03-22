import ServiceChannelTap from "./service.channel.tap";

export default class ServiceChannel {
    /**
     * Holds the context for the handler
     */
    public context: any;

    /**
     * Whether or not this channel can 
     * be reassigned
     */
    public locked: boolean = false;

    /**
     * Whether or not the the channel can
     * have taps listen for the route calls
     */
    public secure: boolean = false;

    /**
     * Holds a list channel taps that enable
     * to listen to requests made to the channel
     */
    public taps: ServiceChannelTap[] = [];

    /**
     * Creates the service channel
     * 
     * @param channel The name of the channel
     */
    public constructor(public channel: string | symbol, public service: string | symbol) { }

    /**
    * Holds the handler for the channel
    */
    public handler: (...args: any[]) => any = () => Promise.reject(new Error(`In service (${this.service.toString()}), the channel "${this.channel.toString()}" was called but never assigned.`));
}
