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
        


            let email = document.querySelector('#email');
            let password = document.querySelector('#password');
            let word = document.getElementsByClassName('word');



            function checkeEmail() {
                let reg1 = /(.com)$|(.cn)$/g, reg2 = /\.{2,}/g, reg3 = /@qq.|@163./g
                // if(reg1.test(email.value)&&!reg2.test(emailvalue)) {return true;}
                if (reg1.test(email.value) && !reg2.test(email.value) && reg3.test(email.value)) {
                    word[0].className = "word ture";
                    word[0].innerHTML = "密码格式正确";
                    return true;
                }
                else {
                    word[0].className = "word false";
                    word[0].innerHTML = "邮件格式错误！"
                    return false;
                }
            }


            function checkPassword() {
                if (password.value != "") {
                    word[1].className = "word ture";
                    word[1].innerHTML = "密码格式正确";
                    return true;
                }
                else {
                    word[1].className = "word false";
                    word[1].innerHTML = "密码格式错误！"
                    return false;
                }
            }


            function checkId() {
            console.log(email.value);
            console.log(password.value);
                if (checkeEmail() && checkPassword()) {
                    for (let temp of msg) {
                        let result = 1;
                        if (temp.password == password.value&& result == 1) {
                            result = 0;
                            return true;
                        }
                    }
                        alert("您的邮箱或密码有误！");
                        return false;
                }
                else {
                    alert("您输入的信息格式不正确！请确认后重新输入");
                    return false;
                }
            }


            function checkAll() {
                if (checkeEmail() && checkPassword() && checkId()) return ture;
                else return false;
            }


            function jianyan() {

                console.log(checkeEmail());
                console.log(checkPassword());
                console.log(checkAll());
                console.log(checkId());
            }