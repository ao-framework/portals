import { Portal } from "../../src";
export function removeListener() {
    let portal = new Portal("something");
    let handler = () => { };
    portal.addListener("something", handler);
    portal.addListener("something", handler);
    portal.addListener("something", () => { });
    portal.removeListener("something", handler);
    expect(portal["events"].something.handlers.length).toBe(1);
}
