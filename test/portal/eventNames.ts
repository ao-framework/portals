import { Portal } from "../../src";
export function eventNames() {
    let portal = new Portal("something");
    portal.addListener("something", () => { });
    expect(portal.eventNames()).toEqual(["something"]);
}
