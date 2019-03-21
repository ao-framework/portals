import Portals from "../../../src";
export function removeAllTaps() {
    let service = new Portals().service("something");
    let handler = () => { };
    service.routeTap("one", handler);
    service.routeTap("one", handler);
    service.removeAllTaps("one");
    expect(service.taps("one")).toEqual([]);
}
