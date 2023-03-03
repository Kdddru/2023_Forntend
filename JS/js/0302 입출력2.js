let years = prompt("현재 생년을 입력해주세요",1980);
let age = 2023-Number(years);
if (years <= 0){
    document.querySelector("#get-age").innerHTML=`오류`;
}else{
    document.querySelector("#get-age").innerHTML =`현재 나이는 ${age}세 입니다`;
}
console.log(isNaN(age));

//함수네요 ...ㅋㅋ..
