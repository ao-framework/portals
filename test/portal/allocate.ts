import { Portal, PortalEvent } from "../../src";
export function allocate() {
    let portal = new Portal("lksjdflkj");
    let event = portal["allocate"]("zz");
    let event2 = portal["allocate"]("zz");
    expect(event).toBeInstanceOf(PortalEvent);
    expect(portal["events"].zz).toBeInstanceOf(PortalEvent);
    expect(event === event2).toBe(true);
}
