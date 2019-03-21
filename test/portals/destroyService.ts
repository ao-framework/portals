import Portals from "../../src";
export function destroyService() {
    let portals = new Portals();
    portals.service("something");
    portals.destroyService("something");
    expect(portals["services"]).toEqual({});
}
