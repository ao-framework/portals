import Portals from "../../../src";
export function routeTap() {
    let service = new Portals().service("something");
    let handler = () => { };
    service.routeTap("one", handler);
    expect(service["$channels"]["one"]["taps"][0].handler).toBe(handler);
}
