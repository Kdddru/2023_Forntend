let pw = "";
let count = 0;

do{
    pw = prompt(`비밀번호를 입력하세요. 시도횟수:${count}`);
    count++;

}while(pw !== "green")

document.write("로그인~");
