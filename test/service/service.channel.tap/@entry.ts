import { context } from "./context";
import { handler } from "./handler";
import { channel } from "./channel";

export default function () {
    let template = (method: string) => `service.channel.tap.${method}`
    test(template("context"), context)
    test(template("handler"), handler)
    test(template("channel"), channel)
}
