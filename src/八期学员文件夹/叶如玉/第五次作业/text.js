function countSubstring() {  
    const mainString = document.getElementById('mainString').value;  
    const subString = document.getElementById('secString').value;  
    const resultElement = document.getElementById('result');  
    if (!mainString || !subString) {  
        resultElement.textContent = "请输入两个字符串！";  
        return;  
    }  
    const count = mainString.split(subString).length - 1;  
    resultElement.textContent = `子串出现的次数为：${count} `;  
}