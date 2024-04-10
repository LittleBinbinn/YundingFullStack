let register = document.getElementById("register");
let get = document.getElementById("get");
function time() {
    axios.get('http://43.143.169.168:9090/time/now')
        .then(function (response) {
            const time1 = response.data;
            const time2 = time1.data;
            const time = document.querySelector(".time");
            time.textContent = "当前时间：" + time2;
        })
        .catch(function (error) {
            console.log(error);
        });
}
setInterval(time, 1000);

register.onclick = function () {
    let user = document.getElementById("user");
    let password = document.getElementById("password");
    axios.post("http://43.143.169.168:9090/user/register", {
        username: `${user.value}`,
        password: `${password.value}`
    }).then(function (response) {
        console.log("注册报文：", response);
    })
        .catch(function (error) {
            console.log(error);
        });
}

get.onclick = function () {
    axios.get("http://43.143.169.168:9090/user/all")
        .then(function (response) {
            console.log("用户信息列表报文：", response);
            let ul = document.createElement('ul');
            document.body.appendChild(ul);
            for (let i = 0; i < response.data.data.length; i++) {
                let menu = document.createElement('li');
                menu.innerText = response.data.data[i];
                ul.appendChild(menu);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}