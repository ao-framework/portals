import { Portal } from "../../src";
export function off() {
    let portal = new Portal("something");
    let handler = () => { };
    portal.addListener("something", handler);
    portal.off("something", handler);
    expect(portal["events"].something.handlers.length).toBe(0);
}
