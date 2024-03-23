function loginEmailAndPassword() {
    event.preventDefault();
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var email = emailInput.value.trim();
    var password = passwordInput.value;
    var emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    document.getElementById("result").innerHTML = "邮箱格式不正确";
    return;
    } 
    var msg = [
        { name: '张三', age: 20, strengths: 'JavaScript', avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1', email: 'yunding@qq.com', password: '33333' },
        { name: '李四', age: 19, strengths: 'python', avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1', email: '12345678@163.com', password: '11111' },
        { name: '王五', age: 18, strengths: 'Java', avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1', email: 'yundingshuyuan@qq.cn', password: '222222' }
    ];
    for (let i = 0; i < msg.length; i++) {
        if (email === msg[i].email && password === msg[i].password) {

            document.getElementById("result").innerHTML = `  
            <div style="width: 100%; height: 50px; background-color: #fff;"></div>登录成功<br>
            <img src="${msg[i].avatar}" alt="" style="width: 50px; height: 50px;">  
            <div>姓名：${msg[i].name}</div><br>  
            <div>年龄：${msg[i].age}岁</div><br>  
            <div>特长：${msg[i].strengths}</div><br>  
            `;
            return;
        }
    }
    document.getElementById("result").innerHTML = "邮箱与密码不匹配，或不存在此用户";
}