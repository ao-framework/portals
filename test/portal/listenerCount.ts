import { Portal } from "../../src";
export function listenerCount() {
    let portal = new Portal("something");
    portal.addListener("something", () => { });
    expect(portal.listenerCount("something")).toBe(1);
}
