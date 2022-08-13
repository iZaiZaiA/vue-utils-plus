import {verifyCardNum} from "./idCard/verify";

/**
 * 验证内容
 */
export const isValidate = () => {
    //合法uri
    const isUrlVal = (val) => {
        const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
        return reg.test(val)
    }

    //邮箱
    const isEmail = (val) => {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)
    }

    //手机号码
    const isMobile = (val) => {
        return /^1[0-9]{10}$/.test(val)
    }

    //电话号码
    const isPhone = (val) => {
        return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(val)
    }

    //小写字母
    const isLowerCase = (val) => {
        const reg = /^[a-z]+$/
        return reg.test(val)
    }

    //大写字母
    const isUpperCase = (val) => {
        const reg = /^[A-Z]+$/
        return reg.test(val)
    }

    //大小写字母
    const isAlphabets = (val) => {
        const reg = /^[A-Za-z]+$/
        return reg.test(val)
    }

    //判断身份证号码
    const isIdCard = (val) => {
        return verifyCardNum(val)
    }

    //判断名称是否正确
    const isName = (val) => {
        let regName = /^[\u4e00-\u9fa5]{2,4}$/;
        if (!regName.test(val)) return false;
        return true;
    }

    //判断是否为整数
    const isNum = (num, type) => {
        let regName = /[^\d.]/g;
        if (parseInt(type) === 1) {
            if (!regName.test(num)) return false;
        } else if (parseInt(type) === 2) {
            regName = /[^\d]/g;
            if (!regName.test(num)) return false;
        }
        return true;
    }

    //判断是否为小数
    const isNumord = (num, type) => {
        let regName = /[^\d.]/g;
        if (parseInt(type) === 1) {
            if (!regName.test(num)) return false;
        } else if (parseInt(type) === 2) {
            regName = /[^\d.]/g;
            if (!regName.test(num)) return false;
        }
        return true;
    }

    //判断是否为空
    const isValidateNull = (val) => {
        if (typeof val == 'boolean') {
            return false;
        }
        if (typeof val == 'number') {
            return false;
        }
        if (val instanceof Array) {
            if (val.length === 0) return true;
        } else if (val instanceof Object) {
            if (JSON.stringify(val) === '{}') return true;
        } else {
            if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
            return false;
        }
        return false;
    }

    //判断手机号码是否正确
    const isPhoneVal = (phone) => {
        let list = [], result = true, msg = '';
        let isPhone = /^0\d{2,3}-?\d{7,8}$/;
        //增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]
        if (!this.isNull(phone)) {
            if (phone.length === 11) {
                if (isPhone.test(phone)) {
                    msg = '手机号码格式不正确';
                } else {
                    result = false;
                }
            } else {
                msg = '手机号码长度不为11位';
            }
        } else {
            msg = '手机号码不能为空';
        }
        list.push(result);
        list.push(msg);
        return list;
    }

    //表单验证
    const formValidate = async (formRef) => {
        return new Promise( (resolve) => {
            formRef.validate((valid) => {
                resolve(!!valid)
            })
        });
    }

    return {
        isUrlVal, isEmail, isMobile, isPhone, isLowerCase,
        isUpperCase, isAlphabets, isIdCard, isName, isNum,
        isNumord, isValidateNull, isPhoneVal, formValidate
    }
}
