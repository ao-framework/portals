import ServiceChannel from "../../../src/service/service.channel";
export function secure() {
    let channel = new ServiceChannel("something", "something-service");
    expect(channel.secure).toBe(false);
}
