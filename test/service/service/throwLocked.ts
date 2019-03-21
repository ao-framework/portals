import Portals from "../../../src";
export function throwLocked() {
    let service = new Portals().service("something");
    expect(() => {
        service["throwLocked"]("something");
    }).toThrow();
}
