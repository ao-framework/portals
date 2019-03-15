import { Portal } from "../../src";
export function once() {
    let portal = new Portal("something");
    let handler = () => { };
    portal.once("something", handler);
    expect(portal["events"].something.handlers[0].count === 1).toBe(true);
    expect(portal["events"].something.handlers[0].listener === handler).toBe(true);
}
