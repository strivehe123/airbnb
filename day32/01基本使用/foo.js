const name = 'sakula'
const age = 11

function sayHello() {
    console.log('first')
}
// 导出方式1
export {
    name,
    age,
    sayHello
}
// 导出方式2
// export {
//   name as fname,
//   age,
//   sayHello
// }
// 导出方式3
export const lover = [1, 2, 3]