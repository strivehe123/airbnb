// 如果需要按需导入 的话 需要使用import()函数  该函数返回一个Pormise
const flat = true
if (flag) {
    import ('./foo.js').then(
        res => {
            console.log('first')
        }
    )
    console.log('----------')
}