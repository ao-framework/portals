import { Portal } from "../../src";
export function listeners() {
    let portal = new Portal("something");
    let handler = () => { };
    portal.addListener("something", handler);
    expect(portal.listeners("something")[0] === handler).toBe(true);
}
