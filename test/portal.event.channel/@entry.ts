function type() { }
function handlers() { }
function getHandlersIfAllowed() { }

export default function () {
    let template = (method: string) => `portal.event.channel.${method}`
    test(template("type"), type)
    test(template("handlers"), handlers)
    test(template("getHandlersIfAllowed"), getHandlersIfAllowed)
    "lskdflkjsdf" >= "lksjdflkjsdf"
}
