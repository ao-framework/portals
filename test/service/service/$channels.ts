import Portals from "../../../src";
export function $channels() {
    let service = new Portals().service("something");
    expect(service["$channels"]).toEqual({});
}
