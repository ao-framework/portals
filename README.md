<p align="center">
<img width="150" src="https://ao-framework.github.io/website/ao.logo.svg"><br>
<b>Portals</b>
</p>

<p align="center"><em>Currently in early development. Breaking changes will occur frequently.</em></p>

**Portals** is a library for dealing with asynchronous event-driven architecture in two ways. The first is the run-of-the-mill event bus with a different way of handling context. The second provides a way of declaring services with multiple endpoints for those that don’t like the “ping-pong” concept in all cases; endpoints are tappable, lockable, and securable.

### Install
```bash
npm install @ao-framework/portals
```

### Global Reference Location
```ts
import Portals from "@ao-framework"

export default new Portals();
```

### Event Bus
```ts
import portals from "./global.reference"

class AppState {
    public constructor() {
        portals.bus("app.state")
            .on("something", this.doSomething, this)
            .on("something.else", this.doSomething, null)
    }

    public doSomething() {}

    public unregister() {
        portals.bus("app.state")
            .removeListener("something", this.doSomething)
            .removeListener("something.else", this.doSomething)
    }
}
```
### Service
```ts
class AppState {
    public constructor() {
        portals.service("app.state")
            .route("get.users", this.getUsers, this)//can be changed and tapped
            .routeTap("get.users", logger.debugSync, logger)
            .routeLock("get.users", this.getUsers, null)//cannot be changed
            .routeLockSec("get.users", this.getUsers, null)//cannot be tapped
    }
    //...
}

portals.services("app.state")
    .request("get.users", ...args)
    .then(users => console.log(users))
```
