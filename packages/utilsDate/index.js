/**
 * 日期时间处理
 *
 * 更多方法：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
export const utilsDate = () => {

    //取当前时间
    const getDateTime = () => {
        const dateObj = new Date();
        let YY = dateObj.getFullYear()  //年
        let MM = dateObj.getMonth() + 1 //月
        let DD = dateObj.getDate()      //日
        let H = dateObj.getHours()      //时
        let M = dateObj.getMinutes()    //分
        let S = dateObj.getSeconds()    //秒
        //处理格式
        MM = String(MM).padStart(2, '0')
        DD = String(DD).padStart(2, '0')
        H = String(H).padStart(2, '0')
        M = String(M).padStart(2, '0')
        S = String(S).padStart(2, '0')
        //返回数据
        return {
            dateTime: `${YY}-${MM}-${DD} ${H}:${M}:${S}`,   //日期时间
            date: `${YY}-${MM}-${DD}`, //日期
            time: `${H}:${M}:${S}`, //时间
            obj: {YY,MM, DD, H, M, S}   //单独
        }
    }

    //计算时间
    const calcDate = (date1, date2) => {
        let date3 = date2 - date1;
        let days = Math.floor(date3 / (24 * 3600 * 1000))
        let leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
        let hours = Math.floor(leave1 / (3600 * 1000))
        let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
        let minutes = Math.floor(leave2 / (60 * 1000))
        let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        let seconds = Math.round(date3 / 1000)
        return {leave1, leave2, leave3, days: days, hours: hours, minutes: minutes, seconds: seconds}
    }

    //日期格式化
    const dateFormat = (date, format) => {
        format = format || 'yyyy-MM-dd hh:mm:ss';
        if (date !== 'Invalid Date') {
            let o = {
                "M+": date.getMonth() + 1, //month
                "d+": date.getDate(), //day
                "h+": date.getHours(), //hour
                "m+": date.getMinutes(), //minute
                "s+": date.getSeconds(), //second
                "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
                "S": date.getMilliseconds() //millisecond
            }
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (let k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        }
        return '';
    }

    //当前时间戳
    const dateNow = () => {
        return Date.now();
    }

    //导出
    return {getDateTime,calcDate,dateFormat,dateNow}
}
