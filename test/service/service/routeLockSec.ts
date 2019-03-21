import Portals from "../../../src";
export function routeLockSec() {
    let service = new Portals().service("something");
    let handler = () => { };
    let d = service.routeLockSec("one", handler);
    expect(service["$channels"]["one"].handler).toBe(handler);
    expect(service["$channels"]["one"].locked).toBe(true);
    expect(service["$channels"]["one"].secure).toBe(true);
    d();
    expect(service["$channels"]["one"]).toBe(undefined);
    expect(() => {
        service.routeLockSec("one", handler);
        service.routeLockSec("one", handler);
    }).toThrow();
}
