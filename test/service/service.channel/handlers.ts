import ServiceChannel from "../../../src/service/service.channel";
export function handlers(done) {
    let channel = new ServiceChannel("something", "something-service");
    channel.handler().catch(() => {
        done();
    });
}
