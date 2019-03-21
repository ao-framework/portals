import { EventBus } from "../../../src";
export function emit(done) {
    let checkin: string[] = [];
    let eventBus = new EventBus("something");
    eventBus.once("something", () => {
        checkin.push("once");
    });
    eventBus.addListener("something", () => {
        checkin.push("addListener");
    });
    eventBus.addListener("something", () => {
        checkin.push("secondListener");
    });
    eventBus.emit("something", 1, 2, 3);
    eventBus.addListener("something", () => {
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
    eventBus.emit("something", 1, 2, 3);
}
