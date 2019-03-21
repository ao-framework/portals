import { EventBusHandler } from "../../../src";
export function count() {
    let eventbusHandler = new EventBusHandler();
    expect(eventbusHandler.count).toBe(null);
}
