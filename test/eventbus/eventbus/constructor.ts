import { EventBus } from "../../../src";
export function constructor() {
    let eventBus = new EventBus("something");
    expect(eventBus.name).toBe("something");
}
