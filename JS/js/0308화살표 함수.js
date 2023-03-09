let hi = () =>{
    document.write(`하이<br>`);
}
hi();

//{}없으면 {}안의 내용은 return 으로 들어간다
//화살표 함수를 사용하면 한줄로 작성 하는것을 추천
let introName = name =>document.write(`나의 이름: ${name}`);
introName("홍길동");


let oddEvenCheckOper = num => (num%2 == 0)? `짝수`: `홀수`;


document.write(`<br>${oddEvenCheckOper(2)}`);


let oddEvenCheck = num => {
    if (num%2 == 0){
        return "짝수";
    }
    else{
        return "홀수";
    }
}

document.write(`<br>${oddEvenCheck(3)}`);


let subArrow = (num1,num2) => num1-num2;


document.write(`<br>${subArrow(5,10)}`)