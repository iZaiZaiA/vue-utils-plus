import {isType} from "../isType/index"
const {getObjType} = isType()

/**
 * 转换
 */
export const utilsDeep = () => {

    //对象深拷贝
    const deepClone = (data) => {
        let obj, type = getObjType(data);
        if (type === 'array') {
            obj = [];
        } else if (type === 'object') {
            obj = {};
        } else {
            //不再具有下一层次
            return data;
        }
        if (type === 'array') {
            for (let i = 0, len = data.length; i < len; i++) {
                obj.push(deepClone(data[i]));
            }
        } else if (type === 'object') {
            for (let key in data) {
                obj[key] = deepClone(data[key]);
            }
        }
        return obj;
    }

    //对象深拷贝
    const deepJson = (data) => {
        return JSON.parse(JSON.stringify(data));
    }

    //导出
    return {deepClone,deepJson}
}
