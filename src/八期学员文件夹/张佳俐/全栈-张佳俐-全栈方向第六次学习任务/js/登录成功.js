let information = JSON.parse(window.localStorage.getItem('key'));
let element = document.querySelector(".name");
let Name = document.createTextNode(information.name);
element.appendChild(Name);

let work = document.createTextNode(information.strength);
element = document.querySelector(".work");
element.appendChild(work);

let age = document.createTextNode(information.age);
element = document.querySelector(".age");
element.appendChild(age);


window.localStorage.removeItem('key');

//js部分不太会，qaq

























