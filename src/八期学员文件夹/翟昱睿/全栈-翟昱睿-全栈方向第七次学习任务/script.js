function showCurrentTime() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://43.143.169.168:9090/time/now");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        const serverTime = new Date(xhr.responseText);
        const formattedTime = serverTime.toDateString();
        document.getElementById('serverTime').textContent = `当前时间：`+formattedTime;
    }
    
}
xhr.send();
}
showCurrentTime();
function registerUser() {
    const xhe = new XMLHttpRequest();
    xhe.open("POST", "http://43.143.169.168:9090/user/register");
    xhe.setRequestHeader("Content-type", "application/json");
    var username = document.getElementById('Username').value
    var password = document.getElementById('Password').value
    xhe.send(JSON.stringify({
        Username: username,
        Password: password,
    }));
}
function getUserList() {
    const userListElement = document.getElementById('user-list');
    userListElement.innerHTML = ''; 
    const xha = new XMLHttpRequest();
    xha.open("GET", "http://43.143.169.168:9090/user/all");
    xha.send();
    xha.onreadystatechange = function () {
        if (xha.readyState === 4 && xha.status == 200) {
            const all = JSON.parse(xha.responseText);
            for (let propName in all.data) {
                userListElement.innerHTML += all.data[propName] + '<br>';
            }
        }
    };
}
document.getElementById('form').addEventListener('submit', registerUser);
document.getElementById('btn').addEventListener('click', getUserList);
