const time=document.getElementById("time")
function Time(){
    axios.get('http://43.143.169.168:9090/time/now')
    .then((res) => {
    time.innerHTML="当前时间:"+res.data.data
    console.log(res.data.data)
    })
}
Time()
setInterval(Time,1000)
function login() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  let data = {
    "username": username,
     "password": password
  }
  axios.post('http://43.143.169.168:9090/user/register', data)
    .then((res) => {
  console.log("注册的报文",res)
},
)}
function obtain() {
  axios.get('http://43.143.169.168:9090/user/all')
    .then((res) => {
    let str = JSON.stringify(res.data.data)
    for (var value in str) {
      var ul = document.querySelector("ul")
      if (res.data.data[value] !== undefined) {
        var li = document.createElement("li")
        li.innerHTML = (res.data.data[value])
        ul.appendChild(li);

      }
    } console.log("获取用户信息的报文", res);
  }) 
  }