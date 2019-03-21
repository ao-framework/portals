import ServiceChannel from "../../../src/service/service.channel";
export function context() {
    let channel = new ServiceChannel("something", "something-service");
    expect(channel.context).toBe(undefined);
}
