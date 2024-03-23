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

var btn = document.querySelector('.btn');
var box = document.querySelector('.box');
btn.onclick = function () {
    //window.document.f.action="test.html";
    var mailbox = document.getElementsByClassName('mailbox');
    var e_mail = mailbox.value;
    var rule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var result = rule.test(e_mail);
    var psw = document.querySelector('.psw');
    var password = psw.value;
    for (var i = 0; i < msg.length; i++) {
        if (result == false) {
            first.innerHtml = '您输入的账号有问题';
        }else if (e_mail === msg[i].email && psw === msg[i].password){
            let div = document.createElement("div")//创建节点
            box.appendChild(div)
            div.innerHtml = '<h1>登录成功</h1>'
            img.src = '/img/js.png'
            div.innerHtml += '姓名：' + msg[i].name + '<br />年龄：' + msg[i].age + '<br />特长：' + msg[i].strengths;
            /*document.getElementsByClassName('box').innerHtml = '<h1>登录成功</h1>';
            document.getElementByClassName('box').innerHTML += '姓名：' + msg[i].name + '<br />年龄：' + msg[i].age + '<br />特长：' + msg[i].strengths;*/
            break;
        } else if (e_mail === msg[i].email && psw != msg[i].password) {
            secod.innerHtml = '您输入的密码有误，请重新输入';
            break;
        } else{
            first.innerHtml = '您还没有注册，请先注册';
            break;
        }
    }
}
