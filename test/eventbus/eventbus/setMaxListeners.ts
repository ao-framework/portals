import { EventBus } from "../../../src";
export function setMaxListeners() {
    let eventBus = new EventBus("something");
    eventBus.setMaxListeners(100);
    expect(eventBus["maxListeners"]).toBe(100);
}
