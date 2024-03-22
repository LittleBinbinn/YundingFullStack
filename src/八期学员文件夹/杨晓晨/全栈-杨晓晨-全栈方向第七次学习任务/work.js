//通过原生XHR
        let time = document.querySelector('.time');
        //创建
        let xhr1 = new XMLHttpRequest();
        //初始化
        xhr1.open('get', 'http://43.143.169.168:9090/time/now');
        xhr1.responseType = 'json';
        //发送请求
        xhr1.send();
        //判断status
        xhr1.onload = function () {
            if (xhr1.status === 200) {
                time.innerHTML = "当前时间为: " + xhr1.response.data;
            } else {
                alert("error");
            }
        }

//通过axios
        let ID = document.querySelector('.ID');
        let password = document.querySelector('.password');
        let register = document.querySelector('.register');
        register.onclick = function () {
            const res = axios(
                {
                    method: 'post',
                    url: 'http://43.143.169.168:9090/user/register',
                    data: {
                        "username": ID.value,
                        "password": password.value,
                        }
                }
            )
            //成功
            .then(function(response) {
                console.log("注册报文",response);
            })
            //失败
            .catch(function (error) {
                    console.log(error);
                })
        }


        let fetch = document.querySelector('.fetch');
        let message = document.querySelector('.message');


        fetch.onclick = function () {
            let xhr2 = new XMLHttpRequest();

            xhr2.open('get', 'http://43.143.169.168:9090/user/all');
            xhr2.responseType = 'json';

            xhr2.send();

            xhr2.onload = function () {
                console.log("用户列表报文", this.response);
                Data = this.response.data;
                let string = Data.toString();
                //美化并输出
                let allMessage = string.replace(/,/g, " \n ");
                message.innerHTML = ("用户列表如下:<br><br><br>" +  allMessage);
            }
            
        }
