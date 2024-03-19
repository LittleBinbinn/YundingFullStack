var time = document.getElementById("currentTime");
var account = document.getElementById("account");
var pass = document.getElementById("password");
var register = document.getElementById("register");
var users = document.getElementById("getUserList");
var ul = document.querySelector("ul");

function uptime(){
    axios({
        method: "get",
        baseURL:"http://43.143.169.168:9090",
        url:"time/now"
    }).then((result)=>{
        time.innerHTML="当前时间:"+" "+result.data.data
        console.log(result.data.data)
    }).catch((error)=>{
        console.log(error)
    })
}
uptime()
setInterval(uptime,1000)

register.addEventListener("click",function(){
    axios({
        method: "post",
        baseURL:"http://43.143.169.168:9090",
        url:"user/register",
        data:{
            username:account.value,
            password:pass.value
        }
    }).then((result)=>{
        console.log("注册",result)
    }).catch((error)=>{
        console.log(error)
    })
})

var num = null;
users.addEventListener("click",function(){
    axios({
        method: "get",
        baseURL:"http://43.143.169.168:9090",       
        url:"user/all"
    }).then((result)=>{
        if(num!=result.data.data){
        ul.innerHTML=""
        for(var i=0;i<result.data.data.length;i++){ 
        var li=document.createElement("li")
        li.innerHTML=result.data.data[i]
        ul.appendChild(li)
        }
        console.log("用户列表",result)
        num=result.data.data
        }
    }).catch((error)=>{
        console.log(error)
    })
})