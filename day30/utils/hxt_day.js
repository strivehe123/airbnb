;
(function(g) {
    g = typeof globalThis !== 'undefined' ? globalThis : g
        // 构造函数
    function DayJs() {
        const date = new Date()
        this.$Y = date.getFullYear()
        this.$M = (date.getMonth() + 1 + '').padStart(2, 0)
        this.$D = date.getDate()
    }
    DayJs.prototype.format = function() {
            return `${this.$Y}-${this.$M}-${this.$D}`
        }
        // 工厂函数
    function dayjs() {
        return new DayJs()
    }
    g.dayjs = dayjs
})(this)