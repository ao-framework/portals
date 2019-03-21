import { EventBus } from "../../../src";
export function prependListener() {
    let eventBus = new EventBus("something");
    let handler = () => { };
    let handler2 = () => { };
    eventBus.addListener("something", handler);
    eventBus.prependListener("something", handler2);
    expect(eventBus["channels"].something.handlers[0].listener === handler2).toBe(true);
    expect(eventBus["channels"].something.handlers[0].count).toBe(null);
}
