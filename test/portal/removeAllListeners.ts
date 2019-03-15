import { Portal } from "../../src";
export function removeAllListeners() {
    let portal = new Portal("something");
    let handler = () => { };
    portal.addListener("something", handler);
    portal.removeAllListeners("something");
    expect(portal["events"].something).toBe(undefined);
    let portal2 = new Portal("something");
    portal.addListener("something", handler);
    portal.removeAllListeners();
    expect(portal["events"]).toEqual({});
}
