// 导入方式1
// import { name, age, sayHello } from './foo.js'
// 导入方式2  导入的时候起别名
import { name as fname, age, sakula } from './foo.js'
// 导入方式3  给整个模块起别名
import * as foo from './foo'
console.log(foo.name)
const name = 'main'
console.log(name)
console.log(age)
sayHello()