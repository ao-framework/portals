import "jest";
import PortalsTests from "./portals/@entry"
import EventbusTests from "./eventbus/eventbus/@entry"
import EventbusChannelTests from "./eventbus/eventbus.channel/@entry"
import EventbusHandlerTests from "./eventbus/eventbus.handler/@entry"
import ServiceTests from "./service/service/@entry"
import ServiceChannel from "./service/service.channel/@entry"
import ServiceChannelTapTests from "./service/service.channel.tap/@entry"

describe("Portals", () => {
    describe("Portals.base", PortalsTests)
    describe("Eventbus", EventbusTests)
    describe("EventbusChannel", EventbusChannelTests)
    describe("EventbusHandler", EventbusHandlerTests)
    describe("ServiceTests", ServiceTests)
    describe("ServiceChannel", ServiceChannel)
    describe("SeriviceChannelTapTests", ServiceChannelTapTests)
})
