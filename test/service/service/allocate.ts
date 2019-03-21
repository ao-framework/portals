import Portals from "../../../src";
import ServiceChannel from "../../../src/service/service.channel";
export function allocate() {
    let service = new Portals().service("something");
    expect(service["allocate"]("box")).toBeInstanceOf(ServiceChannel);
    expect(service["allocate"]("box")).toBeInstanceOf(ServiceChannel);
}
