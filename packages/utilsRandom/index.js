/**
 * 生成随机字符
 */
export const utilsRandom = () => {

    //生成UUID
    const UUID = () => {
        return crypto.randomUUID();
    }

    //UniqueID
    const UniqueID = () => {
        return Math.random().toString(36).slice(8);
    }

    const NUM = '0123456789';
    const XEU = 'abcdefghijklmnopqrstuvwxyz';
    const DEU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    //生成随机字符串,默认为全部类型
    const getRandom = (num= 8, type) => {
        if (!type) type = NUM + XEU + DEU
        let maxPos = type.length, value = '';
        for (let i = 0; i < num; i++) {
            value += type.charAt(Math.floor(Math.random() * maxPos));
        }
        return value;
    }

    //数字
    const getNumber = (num) => {
        return getRandom(num, NUM);
    }

    //小写字母
    const getLowerCase = (num) => {
        return getRandom(num, XEU);
    }

    //大写字母
    const getUpperCase = (num) => {
        return getRandom(num, DEU);
    }

    //数字+ 小写字母
    const getNumberLower = (num) => {
        return getRandom(num, NUM + XEU);
    }

    //数字 + 大写字母
    const getNumberUpper = (num) => {
        return getRandom(num, NUM + DEU);
    }

    //小写字母 + 大写字母
    const getAlphabets = (num) => {
        return getRandom(num, XEU + DEU);
    }

    //范围随机数
    const getRandomFrom = (upper,lower) => {
        return Math.floor(Math.random() * (upper - lower + 1) + lower);
    }

    //导出
    return {UUID,UniqueID,getRandom,getNumber,getLowerCase,getUpperCase,getNumberLower,getNumberUpper,getAlphabets,getRandomFrom};
}
