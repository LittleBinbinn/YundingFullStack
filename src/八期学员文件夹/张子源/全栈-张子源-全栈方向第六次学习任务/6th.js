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
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var signin = document.querySelector("#signin");
var wrong = document.querySelector("#wrong");
console.dir(email);
email.onblur = function () {
    let reg = /([@]qq|[@]163)(\.{1}com|\.{1}cn)$/;
    var nametext = reg.test(email.value);
    if (nametext == false) {
        wrong.innerHTML = "邮箱格式错误，请输入正确的格式";
    } else {
        wrong.innerHTML = "&nbsp;";
        for (var i = 0; i < mag.length; i++) {
            if (email.value == msg[i].email) {
                wrong.innerHTML = "用户名正确，请输入密码";
                break;
            }
        }
    }
};
function getemail(){
    for (var i = 0; i < msg.length; i++){
        if (email.value == msg[i].email) {
            localStorage.setItem("i", i);
            break
        }
    }
    return i;
}
signin.onclick = function (){
    var i = getemail();
    console.log(i);
    console.log(msg[i].password);
    if (password.value == msg[i].password) {
        window.location.href = "6th1.html";
    } else {
        wrong.innerHTML = "密码错误！请输入正确的密码"
    }
};