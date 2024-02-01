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

window.onload=function () {
    const submit = document.querySelector('button')
    submit.addEventListener('click', function (e) {
        const uEmail = document.querySelector('#email')
        const psw = document.querySelector('#psw')
        const regs = /@(qq|163)\.(com|cn)$/
        if (regs.test(uEmail.value)===false) {
            alert('您输入的邮箱有误')
            return
        }

        let p=-1
        for (let i = 0; i < msg.length; i++){
            if (msg[i].email === uEmail.value && msg[i].password === +psw.value) {
                p = i
                // 阻止表单默认提交行为
                e.preventDefault();
                // 存储数据到 sessionStorage
                sessionStorage.setItem('avatarIndex',msg[i].avatar);
                sessionStorage.setItem('nameIndex', msg[i].name);
                sessionStorage.setItem('ageIndex', msg[i].age);
                sessionStorage.setItem('strengthsIndex', msg[i].strengths);
                // 进行其他处理（例如验证邮箱和密码等）
                // 跳转到另一个页面
                window.location.href ='index.html' 
            }
        }
        if (p === -1) {
            alert('邮箱或密码错误')
        }
        
    })
}

