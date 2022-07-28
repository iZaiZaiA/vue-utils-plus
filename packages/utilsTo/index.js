import {isType} from "../isType/index"
const {isValueNull} = isType()

/**
 * 转换
 */
export const utilsTo = () => {

    //强转int型
    const toInt = (val, defaultValue) => {
        if (isValueNull(val)) {
            return defaultValue === undefined ? -1 : defaultValue;
        }
        const num = parseInt(val, 0);
        return Number.isNaN(num) ? (defaultValue === undefined ? -1 : defaultValue) : num;
    }

    //Json强转为Form类型
    const toFormData = (obj) => {
        const data = new FormData();
        Object.keys(obj).forEach(key => {
            data.append(key, Array.isArray(obj[key]) ? obj[key].join(',') : obj[key]);
        });
        return data;
    }

    //date类转为字符串格式
    const dateToFormat = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
        return date ? date.format(format) : null;
    }

    //根据逗号联合
    const toJoin = (arr) => {
        return arr ? arr.join(',') : '';
    }

    //根据逗号分隔
    const toSplit = (str) => {
        return str ? String(str).split(',') : '';
    }

    //表单序列化
    const toSerialize = (data) => {
        let list = [];
        Object.keys(data).forEach(ele => {
            list.push(`${ele}=${data[ele]}`)
        })
        return list.join('&');
    }

    //颜色混合
    const toColor = (c1, c2, ratio) => {
        ratio = Math.max(Math.min(Number(ratio), 1), 0)
        let r1 = parseInt(c1.substring(1, 3), 16)
        let g1 = parseInt(c1.substring(3, 5), 16)
        let b1 = parseInt(c1.substring(5, 7), 16)
        let r2 = parseInt(c2.substring(1, 3), 16)
        let g2 = parseInt(c2.substring(3, 5), 16)
        let b2 = parseInt(c2.substring(5, 7), 16)
        let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
        let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
        let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
        r = ('0' + (r || 0).toString(16)).slice(-2)
        g = ('0' + (g || 0).toString(16)).slice(-2)
        b = ('0' + (b || 0).toString(16)).slice(-2)
        return '#' + r + g + b
    }

    /**
     * Sums the passed percentage to the R, G or B of a HEX color
     * @param {string} color The color to change
     * @param {number} amount The amount to change the color by
     * @returns {string} The processed part of the color
     */
    const addLight = (color, amount) => {
        const cc = parseInt(color, 16) + amount;
        const c = cc > 255 ? 255 : cc;
        return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
    }

    /**
     * Lightens a 6 char HEX color according to the passed percentage
     * @param {string} color The color to change
     * @param {number} amount The amount to change the color by
     * @returns {string} The processed color represented as HEX
     */
    const toLighten = (color, amount) => {
        color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
        amount = Math.trunc((255 * amount) / 100);
        return `#${addLight(color.substring(0, 2), amount)}${addLight(
            color.substring(2, 4),
            amount
        )}${addLight(color.substring(4, 6), amount)}`;
    }

    //导出
    return {toInt,toFormData,dateToFormat,toJoin,toSplit,toSerialize,toColor,toLighten}
}
