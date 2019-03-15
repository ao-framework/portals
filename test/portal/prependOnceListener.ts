import { Portal } from "../../src";
export function prependOnceListener() {
    let portal = new Portal("something");
    let handler = () => { };
    let handler2 = () => { };
    portal.addListener("something", handler);
    portal.prependOnceListener("something", handler2);
    expect(portal["events"].something.handlers[0].listener === handler2).toBe(true);
    expect(portal["events"].something.handlers[0].count).toBe(1);
}
