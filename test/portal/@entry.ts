import { maxListeners } from "./maxListeners";
import { events } from "./events";
import { constructor } from "./constructor";
import { allocate } from "./allocate";
import { addListener } from "./addListener";
import { on } from "./on";
import { once } from "./once";
import { prependListener } from "./prependListener";
import { prependOnceListener } from "./prependOnceListener";
import { removeListener } from "./removeListener";
import { off } from "./off";
import { removeAllListeners } from "./removeAllListeners";
import { setMaxListeners } from "./setMaxListeners";
import { getMaxListeners } from "./getMaxListeners";
import { listeners } from "./listeners";
import { handlers } from "./handlers";
import { emit } from "./emit";
import { eventNames } from "./eventNames";
import { listenerCount } from "./listenerCount";

export default function () {
    let template = (method: string) => `portal.${method}`
    test(template("maxListeners"), maxListeners)
    test(template("events"), events)
    test(template("constructor"), constructor)
    test(template("allocate"), allocate)
    test(template("addListener"), addListener)
    test(template("on"), on)
    test(template("once"), once)
    test(template("prependListener"), prependListener)
    test(template("prependOnceListener"), prependOnceListener)
    test(template("removeListener"), removeListener)
    test(template("off"), off)
    test(template("removeAllListeners"), removeAllListeners)
    test(template("setMaxListeners"), setMaxListeners)
    test(template("getMaxListeners"), getMaxListeners)
    test(template("listeners"), listeners)
    test(template("handlers"), handlers)
    test(template("emit"), emit)
    test(template("eventNames"), eventNames)
    test(template("listenerCount"), listenerCount)
}
