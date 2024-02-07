function logon() {
    let mailBox = document.getElementById("string1").value;
    let passWord = document.getElementById("string2").value;
    let check1 = /\.com|\.cn$/g;//判断结尾为.com或.cn
    let result1 = check1.test(mailBox)
    console.log(result1);
    let mailBoxSecond = mailBox.split(/\.com|\.cn$/g);//去掉结尾的.com或.cn
    let check2 = /\./g;//判断是否有点
    let result2 = check2.test(mailBoxSecond[0])
    console.log(result2);
    let check3 = /@qq|@163$/g;//判断是否以@qq或@163结尾
    let result3 = check3.test(mailBoxSecond[0])
    console.log(result3);
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
    if (result1 === true && result2 === false && result3 === true)
    {
        if (mailBox === msg[0].email&&passWord == msg[0].password)
        {
            document.getElementById("string1").remove();
            document.getElementById("string2").remove();
            document.getElementById("a").remove();
            document.getElementById("b").remove();
            document.getElementById("c").remove();
            document.getElementById("success").innerHTML = "登录成功";
            document.getElementById("picture").style.display = "block";
            document.getElementById("personalData").innerHTML = "姓名：张三<br>年龄:20<br>特长:JavaScript";
        }
        else if (mailBox === msg[1].email&&passWord == msg[1].password)
        {
            document.getElementById("string1").remove();
            document.getElementById("string2").remove();
            document.getElementById("a").remove();
            document.getElementById("b").remove();
            document.getElementById("c").remove();
            document.getElementById("success").innerHTML = "登录成功";
            document.getElementById("picture").style.display = "block";
            document.getElementById("personalData").innerHTML = "姓名：李四<br>年龄:19<br>特长:python";
        }
        else if (mailBox === msg[2].email && passWord == msg[2].password)
        {
            document.getElementById("string1").remove();
            document.getElementById("string2").remove();
            document.getElementById("a").remove();
            document.getElementById("b").remove();
            document.getElementById("c").remove();
            document.getElementById("success").innerHTML = "登录成功";
            document.getElementById("picture").style.display = "block";
            document.getElementById("personalData").innerHTML = "姓名：王五<br>年龄:18<br>特长:Java";
        }
        else 
        {
            alert("没有该用户或密码不正确！");
        }
    }
    else
    {
        alert("邮箱格式不正确,请重新输入");
    }
}