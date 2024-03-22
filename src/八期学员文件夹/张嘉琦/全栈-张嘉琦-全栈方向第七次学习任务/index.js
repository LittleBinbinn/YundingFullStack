const p = document.querySelectorAll('p')
const text = document.querySelector('.text')
const pwd = document.querySelector('.pwd')
const btn = document.querySelectorAll('.btn')
const ul = document.querySelector('ul')
function tim() {
    let re = axios.get('http://43.143.169.168:9090/time/now')
        .then(function (response) {
            p[0].innerHTML = response.data.data
        })
        .catch(function (error) {
            console.log(error);
        })
}
window.setInterval('tim()', 1000)
btn[0].onclick = function () {
    axios({
  method: 'post',
  url: "http://43.143.169.168:9090/user/register",
  data: {
    "username": text.value,
    "password": pwd.value,
  }
}).then(function (response) {
    console.log('注册报文;',response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
btn[1].onclick = function () {
    axios.get('http://43.143.169.168:9090/user/all')
        .then(function (response) {
            for (var i = response.data.data.length; i > 0; i--){
                var li = document.createElement('li')
                li.innerHTML = response.data.data[i]
                ul.appendChild(li)
            
        }
        console.log('用户信息列表报文:',response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}