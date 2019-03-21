import Portals from "../../../src";
export function serviceName() {
    let service = new Portals().service("something");
    expect(service["serviceName"]).toBe("something");
}
