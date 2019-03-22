import EventBus from "../eventbus/eventbus";
import EventBusChannel from "../eventbus/eventbus.channel";

export interface EventBusTable {
    [name: string]: EventBus
}
export interface EventBusChannelTable {
    [channel: string]: EventBusChannel
}
