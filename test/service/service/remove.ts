import Portals from "../../../src";
export function remove() {
    let service = new Portals().service("something");
    let handler = () => { };
    service.route("do", handler);
    service.remove("do");
    expect(service["$channels"]["do"]).toBe(undefined);
    service.routeLock("do", handler);
    expect(() => {
        service.remove("do");
    }).toThrow();
}
