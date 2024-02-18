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
const btn = document.querySelector('.register')
const uemail = document.querySelector('.email')
const upad = document.querySelector('.password')
// 格式验证
uemail.addEventListener('change', function () {
  const wgf = document.querySelector('.wgf')
  // const wgs = document.querySelector('.wgs')
  const reg = /^[\w-]+@(qq|163)\.(cn|com)$/
  if (!reg.test(uemail.value)) {
    wgf.innerText = '格式错误'
  } else {
    wgf.innerText = ''
  }
})
upad.addEventListener('change', function () {
  // const wgf = document.querySelector('.wgf')
  const wgs = document.querySelector('.wgs')
  const reg = /[0-9a-zA-Z]{4,10}/
  if (!reg.test(upad.value)) {
    wgs.innerText = '格式错误'
  } else {
    wgs.innerText = ''
  }
})
// 点击登录事件
btn.addEventListener('click', function () {
  let i = 0
  for (i = 0; i < 3; i++){
    let psd = +upad.value
    if (uemail.value === msg[i].email && psd === msg[i].password) {
      document.write(`
      <div style="width: 471px;; height: 500px; background-color: #666; position: relative; background-image: url(http://zhaijinyu1.oss-cn-beijing.aliyuncs.com/zhaijin%20program-1/38b0d46405bff24d7683eca23f0f6acd.png); margin: 0 auto;">
    <div style="width: 100%; height: 50px; background-color: #fff;"></div>
    <img src="${msg[i].avatar}" alt="" style="width: 50px; height: 50px; ">
    <div >${msg[i].name}</div><br>
    <div >${msg[i].age}岁</div><br>
    <div style="color:red">擅长${msg[i].strengths}</div><br>
      `)
      break
    } if(i===2) {
      document.write(`
      <div style="position: relative; margin: 0 auto; width: 300px; height: 300px;">
    <h1>邮箱与密码不匹配，或不存在此用户</h1>
    <img src="http://zhaijinyu1.oss-cn-beijing.aliyuncs.com/zhaijin%20program-1/OIP-C.jpg" alt="">
    <img src="http://zhaijinyu1.oss-cn-beijing.aliyuncs.com/zhaijin%20program-1/v2-5b0ae769e29ce073b4c9449d40b38681_xld.jpeg" alt="" style="width: 300px;">
  </div>
      `)
    }
  }
    
})
