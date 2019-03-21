import Portals from "../../src";
export function buses() {
    let portals = new Portals();
    expect(portals["buses"]).toEqual({});
}
