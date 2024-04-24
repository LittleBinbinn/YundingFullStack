document.getElementById("d1").style.display = "none";
document.getElementById("d2").style.display = "none";
document.getElementById("d3").style.display = "none";
function bu() {
  var Password = document.getElementById("password").value;
  var Email = document.getElementById("email").value;
  let result = /([@]qq|[@]163)(\.{1}com|\.{1}cn)$/;
  let Result = result.test(Email);
  let msg = [
    {
      name: "张三",
      age: 20,
      strengths: "JavaScript",
      avatar:
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1",
      email: "yunding@qq.com",
      password: 33333,
    },
    {
      name: "李四",
      age: 19,
      strengths: "python",
      avatar:
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1",
      email: "12345678@163.com",
      password: 11111,
    },
    {
      name: "王五",
      age: 18,
      strengths: "Java",
      avatar:
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1",
      email: "yundingshuyuan@qq.cn",
      password: 222222,
    },
  ];
  var j = 0; //做标记
  if (Result === false) {
    alert("邮箱输入不正确！");
  } else {
    for (var i = 0; i < 3; i++) {
      if (Email == msg[i].email && Password == msg[i].password) {
        document.getElementById("start").innerHTML = "登录成功";
        if (i == 0) document.getElementById("d1").style.display = "block";
        if (i == 1) document.getElementById("d2").style.display = "block";
        if (i == 2) document.getElementById("d3").style.display = "block";
        document.getElementById("email").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("but").style.display = "none";
        document.getElementById("t").innerHTML = "姓名：" + msg[i].name;
        document.getElementById("tt").innerHTML = "年龄：" + msg[i].age;
        document.getElementById("ttt").innerHTML = "特长：" + msg[i].strengths;
        j = 1;
        break;
      }
    }
    if (j == 0) {
      alert("邮箱或者密码输入的不匹配！");
    }
  }
}
