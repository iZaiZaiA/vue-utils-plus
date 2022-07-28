//对象深拷贝
export const deepClone = data => {
    let type = getObjType(data);
    let obj;
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
};

//表单序列化
export const serialize = data => {
    let list = [];
    Object.keys(data).forEach(ele => {
        list.push(`${ele}=${data[ele]}`)
    })
    return list.join('&');
};

export const getObjType = obj => {
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
};

//加密处理
export const encryption = (params) => {
    let {data, type, param, key} = params;
    let result = JSON.parse(JSON.stringify(data));
    if (type === 'Base64') {
        param.forEach(ele => {
            result[ele] = btoa(result[ele]);
        })
    } else if (type === 'Aes') {
        param.forEach(ele => {
            result[ele] = window.CryptoJS.AES.encrypt(result[ele], key).toString();
        })

    }
    return result;
};

//生成随机len位数字
export const randomLenNum = (len, date) => {
    let random = '';
    random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len ? len : 4);
    if (date) random = random + Date.now();
    return random;
};
