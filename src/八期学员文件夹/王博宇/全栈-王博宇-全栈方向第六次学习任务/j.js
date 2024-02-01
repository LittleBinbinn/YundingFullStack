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
];
var reg = /\w{4,}@[q1][q6]3?\.c[on]m?/;
var p = 0;
function we() {
    var em = document.getElementsByName('em')[0].value;
    if(reg.test(em) == true)
    {
        console.log(true);
    }
    else
    {
        alert("您的邮箱格式错误，请重新输入");
        }   
    var passw = document.getElementsByName("passw")[0].value;
    for (var i = 0; i < 3; i++)
    {
        if (msg[i].email == em)
        {
            if (msg[i].password == passw)
            {
                if (i == 0)
                {
                    window.open('张三.html');
                }
                else if (i == 1)
                {
                    window.open('李四.html');
                }
                else
                {
                    window.open('王五.html');
                    }
            }
            else
            {
                alert("您的密码输入有误，请重新输入");
                }
        }
        else
        {
            p++;
            }

    }
    if (p == 3)
    {
        alert("您输入的邮箱暂时没有数据，请过不知道多长时间重新尝试");
        }
}
