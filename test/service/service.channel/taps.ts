import ServiceChannel from "../../../src/service/service.channel";
export function taps() {
    let channel = new ServiceChannel("something", "something-service");
    expect(channel.taps).toEqual([]);
}
