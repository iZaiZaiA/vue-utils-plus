/**
 * 判断类型
 */
export const isType = () => {
    const toString = Object.prototype.toString;

    //判断值是否未某个类型
    const is = (val, type) => {
        return toString.call(val) === `[object ${type}]`;
    }

    //是否为函数
    const isFunction = (val) => {
        return is(val, 'Function');
    }

    //是否为空对象
    const isObjNull = (val) => {
        return JSON.stringify(val) == "{}";
    }

    //是否已定义
    const isDef = (val) => {
        return typeof val !== 'undefined';
    }

    const isUnDef = (val) => {
        return !isDef(val);
    }

    //是否为对象
    const isObject = (val) => {
        return val !== null && is(val, 'Object');
    }

    //是否为时间
    const isDate = (val) => {
        return is(val, 'Date');
    }

    //是否为数值
    const isNumber = (val) => {
        return is(val, 'Number');
    }

    //是否为AsyncFunction
    const isAsyncFunction = (val) => {
        return is(val, 'AsyncFunction');
    }

    //是否为promise
    const isPromise = (val) => {
        return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
    }

    //是否为字符串
    const isString = (val) => {
        return is(val, 'String');
    }

    //是否为boolean类型
    const isBoolean = (val) => {
        return is(val, 'Boolean');
    }

    //是否为数组
    const isArray = (val) => {
        return val && Array.isArray(val);
    }

    //是否客户端
    const isClient = (val) => {
        return typeof window !== 'undefined';
    }

    //是否为浏览器
    const isWindow = (val) => {
        return typeof window !== 'undefined' && is(val, 'Window');
    }

    const isElement = (val) => {
        return isObject(val) && !!val.tagName;
    };

    // 是否为图片节点
    const isImageDom = (val) => {
        return val && ['IMAGE', 'IMG'].includes(val.tagName);
    }

    const isNull = (val) => {
        return val === null;
    }

    const isNullAndUnDef = (val) => {
        return isUnDef(val) && isNull(val);
    }

    const isNullOrUnDef = (val) => {
        return isUnDef(val) || isNull(val);
    }

    const isNullAll = (val) => {
        return typeof val === undefined || val === null || val === '';
    }

    //是否为空，采用ES6，最终效果和 isNullAll 一致
    const isValueNull = (val) => {
        return (val??'') === '';
    }

    //数据类型
    const getObjType = (obj) => {
        let toString = Object.prototype.toString;
        let map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    }

    //导出
    return {
        is,isFunction,isObjNull,isDef,isUnDef,isObject,isDate,isNumber,isAsyncFunction,
        isPromise,isString,isBoolean,isArray,isClient,isWindow,isElement,isImageDom,isNull,
        isNullAndUnDef,isNullOrUnDef,isNullAll,isValueNull,getObjType
    }
}
