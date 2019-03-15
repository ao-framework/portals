import { Portal } from "../../src";
export function constructor() {
    let portal = new Portal("something");
    expect(portal.name).toBe("something");
}
