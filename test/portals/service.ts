import Portals, { Service } from "../../src";
export function service() {
    expect(new Portals().service("something")).toBeInstanceOf(Service);
    //========
    let portals = new Portals();
    portals.service("something");
    expect(portals.service("something")).toBeInstanceOf(Service);
}
