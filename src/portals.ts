import EventBus from './eventbus/eventbus';
import { EventBusTable } from './interfaces/eventbus.interfaces';
import { ServiceTable } from './interfaces/service.interfaces';
import Service from './service/service';

/**
 * The main definition for Portals
 */
export default class Portals {

    /**
     * Holds the key/value table for the event buses
     */
    private buses: EventBusTable = {}

    /**
     * Holds the key/value table for the services
     */
    private services: ServiceTable = {}

    /**
     * Create and/or retrieve an event bus
     * 
     * @param name The name of the event bus
     */
    public bus(name: string): EventBus {
        if (!this.buses[name]) {
            this.buses[name] = new EventBus(name);
        }
        return this.buses[name];
    }

    /**
     * Create and/or retrieve a service
     * 
     * @param name The name of the service
     */
    public service(name: string) {
        if (!this.services[name]) {
            this.services[name] = new Service(name);
        }
        return this.services[name]
    }

    /**
     * Destroy a bus
     * 
     * @param name The name of the bus
     */
    public destroyBus(name: string) {
        delete this.buses[name]
    }

    /**
     * Destroy a service
     * 
     * @param name The name of the service
     */
    public destroyService(name: string) {
        delete this.services[name];
    }
}
