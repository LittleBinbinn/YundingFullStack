
window.onload = function () {
        // 从 sessionStorage 中获取数据
    const email = sessionStorage.getItem('email');
    const password = sessionStorage.getItem('password');
    const avatarIndex=sessionStorage.getItem('avatarIndex');
    const nameIndex=sessionStorage.getItem('nameIndex');
    const ageIndex=sessionStorage.getItem('ageIndex');
    const strengthsIndex = sessionStorage.getItem('strengthsIndex');
    const name = document.querySelector('.name')
    const img = document.querySelector('img')
    const age = document.querySelector('.age')
    const hobby=document.querySelector('.hobby')
    name.innerHTML = '姓名:'+nameIndex
    age.innerHTML = '年龄：'+ageIndex
    hobby.innerHTML='特长：'+strengthsIndex
    img.src=avatarIndex
}