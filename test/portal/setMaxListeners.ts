import { Portal } from "../../src";
export function setMaxListeners() {
    let portal = new Portal("something");
    portal.setMaxListeners(100);
    expect(portal["maxListeners"]).toBe(100);
}
