import Portals, { EventBus } from "../../src";
export function bus() {
    expect(new Portals().bus("something")).toBeInstanceOf(EventBus);
    //========
    let portals = new Portals();
    portals.bus("something");
    expect(portals.bus("something")).toBeInstanceOf(EventBus);
}
