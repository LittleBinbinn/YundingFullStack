let message = [{
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
}];
function notice() {
    let email = document.getElementById('email').value;
    let reg1= /.com$/;
    let reg2= /.cn$/;
    let reg3=/\.{1}/;
    let reg4=/@qq./;
    let reg5=/@163./;
    let result =(reg1.test(email)||reg2.test(email))&&reg3.test(email)&&(reg4.test(email)||reg5.test(email));
    if(result === true){
        check(email);
    }else{
        alert("您的邮箱格式不合法");
    }
}
function check(email) {
    let password =Number( document.getElementById('password').value);
    console.log(email);
    console.log(password);
    console.log(message[0].password);
    let judge = false;
    for (let i = 0; i < 3; i++) {
        if (message[i].email === email) {
            judge = true;
            console.log(typeof password,typeof message[0].password);
            if (message[i].password ===password) {
                alert("登录成功");
                window.location.href = "个人信息.html";
            } else {
                alert("密码错误")
                document.getElementById("myForm").addEventListener("submit", function (event) {
                        event.preventDefault();
                    });
            }
        } 
    }
    if (judge === false) {
        alert("未查找到用户");
         document.getElementById("myForm").addEventListener("submit", function (event) {
                        event.preventDefault();
                    });
    }
}
function index() {
    let email = location.search.substr(1).split('=');
    let Email = email[1];
    let trueEmail = email[1].replace("%40", "@");
    console.log("trueEmail=",trueEmail);
    return trueEmail;
}
function insert() {
    let trueEmail = index();
    let i = 0;
    console.log("message[0]=",message[0].email);
    for (i = 0; i < 3; i++) {
        if (message[i].email === trueEmail) {
            console.log(i);
            break;
        }
    }
    document.getElementById("name").innerHTML = message[i].name;
    document.getElementById("age").innerHTML = message[i].age;
    document.getElementById("strengths").innerHTML = message[i].strengths;
}