import { EventBusHandler } from "../../../src";
export function context() {
    let eventbusHandler = new EventBusHandler();
    expect(eventbusHandler.context).toBe(undefined);
}
