let money = false;
let card = false;

if(money == true || card == true){
    document.write("버스를 탈 수 있다");
}else{
    document.write("버스를 탈 수 없다");
}

if(true && (false || true)){
    document.write("<br>계산 결과가 참입니다");
}else{
    document.write("계산결과가 거짓입니다.");
}