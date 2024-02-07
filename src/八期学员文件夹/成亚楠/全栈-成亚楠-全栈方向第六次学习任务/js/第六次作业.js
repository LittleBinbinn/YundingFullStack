function check() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
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
        let emailInput = new RegExp("^[a-zA-Z0-9]+(@qq|@163)\\.com$|\\.cn$", "g");
        let testresult = emailInput.test(email);
    if (testresult) {
        let t = true;
        let user;
            for (let i = 0; i < msg.length; i++){
                
                if (msg[i].email == email && msg[i].password == password) {
                    user = msg[i];
                    t = false;
                    break;
                }
            }
            if (t) {
                document.getElementById("result").innerHTML ="邮箱不存在或密码错误！";
            }
            else {
                information(user);
            }

        }
        else { alert("邮箱格式错误，请重新输入!") };
    }
    function information(user) {
        let show = document.getElementById("result");
        show.innerHTML = `登录成功<br><img src="${user.avatar}" width="100px" height="70px"><br>姓名: ${user.name}<br>年龄: ${user.age}<br>特长: ${user.strengths}`;
        
    }