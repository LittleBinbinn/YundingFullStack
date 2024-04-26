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
document.getElementById('loginform').addEventListener('submit', function (e) {
    e.preventDefault()
    let strFirst = document.getElementById('email').value;
    let strSecond = document.getElementById('password').value.toString();
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    let regEmail = /^[a-zA-Z0-9]+@qq\.(com|cn)$|^[a-zA-Z0-9]+@163\.(com|cn)$/;  
    if (!regEmail.test(strFirst)) {
       alert("邮箱格式不正确")
        return;
    }
    for (let i = 0; i < msg.length; i++)
    {
        let user = msg[i];
        if (user.email === strFirst && user.password.toString() === strSecond)
        {
            resultDiv.innerHTML = `<p><h3>欢迎回来,${user.name}</h3></p>`;
            resultDiv.innerHTML += `<p><h3>年龄:${user.age}</h3></p>`;
            resultDiv.innerHTML += `<p<h3>擅长:${user.strengths}</h3></p>`;
            resultDiv.innerHTML += `<p><h3>头像</h3>:<img src="${user.avatar}" alt="${user.name}'s avatar" style="width:50px;height:50px"></p>`;
            return;
            }
    }
    resultDiv.innerHTML = '用户不存在'
    // let url = ["zhangsan.html", "lisi.html", "wangwu.html"];
    // for (let i = 0; i < msg.length; i++)
    // {
    //     let user = msg[i]
    //     if (user.email === strFirst && user.password.toString() === strSecond)
    //     {
    //         return i;
    //         }
    // }
    // window.location.href = url[i]
})
