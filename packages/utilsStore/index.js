import {isValidate} from "../isValidate/index"
const {isValidateNull} = isValidate()

/**
 * 缓存数据
 */
export const utilsStore = (prefix) => {

    //缓存前缀
    const prefixKey = prefix?prefix + '-': '';

    //获取缓存
    const getStoreData = (key) => {
        return getStore({name: key})
    }

    //保存缓存
    const setStoreData = (key,value) => {
        return setStore({name: name, content: value})
    }

    //删除缓存
    const delStoreData = (key) => {
        return removeStore({name: key})
    }

    //存储localStorage
    const setStore = (params = {}) => {
        let {name, content, type} = params;
        name = prefixKey + name
        let obj = {
            dataType: typeof (content),
            content: content,
            type: type,
            datetime: new Date().getTime()
        }
        if (type) {
            window.sessionStorage.setItem(name, JSON.stringify(obj));
        } else {
            window.localStorage.setItem(name, JSON.stringify(obj));
        }
    }

    //获取localStorage
    const getStore = (params = {}) => {
        let {name, debug} = params;
        name = prefixKey + name
        let obj = {}, content;
        obj = window.sessionStorage.getItem(name);
        if (isValidateNull(obj)) obj = window.localStorage.getItem(name);
        if (isValidateNull(obj)) return;
        try {
            obj = JSON.parse(obj);
        } catch {
            return obj;
        }
        if (debug) {
            return obj;
        }
        if (obj.dataType === 'string') {
            content = obj.content;
        } else if (obj.dataType === 'number') {
            content = Number(obj.content);
        } else if (obj.dataType === 'boolean') {
            content = eval(obj.content);
        } else if (obj.dataType === 'object') {
            content = obj.content;
        }
        return content ?? '';
    }

    //删除localStorage
    const removeStore = (params = {}) => {
        let {name, type} = params;
        name = prefixKey + name
        if (type) {
            window.sessionStorage.removeItem(name);
        } else {
            window.localStorage.removeItem(name);
        }
    }

    //获取全部localStorage
    const getAllStore = (params = {}) => {
        let list = [], {type} = params;
        if (type) {
            for (let i = 0; i <= window.sessionStorage.length; i++) {
                list.push({
                    name: window.sessionStorage.key(i),
                    content: getStore({
                        name: window.sessionStorage.key(i),
                        type: 'session'
                    })
                })
            }
        } else {
            for (let i = 0; i <= window.localStorage.length; i++) {
                list.push({
                    name: window.localStorage.key(i),
                    content: getStore({
                        name: window.localStorage.key(i),
                    })
                })

            }
        }
        return list;
    }

    //清空全部localStorage
    const clearStore = (params = {}) => {
        let {type} = params;
        if (type) {
            window.sessionStorage.clear();
        } else {
            window.localStorage.clear()
        }
    }

    //清空全部localStorage
    const clearStoreAll = (params = {}) => {
        window.sessionStorage.clear();
        window.localStorage.clear()
    }

    //导出
    return {getStoreData,setStoreData,delStoreData,setStore,getStore,removeStore,getAllStore,clearStore,clearStoreAll}
}
