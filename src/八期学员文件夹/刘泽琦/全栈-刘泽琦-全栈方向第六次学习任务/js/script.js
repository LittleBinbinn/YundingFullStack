window.onload = function () {
    let text = document.querySelector('.text');
    let psw = document.querySelector('.psw');
    let psw_text = document.querySelector('.psw_text');
    let btn = document.querySelector('button');
    let loginbox = document.querySelector('.loginbox');
    let name = document.querySelector('.name');
    let age = document.querySelector('.age');
    let strengths = document.querySelector('.strengths');
    
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

    text.onclick = function () {
        this.value = '';
        this.style.color = 'black';
        text.onclick = null;
    }
    
    psw.onclick = function () {
        psw_text.innerHTML = '';
        this.style.color = 'black';
    }

    psw_text.onclick = function () {
        psw_text.innerHTML = '';
        psw.style.color = 'black';
    }
    
    btn.onclick = function () {
        if (text.value === '' || psw.value === '') {
            alert('输入不能为空！');
        } else {
            var reg = /^([A-Za-z]|[0-9])\w+@(qq|163)\.{1}(com|cn)$/;
            if (reg.test(text.value)) {
                if (text.value === obj1.email) {
                    console.log(psw.value);
                        if (psw.value == obj1.password) {
                            text.value = '';
                            psw.value = '';
                            name.innerHTML = '姓名：张三';
                            age.innerHTML = '年龄：20';
                            strengths.innerHTML = '特长：JavaScript';
                            loginbox.style.display = 'block';
                        } else {
                            alert('密码不正确！');
                        }
                } else if (text.value === obj2.email) {
                        if (psw.value == obj2.password) {
                            text.value = '';
                            psw.value = '';
                            name.innerHTML = '姓名：李四';
                            age.innerHTML = '年龄：19';
                            strengths.innerHTML = '特长：python';
                            loginbox.style.display = 'block';
                        } else {
                            alert('密码不正确！');
                        }
                } else if (text.value === obj3.email) {
                        if (psw.value == obj3.password) {
                            text.value = '';
                            psw.value = '';
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
                alert('请输入合法邮箱！');
            }
        }
    }
}