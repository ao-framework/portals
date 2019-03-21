import { count } from "./count";
import { context } from "./context";
import { listener } from "./listener";

export default function () {
    let template = (method: string) => `eventbusHandler.${method}`
    test(template("count"), count)
    test(template("context"), context)
    test(template("listener"), listener)
}
