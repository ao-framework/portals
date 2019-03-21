import { EventBus } from "../../../src";
export function getMaxListeners() {
    let eventBus = new EventBus("something");
    expect(eventBus.getMaxListeners()).toBe(10);
    eventBus.setMaxListeners(54);
    expect(eventBus.getMaxListeners()).toBe(54);
}
