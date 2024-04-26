setInterval(time,1000);
function time() {
    let getTime = new XMLHttpRequest();
    getTime.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("time").innerHTML = "当前时间：" +
                this.responseText.slice(33,52);
        }
    };
    getTime.open("GET", "http://43.143.169.168:9090/time/now");
    getTime.send();
}

function reg() {
    let a = document.getElementById("accountNumber").value;
    let p = document.getElementById("passWord").value;
    axios({
        method: 'post',
        url: 'http://43.143.169.168:9090/user/register',
        data: {
            username: a,
            password: p,
        }
    })
        .then(function (response) {
            console.log("注册报文",response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function gain() {
    axios.get("http://43.143.169.168:9090/user/all")
        .then(function (response) {
            console.log("用户列表信息报文：" , response);
            let i; 
            let li = '';
            for (i = 0; i < response.data.data.length; i++){
                li += "<li>" + response.data.data[i] + "</li>";
            }
            document.getElementById("list").innerHTML = li;
        })
        .catch(function (error) {
            console.log(error);
    })
}