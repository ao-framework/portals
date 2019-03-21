import { EventBus, EventBusChannel } from "../../../src";
export function allocate() {
    let eventBus = new EventBus("lksjdflkj");
    let event = eventBus["allocate"]("zz");
    let event2 = eventBus["allocate"]("zz");
    expect(event).toBeInstanceOf(EventBusChannel);
    expect(eventBus["channels"].zz).toBeInstanceOf(EventBusChannel);
    expect(event === event2).toBe(true);
}
