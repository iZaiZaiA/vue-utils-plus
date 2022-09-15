import {isValidate} from "../isValidate/index"
const {isValidateNull} = isValidate()

/**
 * 缓存数据
 */
export const utilsStore = (prefix) => {

    //缓存前缀
    const prefixKey = prefix ? prefix + '-' : '';

    //获取缓存
    const getStoreData = (key, debug = false, session = false) => {
        return getStore({
            name: key,
            debug: debug,
            session: session
        })
    }

    //保存缓存
    const setStoreData = (key, value, session = false) => {
        return setStore({
            name: key,
            content: value,
            session: session
        })
    }

    //删除缓存
    const delStoreData = (key, session = false) => {
        return removeStore({
            name: key,
            session: session
        })
    }

    //存储localStorage
    const setStore = ({name, content, session}) => {
        let names = prefixKey + name
        let obj = {
            dataType: typeof (content),
            content: content ?? '',
            session: session ?? '',
            datetime: new Date().getTime()
        }
        if (session) {
            window.sessionStorage.setItem(names, JSON.stringify(obj));
        } else {
            window.localStorage.setItem(names, JSON.stringify(obj));
        }
    }

    //获取localStorage
    const getStore = ({name, debug, session}) => {
        let obj, content, names = prefixKey + name;
        if (session) {
            obj = window.sessionStorage.getItem(names);
        } else {
            obj = window.localStorage.getItem(names);
        }
        if (isValidateNull(obj)) {
            return;
        }
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
    const removeStore = ({name, session}) => {
        let names = prefixKey + name
        if (session) {
            window.sessionStorage.removeItem(names);
        } else {
            window.localStorage.removeItem(names);
        }
    }

    //获取全部localStorage
    const getAllStore = ({session}) => {
        let list = [];
        if (session) {
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
    const clearStore = ({session}) => {
        if (session) {
            window.sessionStorage.clear();
        } else {
            window.localStorage.clear()
        }
    }

    //清空全部localStorage
    const clearStoreAll = () => {
        window.sessionStorage.clear();
        window.localStorage.clear()
    }

    //导出
    return {getStoreData,setStoreData,delStoreData,setStore,getStore,removeStore,getAllStore,clearStore,clearStoreAll}
}
