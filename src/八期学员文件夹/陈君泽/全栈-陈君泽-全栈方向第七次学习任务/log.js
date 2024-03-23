let xhr = new XMLHttpRequest();
xhr.open("GET", "http://43.143.169.168:9090/time/now");
xhr.send();
xhr.onreadystatechange = function ()
{
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status ==200) {
        console.log(JSON.parse(xhr.responseText))
        time = JSON.parse(xhr.responseText)
        timedata = time.data
        console.log(timedata)
        document.getElementById('now').innerHTML ="当前时间："+ timedata
    }
    
}
function zhuce() {
    let xhs = new XMLHttpRequest();
    xhs.open("POST", "http://43.143.169.168:9090/user/register ");
    xhs.setRequestHeader("Content-type", "application/json") 
    var nowusername = document.getElementById('user-name').value
    var nowpassword = document.getElementById('password').value
    xhs.send(
        JSON.stringify({
            username:nowusername,
            password:nowpassword,

        })
    )
    }
function check()
{
    let xha = new XMLHttpRequest();
    xha.open("GET", "http://43.143.169.168:9090/user/all");
    xha.send();
    xha.onreadystatechange = function () {
        if (xha.readyState == XMLHttpRequest.DONE && xha.status == 200) {
            console.log(JSON.parse(xha.responseText))
            all = JSON.parse(xha.responseText)
            for (let propName in all.data)
            {
                document.getElementById('number').innerHTML += all.data[propName] + '<br>'
            }
        }

    }
}


