import { EventBus } from "../../../src";
export function removeAllListeners() {

    let eventBus = new EventBus("something");
    let handler = () => { };
    eventBus.addListener("something", handler);
    eventBus.removeAllListeners("something");
    expect(eventBus["channels"].something).toBe(undefined);

    let eventBus2 = new EventBus("something");
    eventBus2.addListener("something", handler);
    eventBus2.removeAllListeners();
    expect(eventBus2["channels"]).toEqual({});
}
