import { Portal, PortalEventHandler } from "../../src";
export function handlers() {
    let portal = new Portal("something");
    let handler = () => { };
    portal.addListener("something", handler);
    let handlerInstance = portal.handlers("something")[0];
    expect(handlerInstance).toBeInstanceOf(PortalEventHandler);
}
