import { EventBusChannel } from "../../../src";
export function handlers() {
    let eventbusChannel = new EventBusChannel("something");
    expect(eventbusChannel.handlers).toEqual([]);
}
