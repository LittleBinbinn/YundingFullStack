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
    let email;
    let password;
    let judgeEmail = (email) => {
    let rule = /@qq\.com$|@qq\.cn$|@163\.com$|@163\.cn$/;
    let emailResult = rule.test(email);
    if(emailResult === true){
        judgePassword(email);
    }else{
        alert("您的邮箱格式错误，请重输")
    }
}
    let judgePassword = (email, password) => { 
        let judge = false;
        for (let i = 0; i < msg.length; i++) {
            if (email === msg[i].email) {
                if (password === msg[i].password) {
                    window.localStorage.setItem('key', JSON.stringify(msg[i]));
                    judge = true;
                    break;
                } 
            }else{ 
                alert("用户不存在，请核对输入信息"); 
            }
        }
        return judge; 
    }

    document.querySelector('#email').addEventListener('blur', function() {
    email = document.querySelector('#email').value;
        document.querySelector('.button').addEventListener('click', function () {
            password = document.querySelector('#password').value;
            let result = judgePassword(password,email);
            if (result === true) {
                window.location.replace("登录成功.html");
            } else {
                alert('邮箱或密码错误！');
            }
        } )
    })

    
 





