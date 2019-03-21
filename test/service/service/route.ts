import Portals from "../../../src";
export function route() {
    let service = new Portals().service("something");
    let handler = () => { };
    let d = service.route("one", handler);
    expect(service["$channels"]["one"].handler).toBe(handler);
    expect(service["$channels"]["one"].locked).toBe(false);
    expect(service["$channels"]["one"].secure).toBe(false);
    d();
    expect(service["$channels"]["one"]).toBe(undefined);
    service.routeLock("one", handler);
    expect(() => {
        service.route("one", handler);
    }).toThrow();
}
