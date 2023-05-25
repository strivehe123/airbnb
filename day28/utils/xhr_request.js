function xtAjax({
    url,
    method = 'get',
    timeout = 10000,
    headers = {},
    data = {},
    success,
    failture
} = {}) {
    //01 创建对象
    const xhr = new XMLHttpRequest()
        //02 监听数据
    const promise = new Promise((resolve, reject) => {
        xhr.onload = function() {
                // console.log(xhr.response)
                if (xhr.status >= 200 && xhr.status < 300) {
                    success && success(xhr.response)
                } else {
                    failture &&
                        failture({
                            status: xhr.status,
                            message: xhr.statusText
                        })
                }
            }
            //03 设置类型
        xhr.responseType = 'json'
        xhr.timeout = timeout
            //04 open方法
        if (method.toUpperCase() === 'GET') {
            const queryStrings = []
            for (let key in data) {
                queryStrings.push(`${key}=${data[key]}`)
            }
            url = url + '?' + queryStrings.join('&')
            console.log(url)
        }
        xhr.open(method, url)
            //05 send方法
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.send(JSON.stringify(data))
    })
    promise.xhr = xhr
    return promise
}
xtAjax({
    url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/home/new',
    data: {
        name: '11',
        age: 11
    },
    success: function(res) {
        console.log(res)
    },
    failture: function(err) {
        console.log(err)
    }
})