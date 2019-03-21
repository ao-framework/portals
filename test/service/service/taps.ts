import Portals from "../../../src";
export function taps() {
    let service = new Portals().service("something");
    service.route("one", () => { });
    let handler = () => { };
    service.routeTap("one", handler);
    expect(service.taps("one")[0].handler === handler);
}
