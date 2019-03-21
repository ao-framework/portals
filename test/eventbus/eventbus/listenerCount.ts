import { EventBus } from "../../../src";
export function listenerCount() {
    let eventBus = new EventBus("something");
    eventBus.addListener("something", () => { });
    expect(eventBus.listenerCount("something")).toBe(1);
}
