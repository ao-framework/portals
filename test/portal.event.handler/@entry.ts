function count() { }
function context() { }
function listener() { }

export default function () {
    let template = (method: string) => `portal.event.handler.${method}`
    test(template("count"), count)
    test(template("context"), context)
    test(template("listener"), listener)
}
