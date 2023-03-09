/*
document.write(`<p>${parseInt("10")}`);


let timerId = setTimeout(function(){
    document.write(`1초지낫습니다`);
},1000);

document.write(`setTimeout 다음에 작성된 내용입니다`);


clearTimeout(timerId);
*/

let age = parseInt(prompt("나이를 입력하세요"));

while(isNaN(age)){
    alert("나이가 아닙니다");
    age = parseInt(prompt("나이를 입력하세요"));
}

let year = 2023 - (age-1);
document.write(`태어난 년도 : ${year}년`);


