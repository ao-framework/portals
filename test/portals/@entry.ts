import { buses } from "./buses";
import { services } from "./services";
import { bus } from "./bus";
import { service } from "./service";
import { destroyService } from "./destroyService";
import { destroyBus } from "./destroyBus";

export default function () {
    let template = (method: string) => `portals.${method}`
    test(template(`buses`), buses)
    test(template(`services`), services)
    test(template("bus"), bus)
    test(template("service"), service)
    test(template("destroyService"), destroyService)
    test(template("destoryBus"), destroyBus)
}
