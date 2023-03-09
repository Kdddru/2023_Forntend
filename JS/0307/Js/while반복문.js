let num  = 0;

while(num<3){
    num++
    document.write("세번반복합니다");
}

let password = "123";
//비밀번호를 맞췄을때 (false) 반복 멈춤  (password == "000")
//비밀번호를 틀렸을때 (true) 반복
while(password != "000") { //while의 조건식이 참(true)일때 반복
    password = prompt(`비밀번호를 입력해주세요`);
}
document.write(`<br>비밀번호를 제대로 입력했습니다`);