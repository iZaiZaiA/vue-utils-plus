/**
 * 对象处理
 */
export const utilsObject = () => {

    //对象深拷贝
    const deepClone = (obj, cache = new Map()) => {
        const isObject = (obj) => typeof obj === 'object' && obj !== null
        const forEach = (array, cb) => {
            let i = -1, leng = array.length
            while (++i < leng) {
                cb(array[ i ])
            }
        }
        if (isObject(obj)) {
            const cacheObj = cache.get(obj)
            if (cacheObj) return cacheObj
            let cloneTarget = Array.isArray(obj) ? [] : {}
            let keys = Object.keys(obj)
            cache.set(obj, cloneTarget)
            forEach(keys, (key) => {
                const value = obj[ key ]
                cloneTarget[ key ] = isObject(value) ? deepClone(value, cache) : value
            })
            return cloneTarget
        } else {
            return obj
        }
    }

    //判断一个对象是否存在key
    const hasKey = (obj, key) => {
        //如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
        //如果没有传入key这个参数，则判断obj对象是否有键值对
        if (key) return key in obj;
        let keysArr = Object.keys(obj);
        return keysArr.length;
    }

    // 判断两个对象是否相等，这两个对象的值只能是数字或字符串
    const objEqual = (obj1, obj2) => {
        const keysArr1 = Object.keys(obj1)
        const keysArr2 = Object.keys(obj2)
        if (keysArr1.length !== keysArr2.length) return false
        else if (keysArr1.length === 0 && keysArr2.length === 0) return true
        else return !keysArr1.some(key => obj1[key] != obj2[key])
    }

    //导出
    return {deepClone,hasKey,objEqual}
}
