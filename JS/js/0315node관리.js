let element = document.createElement("h2");
let attr = document.createAttribute("style");
let text = document.createTextNode("h2태그생성");
let ul = document.querySelector(`ul`);

//속성 추가'
element.setAttributeNode(attr);

//글자 추가
element.appendChild(text);

//body에 추가
let body = document.querySelector(`body`);
body.appendChild(element);

//속성과 태그안의 글자인 경우
//DOM 접근

element.style.color = "blue";

//임의의 값 변경
element.innerHTML = "값작성";
element.textContent ="수정";

//동일한 객체는 html에서 하나만 존재
ul.appendChild(element);


//여러번 사용 (복제)
let element1 = element.cloneNode(true);
body.appendChild(element1);
element1.innerHTML ="요소3";

//node의 삭제
//ul 첫번째 태그

ul.removeChild(ul.firstElementChild);  //return 값    일정기간 삭제했다 복구 가능
//ul.firstElementChild.remove();   return x




//p태그 만들기
let p = document.createElement("p");
body.appendChild(p);

let pStyle = document.createAttribute("style");
p.setAttributeNode(pStyle);

//p태그에 textnode 추가
let pText = document.createTextNode('textnode를 이용한 텍스트 입니다');
p.appendChild(pText);

//p태그 style변경
p.style.color = "blue";

//제거
p.removeAttribute("style");
ul.removeChild(ul.firstElementChild);
ul.remove();

let cloneh2 = element.cloneNode(true);

body.appendChild(cloneh2);
body.appendChild(p.cloneNode(true));


