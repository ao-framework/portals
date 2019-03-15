import Portal from "./portal";

/**
 * Definition of the Portals
 */
export default class Portals {

    /**
     * Holds the table of portals
     */
    private portals: { [key: string]: Portal } = {}

    /**
     * Retrieves and/or creates a portal
     * @param name The name of the portal
     */
    public portal(name: string) {
        if (!this.portals[name]) {
            this.portals[name] = new Portal(name);
        }
        return this.portals[name];
    }

    /**
     * Broadcast to all portals
     * @param event 
     * @param args 
     */
    public broadcast(event: string | symbol, ...args: any[]) {
        for (var iterator in this.portals) {
            this.portals[iterator].emit(event, ...args);
        }
    }
}
