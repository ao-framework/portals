import { EventBus } from "../../../src";
export function listeners() {
    let eventBus = new EventBus("something");
    let handler = () => { };
    eventBus.addListener("something", handler);
    expect(eventBus.listeners("something")[0] === handler).toBe(true);
}
