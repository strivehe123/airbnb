const name = 'sakula'
const age = 11

function sayhello() {
    console.log('sayhello')
}
// exports.name = name
// exports.age = age
// exports.sayhello = sayhello
module.exports = {
        name,
        age,
        sayhello
    }
    // console.log(module.exports === exports)