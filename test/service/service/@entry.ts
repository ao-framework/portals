import { $channels } from "./$channels";
import { serviceName } from "./serviceName";
import { allocate } from "./allocate";
import { name } from "./name";
import { channels } from "./channels";
import { taps } from "./taps";
import { removeTap } from "./removeTap";
import { removeAllTaps } from "./removeAllTaps";
import { request } from "./request";
import { requestSecure } from "./requestSecure";
import { remove } from "./remove";
import { route } from "./route";
import { routeLock } from "./routeLock";
import { routeLockSec } from "./routeLockSec";
import { routeTap } from "./routeTap";
import { throwLocked } from "./throwLocked";

export default function () {
    const template = (method: string) => `service.${method}`;
    test(template("$channels"), $channels)
    test(template("serviceName"), serviceName)
    test(template("allocate"), allocate)
    test(template("name"), name)
    test(template("channels"), channels)
    test(template("taps"), taps)
    test(template("removeTap"), removeTap)
    test(template("removeAllTaps"), removeAllTaps)
    test(template("request"), request)
    test(template("request.secure"), requestSecure)
    test(template("remove"), remove)
    test(template("route"), route)
    test(template("routeLock"), routeLock)
    test(template("routeLockSec"), routeLockSec)
    test(template("routeTap"), routeTap)
    test(template("throwLocked"), throwLocked)
}
