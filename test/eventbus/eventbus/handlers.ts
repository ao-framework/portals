import { EventBus, EventBusHandler } from "../../../src";
export function handlers() {
    let eventBus = new EventBus("something");
    let handler = () => { };
    eventBus.addListener("something", handler);
    let handlerInstance = eventBus.handlers("something")[0];
    expect(handlerInstance).toBeInstanceOf(EventBusHandler);
}
