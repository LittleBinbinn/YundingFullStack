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
}];
function rick() {
    let str = document.getElementById("em").value;
    let word = document.getElementById("word").value;
    let reg = new RegExp("^[a-zA-Z0-9]+@(qq|163)\\.com|\\.cn$", "g");
    const a = reg.test(str);
    if (a===false) {
        alert("输入的邮箱格式有误");
        location.reload();
    } else {
        const pipei = msg.find(function (user) {
            return user.email === str && user.password == word;
        });
        if (pipei) {
            ret(pipei);
        } else {
            alert("密码错误");
            location.reload();
        }
    }
    }
    
    function ret(user) {
    const zhi = document.getElementById("result");
    zhi.innerHTML = `
    <div class=ava>
    <img src="${user.avatar}" width="100px" height="100px" >
    </div>
    <p style="font-size: 25px;" >姓名: ${user.name}</p>
    <p style="font-size: 25px;" >年龄: ${user.age}</p>
    <p style="font-size: 25px;" >特长: ${user.strengths}</p>
    `;
    }