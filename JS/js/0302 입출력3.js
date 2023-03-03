let score = prompt("점수를 입력해 주세요");
let result = score>= 60;
document.getElementById("title").innerHTML = `점수결과 입니다`
document.getElementById("result").innerHTML = result;