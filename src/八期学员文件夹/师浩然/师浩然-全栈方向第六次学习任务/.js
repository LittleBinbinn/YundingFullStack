document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("exet").addEventListener("click", codexit);
});
//检测输入邮箱是否正确
function codexit() {
  let email = document.getElementById("innput").value;
  let pwd = document.getElementById("pwd").value;
  let re = /^\w+\@(qq|163)\.(cn|com)$/;
  console.log(email);
  let result = re.test(email);
  console.log(result);
  if (!result) {
    alert("您输入的邮箱格式有误，请重新输入");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("lodbutton").addEventListener("click", load);
});
//登录函数
function load() {
  for (let i = 0; i < msg.length; i++) {
    let user = msg[i];
    let email = document.getElementById("innput").value;
    // console.log(user.email);
    let pwd = document.getElementById("pwd").value;
    //数组中的密码为数字而输入的密码为字符串需要进行转换
    pwd = Number(pwd);
    // console.log(user.password);
    if (user.email === email && user.password === pwd) {
      //   alert("登录成功");
      const userelement = document.getElementById("userlist");
      const list = document.createElement("div");
      //   console.log(user);
      //   const list = document.createElement("li");
      list.innerHTML = `<img src="${user.avatar}" alt="">`;
      list.innerText = `
      ${user.avatar}
      姓名：${user.name}
      年龄：${user.age}
      特长：${user.strengths}`;
      userelement.appendChild(list);
    }
  }
}

//任务数据
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
