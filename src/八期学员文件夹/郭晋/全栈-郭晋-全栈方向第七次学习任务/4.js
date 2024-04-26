let date = document.getElementById('date');
let xhr = new XMLHttpRequest();
xhr.open("get", "http://43.143.169.168:9090/time/now");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let time = response.data;
        date.innerHTML = '当前时间为' + time;
        console.log(xhr.response);
    }
};

function enroll() {
    let names = document.getElementById('usename').value;
    let word = document.getElementById('password').value;

    const xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === XMLHttpRequest.DONE && xhr2.status === 200) {
            console.log(xhr2.responseText);
        }
    };
    xhr2.open('post', "http://43.143.169.168:9090/user/register");
    xhr2.setRequestHeader("Content-type", "application/json");
    xhr2.send(JSON.stringify({
        "username": names,
        "password": word,
    }));}


function xianshi(){
    const users = document.getElementById("user")
    fetch('http://43.143.169.168:9090/user/all')
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      console.log(res);
      const  table = document.createElement("table");
      users.appendChild(table);
      table.insertAdjacentHTML("beforeend","<caption>用户列表</caption>")
      table.insertAdjacentHTML("beforeend","<thead><tr><th>用户名</th></tr></thead>")
      const tbody = document.createElement("tbody")
      table.appendChild(tbody)
      for(let std of res.data){
        tbody.insertAdjacentHTML("beforeend",`
        <tr><li>${std}</li></tr>
        `)}
    });}

       
        

    