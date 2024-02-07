document.getElementById('p1').style.display="none";
document.getElementById('p2').style.display="none";
document.getElementById('p3').style.display="none"
function bl()
 {
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    let re=/([@]qq|[@]163)(\.{1}com|\.{1}cn)$/;
    let result=re.test(email);
    if(result==false)
        {
          alert('邮箱输入不正确！');
        }
    let msg = [
        {
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
    for(let i=0;i<3;i++)
        {   
            if(email==msg[i].email)
            {
                if(password==msg[i].password)
                {
                    document.getElementById("dlcg").innerHTML='登录成功';
                    if(i==0)
                    {
                        document.getElementById('p1').style.display="block";
                    }else if(i==1)
                    {
                        document.getElementById('p2').style.display="block";
                    }else if(i==2)
                    {
                        document.getElementById('p3').style.display="block";
                    }
                    document.getElementById("email").style.display="none";
                    document.getElementById("password").style.display="none";
                    document.getElementById("button").style.display="none";
                    document.getElementById("top").innerHTML="<br>"+'姓名：'+msg[i].name;
                    document.getElementById("bottom").innerHTML="<br>"+'年龄：'+msg[i].age;
                    document.getElementById("bottom_a").innerHTML="<br>"+'特长：'+msg[i].strengths;
                }else{
                    alert('密码输入不正确！');
                }
            }
        }   
}   
