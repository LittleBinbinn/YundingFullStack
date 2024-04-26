window.onload = function () {
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
    }
    ];
    var btn = document.querySelector("button");
    let selfemail = document.getElementById("email");
    let warning = document.getElementById("warning");
    let selfpassword = document.getElementById("password");
    let outcome;
    btn.addEventListener('click', function () {
        let re = /^[A-Za-z0-9_]+(@(qq|163)(\.com|\.cn))$/;
        let result = re.test(selfemail.value);
        if (result === true)
        {
            right();
            
        }
        else {
            warning.innerHTML = "邮箱格式错误！请检查格式"
        }
    })
    function right() {
        let a = 0;
        let i;
        for (i = 0; i < msg.length; i++)
        {
            if (selfemail.value == msg[i].email)
            {
                a = 1;
                if (selfpassword.value == msg[i].password)
                {
                    localStorage.setItem("i", i);
                    window.location.href = "success.html";
                    break;
                }
                else {
                    alert(1)
                warning.innerHTML="邮箱或密码错误"
            }
            }
            
        }
        if (a == 0)
        {
            warning.innerHTML="该用户不存在"
            }
}
}