import '../css/div_style.css'
import '../css/title_style.less'
const divEl = document.createElement('div');
divEl.classList.add('content')
divEl.textContent = 'hello world'
document.body.append(divEl)
    // 创建h2元素
const h2 = document.createElement('h2');
h2.classList.add('title')
h2.textContent = '哈哈'
document.body.append(h2)