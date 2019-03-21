import Portals from "../../src";
export function destroyBus() {
    let portals = new Portals();
    portals.bus("something");
    portals.destroyBus("something");
    expect(portals["buses"]).toEqual({});
}
