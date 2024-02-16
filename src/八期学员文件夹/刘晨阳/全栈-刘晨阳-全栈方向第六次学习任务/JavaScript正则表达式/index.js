function validateEmail() {

    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;
    var emailRegex = /^([A-Za-z0-9])(\w)+(@qq|@163)+(.com|.cn)/;
    /* /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/*/
    /*/^(@qq|@163)[a-zA-Z0-9._%+-]+(\.[0-9]+)?(\.[0-9]+)?\.com$|^(@qq|@163)[a-zA-Z0-9._%+-]+(\.[0-9]+)?(\.[0-9]+)?\.cn$/;*/
    /*/^(@qq|@163)[a-zA-Z0-9._%+-]+(\.[0-9]+)?\.com$|^(@qq|@163)[a-zA-Z0-9._%+-]+(\.[0-9]+)?\.cn$/;*/
    var first = document.getElementById("first");
    var next = document.getElementById("next");
    /*var img = document.getElementById("img");*/
    var img = document.querySelector('img');
    if (!emailRegex.test(emailInput)) {
        alert("邮箱格式不正确");
        return;
    }
    // 假设你有一个对象数组来存储用户信息
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
    var userIndex = -1;
    for (var i = 0; i < msg.length; i++) {
        if (msg[i].email == emailInput && msg[i].password == passwordInput) {
            userIndex = i;
            break;
        }
    }
    if (userIndex == -1) {
        alert("用户不存在或密码不匹配");
    } else {
        alert('登录成功');
        first.style.display = 'none';
        next.style.display = 'block';
        /*img.setAttribute('src', msg[i].avatar);*/
        document.querySelector('img').setAttribute('src', msg[i].avatar); // 同上。  
        next.children[1].innerHTML = '姓名：' + msg[i].name;
        next.children[2].innerHTML = '年龄：' + msg[i].age;
        next.children[3].innerHTML = '特长：' + msg[i].strengths;
    }
} 