import {isType} from '../isType/index';
const {getObjValue,getObjNullValue} = isType()

/**
 * 数组操作
 *
 * 其它推荐：https://juejin.cn/post/7112704104694022152#heading-9
 */
export const utilsArray = () => {

    //数组中是否存在
    const isItem = (arr, item) => {
        return arr.indexOf(item) !== -1;
    }

    //二维数组中是否存在
    const isIndex = (arr, keyName, key) => {
        return getIndex(arr, keyName, key) !== -1
    }

    //移除数组中指定元素
    const del = (arr, item) => {
        let index = arr.indexOf(item);
        let items = [...arr];
        items.splice(index, 1);
        return [...items];
    }

    //移除数组中其它元素
    const delOther = (arr, item) => {
        let index = arr.indexOf(item);
        let items = [...arr];
        for (let i = 0; i < arr.length; i++) {
            if (index !== i) items.splice(i, 1);
        }
        return [...items];
    }

    //移除数组中左边的元素
    const delLeft = (arr, item) => {
        let index = arr.indexOf(item);
        let items = [...arr];
        for (let i = 0; i < arr.length; i++) {
            if (index >= i) return;
            items.splice(i, 1);
        }
        return [...items];
    }

    //移除数组中右边的元素
    const delRight = (arr, item) => {
        let index = arr.indexOf(item);
        let items = [...arr];
        for (let i = 0; i < arr.length; i++) {
            if (index > i) items.splice(i, 1);
        }
        return [...items];
    }

    //替换数组中两个元素的位置
    const replaceItem = (arr, item1, item2) => {
        let index1 = arr.indexOf(item1);
        let index2 = arr.indexOf(item2);
        let items = [...arr];
        items.splice(index1, 1);
        items.splice(index2, 0, item1);
        return [...items];
    }

    //获取数组索引
    const getIndex = (arr, keyName, key) => {
        return arr.findIndex((item) => {
            return item[keyName] == key;
        });
    }

    //移除数组中指定元素
    const delKey = (arr, keyName, key) => {
        const index = getIndex(arr, keyName, key);
        return del(arr, arr[index]);
    }

    //移除数组中其它元素
    const delKeyOther = (arr, keyName, key) => {
        const index = getIndex(arr, keyName, key);
        return delOther(arr, arr[index]);
    }

    //移除数组中左边的元素
    const delKeyLeft = (arr, keyName, key) => {
        const index = getIndex(arr, keyName, key);
        return delLeft(arr, arr[index]);
    }

    //移除数组中右边的元素
    const delKeyRight = (arr, keyName, key) => {
        const index = getIndex(arr, keyName, key);
        return delRight(arr, arr[index]);
    }

    //得到两个数组的交集, 两个数组的元素为数值或字符串
    const intersection = (arr1, arr2) => {
        let len = Math.min(arr1.length, arr2.length)
        let i = -1, res = [];
        while (++i < len) {
            if (arr1.indexOf(arr2[i]) > -1) res.push(arr2[i])
        }
        return res
    }

    //得到两个数组的并集, 两个数组的元素为数值或字符串
    const getUnion = (arr1, arr2) => {
        return Array.from(new Set([...arr1, ...arr2]));
    }

    //判断要查询的数组是否至少有一个元素包含在目标数组中
    const hasOneOf = (arr1, arr2) => {
        return arr1.some(_ => arr2.indexOf(_) > -1);
    }

    //数组随机打乱的方法
    const arrShuffle = (arr) => {
        return arr.sort(() => Math.random() - 0.5)
    }

    //创建初始数组
    const arrFill = (len= 1,val = '') => {
        return new Array(len).fill(val)
    }

    //数组转对象
    const ArrToOneObj = async (arr, keyName, objName = {}, arrName = [], children = 'children') => {
        if (arr && arr.length > 0) {
            for (const item of arr) {
                objName[item[keyName]] = {}
                arrName.push(item[keyName])
                for (const key of Object.keys(item)) {
                    if (key !== children) {
                        objName[item[keyName]][key] = item[key]
                    }
                    if (key === children && item[children] && item[children].length > 0) {
                        await ArrToOneObj(item[children], keyName, objName, arrName, children)
                    }
                }
            }
        }
    }

    //取转换后的对象值
    const getOneObjValue = (objName = {}, keyName, keyName2) => {
        if (keyName2) {
            const objValue = getObjValue(objName[keyName])
            return objValue[keyName2] || ''
        } else {
            return getObjNullValue(objName[keyName])
        }
    }

    //导出
    return {
        isItem,del,delOther,delLeft,delRight,replaceItem,getIndex,delKey,
        delKeyOther,delKeyLeft,delKeyRight,intersection,getUnion,hasOneOf,arrShuffle,
        arrFill, ArrToOneObj, getOneObjValue, isIndex,
    };
}
