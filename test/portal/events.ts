import { Portal } from "../../src";
export function events() {
    let portal = new Portal("something");
    expect(portal["events"]).toEqual({});
}
