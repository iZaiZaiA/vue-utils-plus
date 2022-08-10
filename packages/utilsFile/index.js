/**
 * 文件处理
 */
export const utilsFile = () => {

    //文件大小
    const isSize = (fileSize, size) => {
        let maxSize = size * 1024 * 1024
        return fileSize <= maxSize;
    }

    //base64转成文件
    const base64ToFile = (base64, type = "image/jpeg", fileName, suffix = "jpg") => {
        let array = [], binary = atob(base64.split(",")[1]);
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        const fileBlob = new Blob([new Uint8Array(array)], {type: type});
        const newFileName = fileName ? fileName : Date.now()
        return new File([fileBlob], newFileName + '.' + suffix);
    }

    //下载文件
    const downloadBlob = (data, disposition, type) => {
        //type是文件类，详情可以参阅blob文件类型
        type = type || "application/vnd.ms-excel"
        disposition = disposition || '' //res.headers['content-disposition']
        let blob = new Blob([data], { type: type });
        // 创建新的URL并指向File对象或者Blob对象的地址
        const blobURL = window.URL.createObjectURL(blob)
        // 创建a标签，用于跳转至下载链接
        const tempLink = document.createElement('a')
        tempLink.style.display = 'none'
        tempLink.href = blobURL
        tempLink.setAttribute('download', decodeURI(disposition.split(';')[1].split('=')[1]))
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

    //导出
    return {isSize,base64ToFile,downloadBlob}
}
