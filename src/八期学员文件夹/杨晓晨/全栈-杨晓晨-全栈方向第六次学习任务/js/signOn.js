let msg = [{
            name: '张三',
            age: 20,
            strengths: 'JavaScript',
            avatar: 'https://tse4-mm.cn.bing.net/tid/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaEpid=ImgDet&rs=1',
            email: 'yunding@qq.com',
            password: 33333
        },
        {
            name: '李四',
            age: 19,
            strengths: 'python',
            avatar: 'https://tse2-mm.cn.bing.net/tid/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFpid=ImgDet&rs=1',
            email: '12345678@163.com',
            password: 11111
        },
        {
            name: '王五',
            age: 18,
            strengths: 'Java',
            avatar: 'https://tse2-mm.cn.bing.net/tid/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEpid=ImgDet&rs=1',
            email: 'yundingshuyuan@qq.cn',
            password: 222222
        },
]
        

 //获取账号
        let role = location.search.substr(1);
        let roleEmail = role.split("&")[0].slice(6).replace('%40', '@');
console.log(roleEmail);

        //获取元素
        let roleName = document.querySelector('#name');
        let roleAge = document.querySelector("#age");
        let roleStrengths = document.querySelector('#strengths');
        let head = document.querySelector('.head');
        
        //匹配人物,渲染对应页面
        let result = 1;
        for (let temp of msg) {
            if (temp.email == roleEmail) {
                console.log(temp.strengths);
                head.className = 'head ' + temp.strengths;
                roleName.innerHTML = "姓名：  " +  temp.name;
                roleAge.innerHTML = "年龄：  " + temp.age;
                roleStrengths.innerHTML = "特长：  " + temp.strengths;
            }
        }