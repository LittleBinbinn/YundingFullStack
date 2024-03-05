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

var email = document.querySelector("#email");
var password = document.querySelector("#password");
var signIn = document.querySelector("#signIn");
var worngMessage = document.querySelector("#worngMessage");
console.dir(email);
email.onblur = function () {
  reg = /^([a-zA-Z0-9_-])+(@qq)|(@163)+(.com)|(.cn)+/;
  var flag = reg.test(email.value);
  if (flag == false) {
    worngMessage.innerHTML = "!!!错误的邮箱格式";
  } else {
    worngMessage.innerHTML = "&nbsp;";
    for (i = 0; i < msg.length; i++) {
      if (email.value == msg[i].email) {
        worngMessage.innerHTML = "请输入密码";
        break;
      }
    }
    if (i == msg.length) {
      worngMessage.innerHTML = "请确认您是否完成注册";
    }
  }
};
function getemail() {
  for (i = 0; i < msg.length; i++) {
    if (email.value == msg[i].email) {
      localStorage.setItem("i", i);
      break;
    }
  }
  return i;
}
signIn.onclick = function () {
  var i = getemail();
  console.log(i);
  console.log(msg[i].password);
  if (password.value == msg[i].password) {
    window.location.href = "6thSigned.html";
  } else {
    worngMessage.innerHTML = "!!!密码错误";
  }
};
