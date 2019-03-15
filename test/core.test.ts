import "jest";
import Lib = require("../src")


describe("ts-module", () => {
    test("lib should be null", () => {
        expect(Lib).toBe(null);
    })
})
