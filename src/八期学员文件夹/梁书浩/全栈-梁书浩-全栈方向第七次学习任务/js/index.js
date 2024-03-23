const time=document.getElementById("time")
function nowTime(){
    axios({
        baseURL:"http://43.143.169.168:9090",
        method:"get",
        url:"time/now"
    })
    .then((result) => {
    time.innerHTML=`当前时间：${result.data.data}`
    console.log(result.data.data)
    })
    .catch((error) => {
    console.log(error)
    })
}
nowTime()
setInterval(nowTime,1000)
const password=document.getElementById("password")
const enroll=document.getElementById("enroll")
const person=document.getElementById("person")
enroll.addEventListener("click",function(){
    axios({
        baseURL:"http://43.143.169.168:9090",
        method:"post",
        url:"user/register",
        data:{
            username:person.value,
            password:password.value
        }
    })
    .then((result) => {
    console.log("注册报文",result)
    })
    .catch((error) => {
    console.log(error)
    })
})
const num=null
const users=document.getElementById("users")
const ul=document.querySelector("ul")
users.addEventListener("click",function(){
    axios({
        baseURL:"http://43.143.169.168:9090",
        method:"get",
        url:"user/all"
    })
    .then((result) => {
    if(num!=result.data.data){
        ul.innerHTML=""
        for(let i=0;i<result.data.data.length;i++){ 
        const li=document.createElement("li")
        li.innerHTML=result.data.data[i]
        ul.appendChild(li)
        }
        console.log("用户信息列表报文",result)
        num=result.data.data
    }
    })
    .catch((error) => {
    console.log(error)
    })
})