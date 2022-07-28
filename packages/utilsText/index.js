/**
 * 文本操作
 */
export const utilsText = () => {

    //复制文本
    const copyText = (text) => {
        let createInput = document.createElement('textarea');
        createInput.value = text;
        document.body.appendChild(createInput);
        createInput.select();
        document.execCommand('Copy');
        createInput.className = 'createInput';
        createInput.style.display = 'none';
    }

    //导出
    return {copyText}
}
