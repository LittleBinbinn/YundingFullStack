window.onload = function () {
    let netTime=document.querySelector("#netTime")//获取时间
    let regester = document.querySelector(".regester")
    let name = document.querySelector(".name")
    let keyword = document.querySelector(".keyword")
    let submit = document.querySelector(".submit")
    let getmsg=document.querySelector(".getmsg")
    let container=document.querySelector(".container")

//实现网络配置，获取时间
    const res = axios.get("http://43.143.169.168:9090/time/now");
    console.log(res);
    // 向给定ID的用户发起请求
    axios.get("http://43.143.169.168:9090/time/now")
    .then(function (response) {
        // 处理成功情况
        netTime.innerHTML = "当前时间为"+response.data.data//在页面中打印当前时间
        })
    .catch(function (error) {
        // 处理错误情况
        console.log(error);
    })
    .finally(function () {
        // 总是会执行
    });
    //用户注册页面实现
    submit.onclick = function () {
        axios({
            method: 'post',
            url: 'http://43.143.169.168:9090/user/register',
            data: {
                "username": name.value,
                "password":keyword.value ,
            }
        })//
            .then(function (response) {
                console.log("注册报文",response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            })
        
    }
    //获取用户信息列表
    getmsg.onclick = function () {
        axios({
            method: 'get',
            url: 'http://43.143.169.168:9090/user/all',
            data: {
                "username": name.value,
                "password":keyword.value ,
            }
        })
            .then(function (response) {
                console.log("用户信息列表报文", response);
                for (let i = 0; response.data.data[i] != undefined; i++){
                    var li = document.createElement('li');
                    li.innerHTML = response.data.data[i];
                    container.appendChild(li);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            })
    }
    
}