let num = "";
let sum = 0;

while(num != "0"){
    if(isNaN(num) == false){
        sum += Number(num);
    }
    num = prompt("숫자값을 입력하세요 (종료:0)");
}

document.write(`<p>총합:${sum}</p>`);

