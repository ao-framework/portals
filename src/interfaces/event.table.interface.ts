import PortalEventChannel from "../portal.event.channel";

export interface EventTable {
    [key: string]: PortalEventChannel;
}
