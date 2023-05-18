class Cache {
    constructor(islocal = True) {
        this.store = islocal ? localStorage : sessionStorage
    }
    getCache(key) {

        const value = this.store.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
    }
    setCache(key, value) {
        if (!value) {
            throw new Error('value error: value can not be null')
        }
        this.store.setItem(key, JSON.stringify(value))
    }
    removeCache(key) {
        this.store.removeItem(key)
    }
    clearCache() {
        this.store.clear()
    }
}
const localCache = new Cache()
const sessionCache = new Cache(false)