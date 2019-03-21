import { channel } from "./channel";
import { handlers } from "./handlers";
import { getHandlersIfAllowed } from "./getHandlersIfAllowed";

export default function () {
    let template = (method: string) => `eventbusChannel.${method}`
    test(template("channel"), channel)
    test(template("handlers"), handlers)
    test(template("getHandlersIfAllowed"), getHandlersIfAllowed)
}
