import Portals from "../../../src";
export function name() {
    let service = new Portals().service("something");
    expect(service.name()).toBe("something");
}
