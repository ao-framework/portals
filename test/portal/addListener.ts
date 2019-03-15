import { Portal } from "../../src";
export function addListener() {
    let portal = new Portal("something");
    let handler = () => { };
    let context = {};
    portal.addListener("tap", handler);
    portal.addListener("tap.2", handler, context);
    expect(portal["events"]["tap"].handlers[0].listener === handler).toBe(true);
    expect(portal["events"]["tap"].handlers[0].context).toBe(undefined);
    expect(portal["events"]["tap.2"].handlers[0].listener === handler).toBe(true);
    expect(portal["events"]["tap.2"].handlers[0].context).toBe(context);
}
