window.onload = function () {
    let time = document.getElementById("time");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
axios({
    method: "GET",
    url:"http://43.143.169.168:9090/time/now",

})
    .then((result) => {
        time.innerHTML = result.data.data;
    })
    .catch ((err) => {
        console.log("出错了！", err)
    })
    //点击注册提交信息
    btn1.addEventListener('click', function () {
        let user = document.getElementById("user").value;
        let code= document.getElementById("code").value;
        
        axios({
            method: "POST",
            url: "http://43.143.169.168:9090/user/register",
            data: {
                username: user,
                password:code,
            },

        })
            .then((result) => {
                console.log("注册报文",result)
            })
            .catch((err) => {
            console.log("出错了！", err)
        })
})    
    btn2.addEventListener('click', function () {
        let all = document.getElementById("message");
    axios({
    method: "GET",
    url:"http://43.143.169.168:9090/user/all",

})
        .then((result) => {
            console.log("用户信息列表报文", result)
            console.log()
            let i;
            let li;
            for (i = 0; i < result.data.data.length; i++)
            {
                all.innerHTML+="<li>"+result.data.data[i]
                
                }
        
    })
    .catch ((err) => {
        console.log("出错了！", err)
    })
    })
    
}



