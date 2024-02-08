const xhr = new XMLHttpRequest();
xhr.open("GET", "http://43.143.169.168:9090/time/now");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        console.log(JSON.parse(xhr.responseText))
        time = JSON.parse(xhr.responseText)
        timedata = time.data
        console.log(timedata)
        document.getElementById('NewTime').innerHTML = "当前时间：" + timedata
    }

}

function zhuCe() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://43.143.169.168:9090/user/register");
    xhr.setRequestHeader("Content-type", "application/json");
    var nowusername = document.getElementById('Username').value
    var nowpassword = document.getElementById('Password').value
    xhr.send(JSON.stringify({
        Username: nowusername,
        Password: nowpassword,
    }));
}

function HuoQu() {
    const xha = new XMLHttpRequest();
    xha.open("GET", "http://43.143.169.168:9090/user/all");
    xha.send();
    xha.onreadystatechange = function () {
        if (xha.readyState == XMLHttpRequest.DONE && xha.status == 200) {
            console.log(JSON.parse(xha.responseText))
            all = JSON.parse(xha.responseText)

            for (let propName in all.data) {
                document.getElementById('name').innerHTML += all.data[propName] + '<br>'
            }
        }

    }
}
// fetch('http://43.143.168.168:9090/time/now')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // console.log(data);
//         // 假设返回的数据是一个对象，包含一个名为"time"的属性，你可以这样展示：
//         document.getElementById('NewTime').textContent = data.time;
//     })
//     .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });



// 1获取用于显示时间的DOM元素
// const currentTimeElement = document.getElementById('currentTime');

// 函数：获取当前时间并展示
// function fetchAndDisplayCurrentTime() {
//     // 使用fetch API向服务器请求当前时间
//     fetch("GET", "http://43.143.169.168:9090/time/now")
//         .then(response => {
//             // 确保响应成功
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             // 解析JSON格式的响应体
//             return response.json();
//         })
//         .then(data => {
//             // 假设后端返回的数据格式如下：{ "time": "2023-04-15T12:00:00Z" }
//             const currentTime = data.time;
//             // 更新DOM元素以显示当前时间
//             currentTimeElement.textContent = '当前时间：' + new Date(currentTime).toLocaleString();
//         })
//         .catch(error => {
//             // 处理网络错误或其他错误情况
//             currentTimeElement.textContent = '错误：无法获取当前时间';
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }




// 2调用函数以开始获取和显示时间的过程
// fetchAndDisplayCurrentTime();
// fetch("GET", "http://43.143.169.168:9090/time/now")
//     .then(response => response.json()) // 假设后端返回的是JSON格式的时间数据
//     .then(data => {
//         const currentTime = data.time; // 假设返回的数据结构为 { "time": "2023-10-23T12:00:00Z" }
//         document.getElementById('timeDisplay').textContent = currentTime; // 假设页面上有一个id为'timeDisplay'的元素用于显示时间
//     })
//     .catch(error => {
//         console.error('Error fetching time:', error);
//     });
// document.getElementById('registerBtn').addEventListener('click', () => {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     fetch('/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }) // 将用户信息转换为JSON格式并发送
//     })
//         .then(response => {
//             if (response.ok) {
//                 alert('注册成功！');
//             } else {
//                 alert('注册失败，请重试！');
//                 throw new Error('Registration failed');
//             }
//         })
//         .catch(error => {
//             console.error('Error registering user:', error);
//         });
// });
// document.getElementById('getUserListBtn').addEventListener('click', () => {
//     fetch('/api/users') // 假设后端提供了/api/users接口来获取用户列表
//         .then(response => response.json()) // 假设后端返回的是JSON格式的用户列表数据 [{ "username": "user1" }, { "username": "user2" }, ...]
//         .then(users => {
//             const userListElement = document.getElementById('userList'); // 获取用于显示用户名列表的元素
//             userListElement.innerHTML = ''; // 清空列表内容，避免重复添加用户信息
//             users.forEach(user => { // 遍历用户列表，将用户名添加到列表中显示
//                 const listItem = document.createElement('li'); // 创建一个新的列表项元素<li>
//                 listItem.textContent = user.username; // 设置列表项元素的文本内容为用户名
//                 userListElement.appendChild(listItem); // 将列表项元素添加到列表中显示
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching user list:', error); // 在控制台打印错误信息
//         });
// });