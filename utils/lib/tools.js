
// 下载文件
export const download = (res) => {
    let blob = new Blob([res.data], { type: "application/vnd.ms-excel" });//type是文件类，详情可以参阅blob文件类型
    // 创建新的URL并指向File对象或者Blob对象的地址
    const blobURL = window.URL.createObjectURL(blob)
    // 创建a标签，用于跳转至下载链接
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', decodeURI(res.headers['content-disposition'].split(';')[1].split('=')[1]))
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank')
    }
    // 挂载a标签
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    // 释放blob URL地址
    window.URL.revokeObjectURL(blobURL)
}


//生成随机字符串
export const getRandom = (num= 8) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let maxPos = chars.length, value = '';
    for (let i = 0; i < num; i++) {
        value += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return value;
}

export const getScreen = (text) => {
    let width = document.body.clientWidth;
    if (width >= 1200) {
        return 3; //大屏幕
    } else if (width >= 992) {
        return 2; //中屏幕
    } else if (width >= 768) {
        return 1; //小屏幕
    } else {
        return 0; //超小屏幕
    }
};

//数组随机打乱的方法
export const arrShuffle = (array) => {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

/**
 * 工作流统一分类格式
 * @param category 分类字典号
 * @returns {string}
 */
export function flowCategory(category) {
    return `flow_${category}`;
}

/**
 * 根据key获取流程路由
 * @param routes
 * @param key
 */
export function flowRoute(routes, key) {
    const data = routes.filter(d => {
        return d.routeKey === key;
    });
    return data.length === 0 ? [] : data[0].routeValue;
}

//复制文本
export const copyText = (text) => {
    let createInput = document.createElement('textarea');
    createInput.value = text;
    document.body.appendChild(createInput);
    createInput.select();
    document.execCommand('Copy');
    createInput.className = 'createInput';
    createInput.style.display = 'none';
};

/**
 * Lightens a 6 char HEX color according to the passed percentage
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed color represented as HEX
 */
export function lighten(color, amount) {
    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
    amount = Math.trunc((255 * amount) / 100);
    return `#${addLight(color.substring(0, 2), amount)}${addLight(
        color.substring(2, 4),
        amount
    )}${addLight(color.substring(4, 6), amount)}`;
}

/**
 * Sums the passed percentage to the R, G or B of a HEX color
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed part of the color
 */
function addLight(color, amount) {
    const cc = parseInt(color, 16) + amount;
    const c = cc > 255 ? 255 : cc;
    return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}

//颜色混合
export const colourBlend = (c1, c2, ratio) => {
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
