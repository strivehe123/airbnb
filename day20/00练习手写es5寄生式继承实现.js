function createObject(o) {
    function F() {}
    F.prototype = o.prototype
    return new F()
}

function inherit(subtype, supertype) {
    subtype.prototype = createObject(supertype);
    Object.defineProperty(subtype.prototype, 'constructor', {
        value: subtype,
        writable: true,
        enumerable: false,
        configurable: true
    });
    // subtype.__proto__==supertype
    // 实现类方法的继承
    Object.setPrototypeOf(subtype, supertype)
}