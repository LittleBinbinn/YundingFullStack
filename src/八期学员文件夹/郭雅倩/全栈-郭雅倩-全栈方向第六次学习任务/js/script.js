window.onload = function () {
    let email = document.querySelector('.email');
    let password = document.querySelector('.password');
    let btn = document.querySelector('button');
    let loginbox = document.querySelector('.loginbox');
    let name = document.querySelector('.name');
    let img=document.querySelector('.img');
    let age = document.querySelector('.age');
    let strengths = document.querySelector('.strengths');
    var image = document.getElementById('pic');

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
    },]


    let [obj1, obj2, obj3] = msg;

    email.onclick = function () {
        this.value = '';
        this.style.color = 'black';
        email.onclick = null;
    }

    password.onclick = function () {
        password_text.innerHTML = '';
        this.style.color = 'black';
    }



    btn.onclick = function () {
        if (email.value === '' || password.value === '') {
            alert('输入不能为空！');
        } else {
            var reg = /^([A-Za-z]|[0-9])\w+@(qq|163)\.{1}(com|cn)$/;
            if (reg.test(email.value)) {
                if (email.value === obj1.email) {
                    console.log(password.value);
                    if (password.value == obj1.password) {
                            email.value = '';
                            password.value = '';
                            
                            img.src='https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1'
                            name.innerHTML = '姓名：张三';
                            age.innerHTML = '年龄：20';
                            strengths.innerHTML = '特长：JavaScript';
                            loginbox.style.display = 'block';
                        } else {
                            alert('密码不正确！');
                        }
                } else if (email.value === obj2.email) {
                        if (password.value == obj2.password) {
                            email.value = '';
                            password.value = '';
                            
                            img.src = 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1'
                            name.innerHTML = '姓名：李四';
                            age.innerHTML = '年龄：19';
                            strengths.innerHTML = '特长：python';
                            loginbox.style.display = 'block';
                        } else {
                            alert('密码不正确！');
                        }
                } else if (email.value === obj3.email) {
                        if (password.value == obj3.password) {
                            email.value = '';
                            password.value = '';
                            
                            img.src ='https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1;'
                            name.innerHTML = '姓名：王五';
                            age.innerHTML = '年龄：18';
                            strengths.innerHTML = '特长：Java';
                            loginbox.style.display = 'block';
                        } else {
                            alert('密码不正确！');
                        }
                    } else {
                        alert('您输入的用户不存在，请重新输入。');
                    }
            } else {
                alert('邮箱格式不正确！');
            }
        }
    }
}
