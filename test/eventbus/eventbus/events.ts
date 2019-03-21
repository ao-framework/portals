import { EventBus } from "../../../src";
export function events() {
    let eventBus = new EventBus("something");
    expect(eventBus["channels"]).toEqual({});
}
