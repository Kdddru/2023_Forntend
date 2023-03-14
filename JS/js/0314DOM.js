let title = document.querySelector("#title");
let list = document.querySelector(`#list`);
let className = document.querySelector(".class-name");

title.style.color = "red";
/*  //문서객체를 객체형태로 보여줌  속성확인용*/


/*
document.querySelctor()를 사용하면 하나의 요소를 가져오고
all을 사용하면 여러개의 요소를 배열로 들고온다
*/

className.innerHTML = '클래스를 통해 수정된 내용입니다.';
className.style.backgroundColor = 'yellow';

title.innerHTML ='아이디를 들고 와서 수정된 내용 입니다';
title.style.textDecoration = 'line-through';

let listChil = list.querySelectorAll("li"); //배열로 출력됨
for(i=0; i<listChil.length; i++){
    listChil[i].innerHTML = '요소들을 한번에 수정한 내용입니다.';
    listChil[i].style.color = 'blue'; //태그안에 style 추가 color추가 
}




