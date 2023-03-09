/*while(true){
    console.log(`무한루프에 빠졌습니다`);
    break;
}
let num =0;

while(true){
    num++;
    document.write(`${num}<p>세번 반복합니다</p>`);
    if(num == 3){
        break;
    }
}
    
let password = "";

while(true){
    password = prompt("비밀번호를 입력하세요")
    if (password == "000"){
        break;
    }
    document.write("로그인 됫옹");
}*/
let num1 = 1;

while(num1 < 10){
    num1 ++;
    document.write(`<p>${num1}</p>`);
    continue;
    document.write(`continue 뒷 내용`);
}

let num2 = 0;
while (num2 <5){
    num2++
    if(num2 %2 != 0){
        continue;
    }
    document.write(`<p>${num2}</p>`);
}


for(let i = 0; i<5; i++){
    if(i%2 != 0){
        continue;
    }
    document.write(`${i}`);
}