interface ICache {
    getCache(key: string, localStorage: boolean): any;
    setCache(key: string, value: any, localStorage: boolean): boolean;
    deleteCache(key: string, localStorage: boolean): void;
    clearCache(localStorage: boolean): void; // 清除所有缓存
}
class Cache implements ICache {

    getCache(key: string, localStorage: boolean = true) {
        // 实现缓存获取逻辑
        let res: string = ''
        if (localStorage) {
            res = window.localStorage.getItem(key) || ''
        } else {
            res = window.sessionStorage.getItem(key) || ''
        }
        return JSON.parse(res)
    }
    setCache(key: string, value: any, localStorage: boolean = true): boolean {
        try {
            // 实现缓存设置逻辑 
            let val = JSON.stringify(value)
            if (localStorage) {
                window.localStorage.setItem(key, val)
            } else {
                window.sessionStorage.setItem(key, val)
            }
            return true
        }
        catch (e) {
            return false
        }
    }
    deleteCache(key: string, localStorage: boolean = true) {
        if (localStorage) {
            window.localStorage.removeItem(key)
        } else {
            window.sessionStorage.removeItem(key)
        }
    }
    clearCache(localStorage: boolean = true) {
        if (localStorage) {
            window.localStorage.clear()
        } else {
            window.sessionStorage.clear()
        }
    }

}

export default new Cache()