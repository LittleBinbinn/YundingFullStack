const xhr = new XMLHttpRequest();
xhr.open("GET", "http://43.143.169.168:9090/time/now");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        console.log(JSON.parse(xhr.responseText))
        time = JSON.parse(xhr.responseText)
        timedata = time.data
        console.log(timedata)
        document.getElementById('NewTime').innerHTML = "当前时间：" + timedata
    }

}

function zhuCe() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://43.143.169.168:9090/user/register");
    xhr.setRequestHeader("Content-type", "application/json");
    var nowusername = document.getElementById('Username').value
    var nowpassword = document.getElementById('Password').value
    xhr.send(JSON.stringify({
        Username: nowusername,
        Password: nowpassword,
    }));
}

function HuoQu() {
    const xha = new XMLHttpRequest();
    xha.open("GET", "http://43.143.169.168:9090/user/all");
    xha.send();
    xha.onreadystatechange = function () {
        if (xha.readyState == XMLHttpRequest.DONE && xha.status == 200) {
            console.log(JSON.parse(xha.responseText))
            all = JSON.parse(xha.responseText)

            for (let propName in all.data) {
                document.getElementById('name').innerHTML += all.data[propName] + '<br>'
            }
        }

    }
}