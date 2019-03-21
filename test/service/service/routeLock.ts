import Portals from "../../../src";
export function routeLock() {
    let service = new Portals().service("something");
    let handler = () => { };
    let d = service.routeLock("one", handler);
    expect(service["$channels"]["one"].handler).toBe(handler);
    expect(service["$channels"]["one"].locked).toBe(true);
    expect(service["$channels"]["one"].secure).toBe(false);
    d();
    expect(service["$channels"]["one"]).toBe(undefined);
    expect(() => {
        service.routeLock("one", handler);
        service.routeLock("one", handler);
    }).toThrow();
}
