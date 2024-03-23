var time = document.getElementsByClassName('time');
//var reg = document.getElementsByTagName('button')[0];
//var list = document.getElementsByTagName('button')[1];
var id = document.getElementsByTagName('input');
var psw = document.getElementsByTagName('input');

function updateTime () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","http://43.143.169.168:9090/time/now");
    xhr.send();
    xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status ===200){
        var arr = JSON.parse(xhr.responseText);
        time[0].innerHTML = '当前时间：' + arr.data;
        //console.log(arr.data);
    }
    }
}

updateTime();
setInterval(updateTime,1000);

document.addEventListener('DOMContentLoaded',function () {

    var reg = document.getElementsByTagName('button')[0];

    reg.addEventListener('click', function () {

        const xhr1 = new XMLHttpRequest();
        xhr1.open ("POST","http://43.143.169.168:9090/user/register");
        xhr1.setRequestHeader ("Content-type","application/json");
        xhr1.onreadystatechange = function () {

        if(xhr1.readyState === 4 && xhr1.status ===200){
                console.log(xhr1.responseText);
                alert("注册成功！");
            }
        }

        xhr1.send (JSON.stringify({
            "username": id[0].value,
            "password": psw[1].value
        }));
        
    });

    var list = document.getElementsByTagName('button')[1];

    list.addEventListener('click', function () {
        const xhr2 = new XMLHttpRequest();
        xhr2.open ("GET","http://43.143.169.168:9090/user/all");
        xhr2.send ();
        xhr2.onreadystatechange = function () {    
            if(xhr2.readyState === 4 && xhr2.status ===200){

                var list = document.getElementsByClassName('list');
                var rtext = JSON.parse(xhr2.responseText).data; 
                console.log(xhr2.responseText);
                const  ul= document.createElement('ul');
                list[0].appendChild(ul);

                for(let a = 0; a < rtext.length; a++){
                    ul.insertAdjacentHTML("beforeend",`
                        <li>${rtext[a]}</li>
                    `)
                }
            }
        };

    })
});

