/**
 * 文本操作
 */
export const utilsText = () => {

    //金额处理:保留几位小数，不四舍五入(关于金额数值的处理用这个方法,以防金额计算出错)
    const priceFormat = (price, decimal = 2) => {
        if (price) {
            let price = (price * 100) / 100;
            return parseFloat(price)
                .toFixed(decimal)
                .toString()
                .split('')
                .reverse()
                .join('')
                .replace(/(\d{3})/g, '$1,')
                .replace(/\,$/, '')
                .split('')
                .reverse()
                .join('')
        } else {
            return 0;
        }
    }

    //数字格式化
    const numberFormat = (num) => {
        if (num > 1000 && num < 10000) {
            return Math.floor(num / 1000) + 'K';
        } else if (num > 10000) {
            return Math.floor(num / 10000) + 'W';
        } else {
            return num;
        }
    }

    //设置复制文本
    const setCopyText = async (text) => {
        return await navigator.clipboard.writeText(text);
    }

    //取剪切板文本
    const getCopyText = async () => {
        return await navigator.clipboard.readText();
    }

    //输入框插入内容
    const setPosInsert = (startPos, endPos, value, value2) => {
        if (!value) return value2; //输入框无内容时，直接覆盖
        if (value.length === startPos) {
            //光标在最后时，直接追加
            return value + value2
        } else {
            //光标在其它位置时，裁取文本，并拼接
            return value.substring(0, startPos) + value2 + value.substring(endPos, value.length)
        }
    }

    //设置光标位置
    const setPosRange = (id, pos) => {
        document.getElementById(id)?.setSelectionRange(pos,pos)
    }

    //导出
    return {priceFormat,numberFormat,setCopyText,getCopyText,setPosInsert,setPosRange}
}
