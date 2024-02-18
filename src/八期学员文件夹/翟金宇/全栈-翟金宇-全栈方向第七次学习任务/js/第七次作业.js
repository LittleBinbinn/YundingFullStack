const uname = document.querySelector('.username')
const pword = document.querySelector('.password')
const time = document.querySelector('.time')
const register = document.querySelector('.register')
const btn = document.querySelector('.huoqu')
const uall = document.querySelector('.all')
//获取时间
function uptime() {
  axios({
    url: 'http://43.143.169.168:9090/time/now',
  }).then((result) => {
    console.log(result.data.data)
    time.innerText = result.data.data
  }).catch((error) => {
    console.log(error)
  })
}
uptime()
setInterval(uptime, 1000)
// 提交用户注册
register.addEventListener('click', function () {
  axios({
    method: 'post',
    url: 'http://43.143.169.168:9090/user/register',
    data: {
      username: uname.value,
      password: pword.value
    }
  }).then((result) => {
    console.log('注册', result)
  }).catch((error) => {
    console.log(error)
  })
})
// 获取所有用户
btn.addEventListener('click', function () {
axios({
  url: 'http://43.143.169.168:9090/user/all'
}).then((result) => {
  console.log(result.data.data)
  uall.innerHTML = result.data.data.join('<br>')
}).catch((error) => {
  console.log(error)
})
})