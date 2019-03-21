import Portals from "../../../src";
export function requestSecure(done) {
    let service = new Portals().service("something");
    service.routeLockSec("do", (one, two, three) => {
        expect(one).toBe(1);
        expect(two).toBe(2);
        expect(three).toBe(3);
        done();
    });
    service.request("do", 1, 2, 3);
}
