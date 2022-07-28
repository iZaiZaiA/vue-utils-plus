/**
 * 生成随机字符
 */
export const utilsRandom = () => {

    //生成随机len位数字
    const randomLenNum = (len, date) => {
        let random = '';
        random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len ? len : 4);
        if (date) random = random + Date.now();
        return random;
    }

    //生成随机字符串
    const getRandom = (num= 8) => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let maxPos = chars.length, value = '';
        for (let i = 0; i < num; i++) {
            value += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return value;
    }

    //数组随机打乱的方法
    const arrShuffle = (array) => {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    //导出
    return {randomLenNum,getRandom,arrShuffle}
}
