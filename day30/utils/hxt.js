;
(function(g) {
    function Lodash() {

    }
    // 添加类方法
    Lodash.version = '1.0.0'
    Lodash.join = function(arr, separater) {
        return arr.join(separater)
    }
    g._ = Lodash
})(window)