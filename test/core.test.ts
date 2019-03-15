import "jest";
import PortalEventHandlerTests from "./portal.event.handler/@entry"
import PortalEventChannelTests from "./portal.event.channel/@entry"
import PortalTests from "./portal/@entry"
import PortalsTests from "./portals/@entry"

describe("portals", () => {
    describe("portal.event.handler", PortalEventHandlerTests)
    describe("portal.event.channel", PortalEventChannelTests)
    describe("portal", PortalTests)
    describe("portals", PortalsTests)
})
