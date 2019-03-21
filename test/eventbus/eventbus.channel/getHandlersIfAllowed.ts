import { EventBusChannel, EventBusHandler } from "../../../src";
export function getHandlersIfAllowed() {
    let eventbusChannel = new EventBusChannel("something");
    eventbusChannel.handlers.push(new EventBusHandler(), new EventBusHandler());
    expect(() => {
        eventbusChannel.getHandlersIfAllowed(1);
    }).toThrow();
    expect(Array.isArray(eventbusChannel.getHandlersIfAllowed(10))).toBe(true);
}
