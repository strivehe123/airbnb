import '../css/div_style.css'
import '../css/title_style.less'
import '../css/bg_style.css'
// 引入图片
import girl from '../img/girl.jpeg'
const divEl = document.createElement('div');
divEl.classList.add('content')
divEl.textContent = 'hello world'
document.body.append(divEl)
    // 创建h2元素
const h2 = document.createElement('h2');
h2.classList.add('title')
h2.textContent = '哈哈'
document.body.append(h2)
    // 创建图片模块
const img = document.createElement('img')
img.src = girl
document.body.append(img)

// 创建div元素 背景图片
const div = document.createElement('div')
div.classList.add('img-bg')
document.body.append(div)