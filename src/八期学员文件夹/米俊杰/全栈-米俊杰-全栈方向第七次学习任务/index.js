const xhr = new XMLHttpRequest();
xhr.open("GET", "http://43.143.169.168:9090/time/now");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        console.log(JSON.parse(xhr.responseText))
        time = JSON.parse(xhr.responseText);
        now = time.data;
        console.log(now);
        document.getElementById('NOW').innerHTML = "当前时间：" + now;
    }
}



function register() {
   
var resusername = document.getElementById('Username').value
   var respassword = document.getElementById('Password').value
    axios.post('http://43.143.169.168:9090/user/register', {
        username:resusername,
        password: respassword
      }
      )
      .then(function (response) {
        console.log(response);
      }
      )
        .catch(function (error) {
        console.log(error);
      }
      );
    }

function list() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://43.143.169.168:9090/user/all");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText))
            allpeople = JSON.parse(xhr.responseText)
            for (let AllName in allpeople.data) {
                document.getElementById('name').innerHTML += allpeople.data[AllName] + '<br>'
            }
        }
    }
}
