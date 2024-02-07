document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault()
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;
    var emailPattern = /^([0-9a-zA-Z._%+-]+)(@qq|@163)\.(com|cn)$/;
    var msg = [
        { name: "张三", age: 20, strengths: "JavaScript", avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1", email: "yunding@qq.com", password: "33333" },
        { name: "李四", age: 19, strengths: "python", avatar: "https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1", email: "12345678@163.com", password: "11111" },
        { name: "王五", age: 18, strengths: "Java", avatar: "https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1", email: "yundingshuyuan@qq.com", password: "222222" },
    ];
    var isValid = emailPattern.test(emailInput);
    if (isValid) {
        var user = msg.find(function(user) {
            return user.email === emailInput && user.password === passwordInput;
        });
        if (user) {
            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '登陆成功<br>';
            resultDiv.innerHTML += '<img src="' + user.avatar + '" width="200"><br>';
            resultDiv.innerHTML += '姓名: ' + user.name + '<br>';
            resultDiv.innerHTML += '年龄: ' + user.age + '<br>';
            resultDiv.innerHTML += '特长: ' + user.strengths + '<br>';
           
        } else {
            alert("邮箱或密码不正确，请重新输入。");
        }
    } else {
        alert("请输入有效的邮箱地址。");
    }
});