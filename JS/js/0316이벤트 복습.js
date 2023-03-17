const input = document.querySelector(`#input`);


input.onfocus = function(e){
    input.style.backgroundColor = "grey";
}

input.onblur = function(e){
    input.style.backgroundColor = "";
}


let btn = document.querySelector(`#btn`);
btn.addEventListener('click',printBtn);

function printBtn() {
    btn.style.color = "red";
}
btn.addEventListener('mouseenter', function(){
    btn.innerHTML = "마우스를 올렸습니다";
})

//p태그
let p2 = document.querySelector(`#p2`);

p2.addEventListener('mouseenter',function(){
    p2.style.color = "red";
})

//li 

const ul = document.querySelector(`#ullist`);
const ullistLi = ul.querySelectorAll(`li`);
for(let i =0; i<ullistLi.length; i++){
    ullistLi[i].addEventListener('click',function(){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        ullistLi[i].style.color = `rgb(${r},${g},${b})`;
    });
}


//p22 p23

const p22 = document.querySelector(`#p22`);
const p23 = document.querySelector(`#p23`);

p22.addEventListener('click', function(e){
    e.target.innerHTML = "글자가 바꼈습니다!";   
    //현재 글자 바뀜  e만 들고와도 해당 태그에 속성을 줄수있음
    e.target.style.backgroundColor = "gray";
})

//p4
const p4 = document.querySelector('#p4')

p4.addEventListener("click",changeColor);
p4.addEventListener("dblclick",changeColor);

function changeColor(e){
    if(e.type == "click"){
        e.target.style.color = "blue";
    }
    else if(e.type == "dblclick"){
        e.target.style.backgroundColor = "gray";
    }
}

const ul2 = document.querySelector('#ullist2');
const ul2Li = ul2.querySelectorAll('li');

for(let i=0; i<ul2Li.length; i++){
    ul2Li[i].addEventListener("click",changeColor);
    ul2Li[i].addEventListener("dblclick",changeColor);
}


// 인수 지정해서 함수 호출
const p5 = document.querySelector(`#p5`);
const p6 = document.querySelector(`#p6`);
const p7 = document.querySelector(`#p7`);



p5.addEventListener("click",function(e){
    printInnerHTML(e,"내용을 바꿉니다");
});  //콜백함수처럼 쓰기


p6.addEventListener("click",e => printInnerHTML(e,"다시 수정하여 작성합니다"));
p7.addEventListener("click",e => printInnerHTML(e,"다시 수정하여 작성합니다"));


function printInnerHTML(e, string){
    e.target.innerHTML = string;
}