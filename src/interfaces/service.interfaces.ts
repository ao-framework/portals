import ServiceChannel from "../service/service.channel";
import Service from "../service/service";

export interface ServiceChannelTable {
    [key: string]: ServiceChannel
}

export interface ServiceTable {
    [name: string]: Service
}
