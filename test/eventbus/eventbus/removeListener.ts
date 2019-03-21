import { EventBus } from "../../../src";
export function removeListener() {
    let eventBus = new EventBus("something");
    let handler = () => { };
    eventBus.addListener("something", handler);
    eventBus.addListener("something", handler);
    eventBus.addListener("something", () => { });
    eventBus.removeListener("something", handler);
    expect(eventBus["channels"].something.handlers.length).toBe(1);
}
