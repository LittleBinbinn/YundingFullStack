const xhr = new XMLHttpRequest();
xhr.open("GET", "http://43.143.169.168:9090/time/now");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const time = JSON.parse(xhr.responseText);
        document.getElementById("result").innerHTML ="当前时间："+ time.data;
    }
}



function enroll(username, password) {
    const  name= document.getElementById("username");
    const  word = document.getElementById("password");
    const enr = axios.post("http://43.143.169.168:9090/user/register", {
        username: `${name.value}`,
        password:`${word.value}`
    }).then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}


function show(){
    const users = document.getElementById("user")
    fetch('http://43.143.169.168:9090/user/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(res) {
        console.log("用户信息列表报文",res);
        const  table = document.createElement("table");
        users.appendChild(table);
        table.insertAdjacentHTML("beforeend","<caption>用户</caption>")
        const tbody = document.createElement("tbody")
        table.appendChild(tbody)
        for(let std of res.data){
        tbody.insertAdjacentHTML("beforeend",`
        <tr><li>${std}</li></tr>
        `)}
    });}