//显示时间部分
var time=document.getElementById("time")
function uptime(){
    axios({
        baseURL:"http://43.143.169.168:9090",
        method:"get",
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
//注册新用户部分
var enroll=document.getElementById("enroll")
var man=document.getElementById("man")
var pass=document.getElementById("pass")
enroll.addEventListener("click",function(){
    axios({
        baseURL:"http://43.143.169.168:9090",
        method:"post",
        url:"user/register",
        data:{
            username:man.value,
            password:pass.value
        }
        }).then((result)=>{
        console.log("注册报文",result)
        }).catch((error)=>{
        console.log(error)
        })
})
//显示所有用户部分
var num=null
var users=document.getElementById("users")
var infor=document.getElementById("information")
var ul=document.querySelector("ul")
users.addEventListener("click",function(){
    axios({
        baseURL:"http://43.143.169.168:9090",
        method:"get",
        url:"user/all"
        }).then((result)=>{
        if(num!=result.data.data){
        // 防止重复出现已注册的用户信息
        ul.innerHTML=""
        //根据用户的个数灵活创建元素li
        for(var i=0;i<result.data.data.length;i++){ 
        var li=document.createElement("li")
        li.innerHTML=result.data.data[i]
        ul.appendChild(li)
        }
        console.log("用户信息列表报文",result)
        num=result.data.data
        }
        }).catch((error)=>{
        console.log(error)
        })
})