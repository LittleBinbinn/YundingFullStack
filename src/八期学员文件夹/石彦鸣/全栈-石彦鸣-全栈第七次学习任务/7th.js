
var register = document.getElementById("register");
console.dir(register);
var getList = document.getElementById("getList");
console.dir(getList); 
var time = document.getElementById("time");
var list = document.getElementById("list")
function getTime() {
    const res = axios.get("http://43.143.169.168:9090/time/now")
        .then(function (response) {
            console.log(response);
            time.innerHTML = response.data.data;
        })
}
register.onclick = function(){
    var account = document.getElementById("account");
    var password = document.getElementById("password");
    const res = axios.post("http://43.143.169.168:9090/user/register", {
        username: `${account.value}`,
        password:`${password.value}`
    }).then(function (response) {
        console.log(response);
    });
        
}
getList.onclick = function () {
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