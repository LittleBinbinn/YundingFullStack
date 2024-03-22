var ti = document.getElementById("time");
let time = new XMLHttpRequest();
time.open("get", 'http://43.143.169.168:9090/time/now');
time.send();
time.onreadystatechange = function () {
    if (time.readyState === 4 && time.status === 200)
    {
        let res = JSON.parse(time.responseText);
        console.log("时间报文:",res);
        ti.innerHTML = '<span>时间</span>：'.concat(res.data);
        }
}


function signin() {
    var account = document.getElementsByName("acnu")[0].value;
    var passw = document.getElementsByName("passw")[0].value;
    var ob = {
        username: account,
        password: passw
    }
    let si = new XMLHttpRequest();
    si.open('post', 'http://43.143.169.168:9090/user/register');
    si.setRequestHeader("Content-type", "application/json");
    si.send(JSON.stringify(ob));
    si.onreadystatechange = function () {
        if (si.readyState === 4 && si.status === 200) {
            console.log('注册报文：',JSON.parse(si.responseText));
        }
    }
}
    function alluser() {
        let all = new XMLHttpRequest();
        all.open('get', 'http://43.143.169.168:9090/user/all');
        all.send();
        all.onreadystatechange = function () {
            if (all.readyState === 4 && all.status === 200) {
                var ol = document.getElementById("hahaha");
                let haha = JSON.parse(all.responseText);
                console.log('用户信息列表报文：',haha);
                ol.innerHTML = haha.data.join('<br/>');
            }
        }
        
    }