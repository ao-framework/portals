import ServiceChannelTap from "../../../src/service/service.channel.tap";
export function handler() {
    let tap = new ServiceChannelTap("something");
    expect(tap.handler).toBe(undefined);
}
