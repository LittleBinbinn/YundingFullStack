function countnumber() {
    // 获取输入框中的内容
    var str = document.getElementById("input1").value;
    var substring = document.getElementById("input2").value;

    // 清除结果区域的内容
    document.getElementById("result").innerHTML = "";

    // 统计子串在字符串中出现的次数
    var count = 0;
    while (str.indexOf(substring) !== -1) {
        count++;
        str = str.replace(substring, ""); // 移除子串，以便进行下一次计数
    }

    // 将结果输出到页面上
    document.getElementById("result").innerHTML = count + " 次";
}/*
function myGetElementById(id) {
    var elements = document.getElementsByTagName("input1");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id === id) {
            return elements[i];
        }
    }
    return null;
}*/