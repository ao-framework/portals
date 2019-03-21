import { EventBus } from "../../../src";
export function maxListeners() {
    let eventBus = new EventBus("something");
    expect(eventBus["maxListeners"]).toBe(10);
}
