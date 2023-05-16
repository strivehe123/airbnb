// function createObject(o) {
//     function newFunction() {

//     }
//     newFunction.prototype = o
//     return newFunction()
// }

// function inherit(subtype, supertype) {
//     subtype.prototype = createObject(supertype.prototype);
//     // Object.defineProperty(subtype.prototype, 'constructor', {
//     //     configurable: true,
//     //     writable: true,
//     //     enumerable: false,
//     //     value: subtype
//     // })
//     Object.defineProperty(subtype.prototype, 'constructor', {
//         enumerable: false,
//         writable: true,
//         configurable: true,
//         value: subtype
//     })
// }
// function createObject(o) {
//     function F() {}
//     F.prototype = o
//     return new F()
// }

// function inherit(subtype, supertype) {
//     subtype.prototype = createObject(supertype.prototype);
//     Object.defineProperty(subtype.prototype, 'constructor', {
//         enumerable: false,
//         writable: true,
//         configurable: true,
//         value: subtype
//     })
// }

function createObject(o) {
    function F() {}
    F.prototype = o.prototype
    return new F()
}

function inherit(subtype, supertype) {
    subtype.prototype = createObject(supertype);
    Object.defineProperty(subtype.prototype, 'constructor', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: subtype
        })
        // subtype.__proto__=supertype
        // 实现类方法的继承
    Object.setPrototypeOf(subtype, supertype)
}