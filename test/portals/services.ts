import Portals from "../../src";
export function services() {
    let portals = new Portals();
    expect(portals["services"]).toEqual({});
}
