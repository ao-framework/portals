import Portals from "../../../src";
export function channels() {
    let service = new Portals().service("something");
    service.route("one", () => { });
    service.route("two", () => { });
    service.route("three", () => { });
    expect(service.channels()).toEqual(["one", "two", "three"]);
}
