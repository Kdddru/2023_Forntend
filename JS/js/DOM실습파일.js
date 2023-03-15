//h1 수정
let h1 = document.querySelector("h1");
let ul = document.querySelector("ul");
let ol = document.querySelector('ol');

h1.innerHTML=`DOM 이용한 수정`;
h1.style.color = "blue";


// ul수정
let createLi = document.createElement("li");
let text = document.createTextNode("새로 추가한 노드요소입니다.");
ul.appendChild(createLi);
createLi.appendChild(text);
ul.removeChild(ul.firstElementChild);

// ol수정
let olLi = ol.querySelectorAll("li");
olLi[0].innerHTML = "내용을 바꾸었습니다."
ol.removeChild(olLi[1]);
ol.removeChild(olLi[3]);

/*
ol.firstElementChild.innerHTML = "내용을 바꾸었습니다.";
ol.children[1].remove();    
--> ol.firstElementChild.nextElementSibling.remove();
ol.children[3].remove();
 */

// main 수정
let main = document.querySelector(".main");
let mainP = main.querySelector("p");
let mainSpan = mainP.querySelector("span");

//span text 색 변경
mainSpan.style.color = "red";


// p태그 복제
for (let i=0; i<2; i++){
    main.append(mainP.cloneNode(true))
}

/*
let p2 = mainP.cloneNode(true);
let p3 = mainP.cloneNode(true);

main.appendChild(p2);
main.appendChild(p3);

*/

// DOM객체 속성중 classList
// 각 요소의 클래스를 추가 제거 가능

let h2 = document.querySelector('.blue-color');
h2.classList.remove("blue-color");
h2.classList.add("blue-color");


// 더했다가 제거했다가 
h2.classList.toggle("blue-color");  
h2.classList.toggle("blue-color");



