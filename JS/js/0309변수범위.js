/*let name ="홍길동";
document.write(`${name}<br>`);


let text = "전역변수";
if (true) {
    let text = "지역변수";
    document.write(`${text}<br>`);
}
document.write(text);*/

let maxCount = 10;
for(let checkCount = 1; checkCount<=maxCount; checkCount++){
    document.write(`${maxCount}중의 ${checkCount}<br>`);
}

let outString ="밖에 있는 문자입니다.";

let printString= () =>{
    let inString ="안에 있는 문자입니다."
    document.write(`${outString}<br>${inString}`);
}

printString();