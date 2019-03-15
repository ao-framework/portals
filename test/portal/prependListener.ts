import { Portal } from "../../src";
export function prependListener() {
    let portal = new Portal("something");
    let handler = () => { };
    let handler2 = () => { };
    portal.addListener("something", handler);
    portal.prependListener("something", handler2);
    expect(portal["events"].something.handlers[0].listener === handler2).toBe(true);
    expect(portal["events"].something.handlers[0].count).toBe(null);
}
