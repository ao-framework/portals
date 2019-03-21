import { EventBus } from "../../../src";
export function off() {
    let eventBus = new EventBus("something");
    let handler = () => { };
    eventBus.addListener("something", handler);
    eventBus.off("something", handler);
    expect(eventBus["channels"].something.handlers.length).toBe(0);
}
