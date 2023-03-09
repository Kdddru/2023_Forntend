// do{반복내용} while{조건}

let num = 0;
do{
    document.write(`<p>세번 반복합니다</p>`);
    num ++;
}while(num<3)


let password ="";
do{
    password = prompt("비밀번호를 입력하세요");
}while(password != "000")