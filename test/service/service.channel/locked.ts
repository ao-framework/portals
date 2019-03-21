import ServiceChannel from "../../../src/service/service.channel";
export function locked() {
    let channel = new ServiceChannel("something", "something-service");
    expect(channel.locked).toBe(false);
}
