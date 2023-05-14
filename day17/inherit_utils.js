function createObject(o) {
    function F() {}
    F.prototype = o
    return new F()
}

function inherit(subtype, supertype) {
    subtype.prototype = createObject(supertype.prototype);
    Object.defineProperty(subtype.prototype, 'constructor', {
        enumerable: false,
        writable: true,
        configurable: true,
        value: subtype
    })
}