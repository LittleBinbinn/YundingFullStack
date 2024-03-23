window.onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://43.143.169.168:9090/time/now");
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 利用readyState检测响应结果，如果请求已完成且成功，进入if语句
            let timeData1 =xhr.responseText;
            let timeData2 = timeData1.split(',');
            // let timeData3 = timeData2.split(':');
            let timeData3 = timeData2.map(item => item.split("\""));
            document.getElementById("time").innerHTML = timeData3[2][3];
            // console.log(timeData1);
            //将timeData插入id为time的html元素中
        }
    }
}
signUp = function () {
    let formData = new FormData(document.getElementById("message"));
    //创建对象formData，从id为message的表单中获取信息
    formData.username =document.getElementById('username').value;
    formData.password =document.getElementById('password').value;
    console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://43.143.169.168:9090/user/register")
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(formData));
    // xhr.send(formData);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("注册报文：",xhr);
        }
    }
}  

window.accountList = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://43.143.169.168:9090/user/all");
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let accountData = JSON.parse(xhr.response);
            let result = accountData.data;
            // console.log(typeof result);
            let resultStr = String(result);
            let resultData = resultStr.split(',');
            for (let i = 0; i < resultData.length; i++){
                document.getElementById('list').innerHTML += resultData[i]+'<br>';
            }
            console.log("用户信息列表报文：",xhr);
        }
    }
}
