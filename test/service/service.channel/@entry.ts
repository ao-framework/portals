import { context } from "./context";
import { locked } from "./locked";
import { secure } from "./secure";
import { taps } from "./taps";
import { handlers } from "./handlers";

export default function () {
    let template = (method: string) => `service.channel.${method}`
    test(template("context"), context);
    test(template("locked"), locked)
    test(template("secure"), secure)
    test(template("taps"), taps)
    test(template("handlers"), handlers)
}
