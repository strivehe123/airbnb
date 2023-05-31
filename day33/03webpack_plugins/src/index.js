// import './component/div_cpn'
import { sum } from './utils/math'
import { createApp } from 'vue'
import Hello from './vue_demo/Hello'
const message = 'hello world'
console.log(sum(12, message.length))
const bar = () => {
    console.log('bar is running')
}
bar()
bar()
sum(2, 2)
sum(33, 44)
console.log(message)

// vue代码
createApp(Hello).mount("#app")

// 直接使用DefinePlugin注入的变量
console.log(codewhy)
console.log(counter)
console.log(typeof counter)
console.log(process.env.NODE_ENV)