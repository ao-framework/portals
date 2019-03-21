import { EventBus } from "../../../src";
export function once() {
    let eventBus = new EventBus("something");
    let handler = () => { };
    eventBus.once("something", handler);
    expect(eventBus["channels"].something.handlers[0].count === 1).toBe(true);
    expect(eventBus["channels"].something.handlers[0].listener === handler).toBe(true);
}
