import { EventBus } from "../../../src";
export function eventNames() {
    let eventBus = new EventBus("something");
    eventBus.addListener("something", () => { });
    expect(eventBus.channelNames()).toEqual(["something"]);
}
