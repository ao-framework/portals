import Portals from "../../../src";
export function removeTap() {
    let service = new Portals().service("something");
    let handler = () => { };
    service.routeTap("one", handler);
    service.routeTap("one", handler);
    service.routeTap("one", () => { });
    service.removeTap("one", handler);
    expect(service.taps("one").length).toEqual(1);
}
