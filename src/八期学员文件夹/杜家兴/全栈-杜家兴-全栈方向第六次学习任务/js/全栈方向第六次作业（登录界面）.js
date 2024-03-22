let msg = [{
    name: '张三',
    age: 20,
    strengths: 'JavaScript',
    avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1',
    email: 'yunding@qq.com',
    password: '33333'
},
{
    name: '李四',
    age: 19,
    strengths: 'python',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1',
    email: '12345678@163.com',
    password: '11111'
},
{
    name: '王五',
    age: 18,
    strengths: 'Java',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1',
    email: 'yundingshuyuan@qq.cn',
    password: '222222'
},
]

let email = null;
let password = null;
//判断邮箱是否合法的函数
let judgeEmail = (email) => {
    let rule = /@qq\.com$|@qq\.cn$|@163\.com$|@163\.cn$/;
    let sign = null;
    let emailResult = rule.test(email);
    if (emailResult === false) {
        sign = false;
    } else {
        sign = true;
    }
    return sign;
}
//判断邮箱和密码是否对应的函数
let judgePassword = (password,email) => {
    //设置flag判断账号密码是否对应
    let flag = false;
    //在对象中寻找与之匹配的账号，以及比对密码是否相符
    for (let i = 0; i < msg.length; i++) {
        if (email === msg[i].email) {
            if (password === msg[i].password) {
                window.localStorage.setItem('key', JSON.stringify(msg[i]));
                flag = true;
                break;
            } 
        }
    }
    return flag;
}
//添加监听器
document.querySelector('#email').addEventListener('blur', function() {
    email = document.querySelector('#email').value;
    if (judgeEmail(email) === true) {
        document.querySelector('.button').addEventListener('click', function () {
            password = document.querySelector('#password').value;
            let result = judgePassword(password,email);
            if (result === true) {
                window.location.replace("全栈方向第六次作业（登录成功）.html");
            } else {
                alert('邮箱或密码错误！');
            }
        } )
    } else {
        alert('请输入合法的邮箱！')
    }
})









































