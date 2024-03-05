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
var btn = document.querySelector('.five')
var mailbox = document.querySelector('#email')
var password=document.querySelector('#password') 
btn.onclick = function () {
    var emailReg = /^[^\.]*@(qq|163)\.(com|cn)$/
    if (!emailReg.test(mailbox.value)) {
        alert("请输入正确的邮箱格式！")
        mailbox.value=""
    } else {
        let flag=false
        for (let i = 0; i < 3; i++){
            if (msg[i].email === mailbox.value) {
                if (msg[i].password == password.value) {
                    if (i === 0) location.href = '张三.html'
                    if (i === 1) location.href = '李四.html'
                    if (i === 2) location.href = '王五.html'
                    flag=true
                    break
                } else {
                    password.value = ""
                    alert("密码输入错误，请重新输入！")
                    flag=true
                }
            } 
        } 
        if (!flag) {
        alert("不存在该用户!")
        }
        }
    }
