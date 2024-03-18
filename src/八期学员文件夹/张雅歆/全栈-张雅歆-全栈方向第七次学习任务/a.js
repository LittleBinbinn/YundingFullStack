function getCurrentTime() {
    var xhr = new XMLHttpRequest();
    var url = "http://43.143.169.168:9090/time/now";

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.code === "200") {
                    var currentTimeElement = document.getElementById('currentTime');
                    currentTimeElement.textContent = "当前时间:" + response.data;
                } else {
                    console.error("获取时间失败", response.msg);
                }
            } else {
                console.error("请求失败", xhr.statusText);
            }
        }
    };
    xhr.send();
}

window.onload = getCurrentTime;

function registerUser() {
    const username = $('#username').val();
    const password = $('#password').val();

    $.ajax({
        url: 'http://43.143.169.168:9090/user/register',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            username: username,
            password: password
        }),
        success: function (response) {
            if (response.success) {
                alert('注册成功！');
                $('#username').val('');
                $('#password').val('');
            }
        },
        error: function (xhr, status, error) {
            alert('请求失败：' + error);
        }
    });
}
function getUsersList() {
    $.ajax({
        url: 'http://43.143.169.168:9090/user/all',
        type: 'GET',
        success: function (response) {
            const usersList = response.data;
            const usersDiv = $('#usersList');
            usersDiv.empty();

            usersList.forEach(function (user) {
                usersDiv.append('<p>' + user + '</p>');
            });
        },
        error: function (xhr, status, error) {
            alert('获取用户列表失败：' + error);
        }
    });
}
$(document).ready(function () {
    $('#registerBtn').click(registerUser);
    $('#getUsersBtn').click(getUsersList);
});
