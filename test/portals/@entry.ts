function portals() { }
function portal() { }
function broadcast() { }

export default function () {
    let template = (method: string) => `portals.${method}`
    test(template("portals"), portals)
    test(template("portal"), portal)
    test(template("broadcast"), broadcast)
}
