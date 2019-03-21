import ServiceChannelTap from "../../../src/service/service.channel.tap";
export function context() {
    let tap = new ServiceChannelTap("something");
    expect(tap.context).toBe(undefined);
}
