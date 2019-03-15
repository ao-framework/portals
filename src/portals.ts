import Portal from "./portal";

export default class Portals {
    private portals: { [key: string]: Portal } = {}

    public portal(name: string) {
        if (!this.portals[name]) {
            this.portals[name] = new Portal(name);
        }
        return this.portals[name];
    }

    public broadcast(event: string | symbol, ...args: any[]) {
        for (var iterator in this.portals) {
            this.portals[iterator].emit(event, ...args);
        }
    }
}
