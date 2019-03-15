import "jest";
import PortalEventHandlerTests from "./portal.event.handler/@entry"
import PortalEventTests from "./portal.event/@entry"
import PortalTests from "./portal/@entry"
import PortalsTests from "./portals/@entry"

describe("portals", () => {
    describe("portal.event.handler", PortalEventHandlerTests)
    describe("portal.event", PortalEventTests)
    describe("portal", PortalTests)
    describe("portals", PortalsTests)
})
