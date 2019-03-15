import { Portal } from "../../src";
export function getMaxListeners() {
    let portal = new Portal("something");
    expect(portal.getMaxListeners()).toBe(10);
    portal.setMaxListeners(54);
    expect(portal.getMaxListeners()).toBe(54);
}
