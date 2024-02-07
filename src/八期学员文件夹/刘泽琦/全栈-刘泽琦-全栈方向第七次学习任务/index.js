window.onload = function () {
    let text = document.querySelector('.text');
    let psw = document.querySelector('.psw');
    let time_now = document.querySelector('.time_now');
    let btn1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');
    let display = document.querySelector('.display');
    text.onclick = function () {
        this.placeholder = '';
    };
    psw.onclick = function () {
        this.placeholder = '';
    };

    // 网络请求部分
    const instance = axios.create({
        baseURL: "http://43.143.169.168:9090"
    })

    // 1.获取时间
    instance.get('/time/now')
        .then((res) => {
            time_now.innerHTML = res.data.data;
        }).catch((err) => {
            console.log("出错了！");
        })

    // 2.提交信息注册
    btn1.onclick = function () {
        instance({
            method: 'post',
            url: '/user/register',
            data: {
                "username": text.value,
                "password": psw.value,
            },
        }).then((res) => {
            console.log("注册报文", res);
        }).catch((err) => {
            console.log("出错了！");
        })
    }

    // 3.获取用户列表
    btn2.onclick = function () {
        instance.get('/user/all')
            .then((res) => {
                let arr = new Array();
                arr = res.data.data;
                var list = "";
                for (let i = 0; i < arr.length; i++){
                    list += "<li>"+arr[i]+"</li>";
                }
                list = '<ul>' + list + '</ul>';
                display.innerHTML = list;
                console.log("用户信息列表报文",res)
            }).catch((err) => {
                console.log("出错了！");
            })
    }
}
