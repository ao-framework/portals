import { EventBus } from "../../../src";
export function prependOnceListener() {
    let eventBus = new EventBus("something");
    let handler = () => { };
    let handler2 = () => { };
    eventBus.addListener("something", handler);
    eventBus.prependOnceListener("something", handler2);
    expect(eventBus["channels"].something.handlers[0].listener === handler2).toBe(true);
    expect(eventBus["channels"].something.handlers[0].count).toBe(1);
}
