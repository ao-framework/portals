import { Portal } from "../../src";
export function maxListeners() {
    let portal = new Portal("something");
    expect(portal["maxListeners"]).toBe(10);
}
