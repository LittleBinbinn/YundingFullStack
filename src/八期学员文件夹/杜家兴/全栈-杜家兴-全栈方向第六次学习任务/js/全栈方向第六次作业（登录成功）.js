let information = JSON.parse(window.localStorage.getItem('key'));
let element = document.querySelector(".name");
let Name = document.createTextNode(information.name);
element.appendChild(Name);

let work = document.createTextNode("特长：" + information.strengths);
element = document.querySelector(".work");
element.appendChild(work);

let age = document.createTextNode("年龄：" + information.age);
element = document.querySelector(".age");
element.appendChild(age);

let img = document.querySelector(".img");
let newImg = document.createElement("img");
newImg.src = information.avatar;
img.parentNode.replaceChild(newImg, img);

window.localStorage.removeItem('key');






























