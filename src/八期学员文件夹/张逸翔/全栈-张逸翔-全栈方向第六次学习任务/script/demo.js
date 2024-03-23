var em=document.getElementById("add")
var tipone=document.getElementsByClassName("tipone")
var pwd=document.getElementById("pwd")
var log=document.getElementById("log")
var tiptwo=document.getElementsByClassName("tiptwo")
var right=document.getElementById("right")
var wrong=document.getElementById("wrong")
//创建并添加节点
var rightpic=document.createElement("img")
var wrongpic=document.createElement("img")
right.insertBefore(rightpic,right.children[1])
wrong.insertBefore(wrongpic,wrong.children[1])
rightpic.style.display="none"
wrongpic.style.display="none"
//判断邮箱的合法性
var reg=/^[a-zA-Z0-9](\w){5,16}(@qq|@163)+(.com|.cn)/
em.onblur=function(){
    var str=em.value
    if(reg.test(str)){
    tipone[0].innerHTML="输入的邮箱合法"
    tipone[0].style.color="lightgreen"
    rightpic.style.display="inline"
            rightpic.src="https://typora----magic.oss-cn-beijing.aliyuncs.com/%E5%AF%B9%E9%92%A9-copy.png"
            
}
else{
    rightpic.style.display="inline"
    rightpic.src="https://typora----magic.oss-cn-beijing.aliyuncs.com/%E9%94%99%E8%AF%AF.png"
    tipone[0].innerHTML="!!!!您输入的邮箱不合法"
    tipone[0].style.color="red"
}
}
//用户信息
let msg = [{
    name: '张三',
    age: 20,
    strengths: 'JavaScript',
    avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1',
    email: 'yunding@qq.com',
    password: 33333
},
{
    name: '李四',
    age: 19,
    strengths: 'python',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1',
    email: '12345678@163.com',
    password: 11111
},
{
    name: '王五',
    age: 18,
    strengths: 'Java',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1',
    email: 'yundingshuyuan@qq.cn',
    password: 222222
},
]
//判断信息正误 
var i=0
log.addEventListener("click",fn)
function fn(){

    for( i=0;i<msg.length;i++){
        var array=msg[i] 
        //登录成功，跳转页面
        if((array.email==em.value)&&(array.password==pwd.value)){
            localStorage.setItem('i',i);
            window.location.href="index.html"
            break;
        }
        //存在该邮箱以及用户信息，但是密码错误
        else if((array.email==em.value)&&(array.password!=pwd.value)){
            wrongpic.style.display="inline"
            wrongpic.src="https://typora----magic.oss-cn-beijing.aliyuncs.com/%E9%94%99%E8%AF%AF.png"
            tiptwo[0].innerHTML="存在该用户，请检查您的密码输入是否正确";
            tiptwo[0].style.color="red";
            break
        }
        //不存在该用户信息时
        exist()
}
}
function exist(){
    var index=0
    for(var m=0;m<msg.length;m++){
        if((msg[m].email==em.value)){
            index=1
            break
        }
    }
    if(index==0){
        wrongpic.style.display="inline"
            wrongpic.src="https://typora----magic.oss-cn-beijing.aliyuncs.com/%E9%94%99%E8%AF%AF.png"
            tiptwo[0].innerHTML="不存在该用户，请检查您是否注册过相关信息";
            tiptwo[0].style.color="red";
    }
}
