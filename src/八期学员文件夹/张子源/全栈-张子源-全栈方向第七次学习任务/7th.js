var register = document.getElementById("register");
console.dir(register);
var huoqu = document.getElementById("huoqu");
console.dir(huoqu); 
function time() {
            let getTime = new XMLHttpRequest();
            getTime.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.querySelector(".time").innerHTML = "当前时间：" +
                        this.responseText.slice(33, 52);
                }
            };
            getTime.open("GET", "http://43.143.169.168:9090/time/now");
            getTime.send();
        }
register.onclick = function(){
    var user = document.getElementById("user");
    var password = document.getElementById("password");
    const res = axios.post("http://43.143.169.168:9090/user/register", {
        username: `${user.value}`,
        password:`${password.value}`
    }).then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}
huoqu.onclick = function () {
    const res = axios.get("http://43.143.169.168:9090/user/all")
        .then(function (response) {
            console.log(response);
            let ul = document.createElement('ul');
            document.body.appendChild(ul);
            for (let i = 0; i < response.data.data.length; i++) {
                let item = document.createElement('li');
                item.innerText = response.data.data[i];
                ul.appendChild(item);
            }
        })
}
        setInterval(time, 1000);