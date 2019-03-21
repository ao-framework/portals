import { EventBusHandler } from "../../../src";
export function listener() {
    let eventbusHandler = new EventBusHandler();
    expect(eventbusHandler.listener).toBe(undefined);
}
