import { EventBusChannel } from "../../../src";
export function channel() {
    let eventbusChannel = new EventBusChannel("something");
    expect(eventbusChannel.channel).toBe("something");
}
