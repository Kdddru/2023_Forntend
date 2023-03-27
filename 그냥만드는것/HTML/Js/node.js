let body = document.querySelector(`body`);
let h1 = document.querySelector(`h1`);
let ul = document.querySelector(`ul`);
let li = ul.querySelector(`li`);
let p = document.createElement(`p`);
let text = document.createTextNode(`안녕하세요`);

body.appendChild(p);
p.appendChild(text);

