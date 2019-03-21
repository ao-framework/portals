import ServiceChannelTap from "../../../src/service/service.channel.tap";
export function channel() {
    let tap = new ServiceChannelTap("something");
    expect(tap.channel).toBe("something");
}
