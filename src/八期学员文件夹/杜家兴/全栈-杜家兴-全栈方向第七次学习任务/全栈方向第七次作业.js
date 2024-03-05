//显示当前时间
const timeshow = () => {
    axios.get('http://43.143.169.168:9090/time/now')
        .then((response) => {
            const TIME = response.data;
            //console.log(TIME);
            const time = TIME.data;
            const timeshowing = document.querySelector(".time");
            timeshowing.textContent = time;
        })
        .catch((error) => {
            console.log(error);
        })
}
//每秒回调一次函数，实现数秒的效果
setInterval(timeshow, 1000);

document.querySelector('#enroll').addEventListener('submit', function (event) {
    event.preventDefault();
        let data = {
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value,
        }
        let jsonData = JSON.stringify(data);

        const submit = {
            method: 'post',
            url: 'http://43.143.169.168:9090/user/register',
            data: jsonData,
            headers: {
                'Content-Type':'application/json',
            }
        }
        axios(submit)
            .then((response) => {
                console.log(submit);
                console.log(data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
})

document.querySelector('#button').addEventListener('click', () => {
    axios.get('http://43.143.169.168:9090/user/all')
        .then((response) => {
            const info = response.data;
            console.log(info);
            let num = info.data.length;
            console.log(num);
            let information = document.querySelector('.info');
            let li = [];
            for (let i = 0; i < num; i++) {
                li[i] = document.createElement('li');
                li[i].textContent = info.data[i];
                information.appendChild(li[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        })
})





























