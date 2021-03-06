import { EventBus } from "../../../src";
export function addListener() {
    let eventBus = new EventBus("something");
    let handler = () => { };
    let context = {};
    eventBus.addListener("tap", handler);
    eventBus.addListener("tap.2", handler, context);
    expect(eventBus["channels"]["tap"].handlers[0].listener === handler).toBe(true);
    expect(eventBus["channels"]["tap"].handlers[0].context).toBe(undefined);
    expect(eventBus["channels"]["tap.2"].handlers[0].listener === handler).toBe(true);
    expect(eventBus["channels"]["tap.2"].handlers[0].context).toBe(context);
}
