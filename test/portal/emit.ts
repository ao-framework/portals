import { Portal } from "../../src";
export function emit(done) {
    let checkin: string[] = [];
    let portal = new Portal("something");
    portal.once("something", () => {
        checkin.push("once");
    });
    portal.addListener("something", () => {
        checkin.push("addListener");
    });
    portal.addListener("something", () => {
        checkin.push("secondListener");
    });
    portal.emit("something", 1, 2, 3);
    portal.addListener("something", () => {
        checkin.push("last");
        expect(checkin).toEqual([
            "once",
            "addListener",
            "secondListener",
            "addListener",
            "secondListener",
            "last"
        ]);
        done();
    });
    portal.emit("something", 1, 2, 3);
}
