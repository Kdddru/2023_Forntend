
let array = [`HTML`,`CSS`,`javascript`];

document.write(`${array.join("/")}`);


//내장 객체 메소드
//Array [] >> new Array()
document.write(`<hr>`);

let arrayTest = new Array(1,2,3);
document.write(arrayTest);

document.write(`<hr>`);

//concat 두개의 배열을 결합  => return
let arrayConcat = array.concat(["일","이","삼"]);
document.write(`${arrayConcat}`);


let arrayCopy1 = array;
array.push("java");
document.write(`<p>${array}</p>`);
document.write(`<p>${arrayCopy1}</p>`);


let arrayCopy2 = array.concat();
arrayCopy2.push("react");
document.write(arrayCopy2);
document.write(array);

document.write(`<hr>`)
//스프레드 연산자  객체나 배열의 값을 꺼내서 씀
let arrayCopy3 =[...array];
document.write(arrayCopy3);
document.write(array+"<br>");
array.splice(1,1);

document.write(`${array}<br>`);

let NumArray = [3,6,7,2,7,3,1];
NumArray.sort();
document.write(`${NumArray}`);

let flowerArray = ["튤립", "장미", "국화"];
console.log(flowerArray.pop());
console.log(flowerArray.pop());
console.log(flowerArray.pop());

//스트링 내부객체
//문자열 내부 배열 요소가져옴
let string = `홍길동`;
document.write(`<p>${string.charAt(0)}</p>`);

document.write(`<p>${string.match("홍")}</p>`);
document.write(`<p>${string.search("향")}</p>`);
document.write(`<p>${string.replace("홍","고")}</p>`);
document.write(`<p>${string.split("길")}</p>`);//주민등혹번호,전화번호

let centerString = string.charAt(1);
document.write(`<p>${string.replaceAll(centerString,"*")}</p>`);

// Date 객체

let today = new Date();
document.write(`<p>${today.getFullYear()} ${today.getMonth()+1} ${today.getDate()}</p>`);  //getFullYear 메서드(function)
document.write(`<p>${today.getHours()} ${today.getMinutes()} ${today.getSeconds()} </p>`);  
document.write(`<p>${today.getDate()}</p>`) //0~6까지 출력 switch or array 사용해서 요일로 변환

//getTime : 시작시간과 끝시간을 이용해서 전체걸린 시간 체크

let startTime = new Date();
for(let i = 0; i<100; i++){
    console.log(i);
}
let endTime = new Date();


today.setFullYear(2020);
document.write(`${today.getFullYear()}<br>`);


let today2 = new Date();

console.log(`${today2.getHours()} ${today2.getMinutes()} ${today2.getSeconds()}`);

// Number

document.write(`<p>${Number.isNaN("1")}</p>`);
let num1 = 10.56;

document.write(`${num1.toFixed()}`); // 소수 반올림해서 보여줌  ()안값은 소수 몇째자리 까지인지

//tostring =>  객체.tostring = function() {return;}

let object = {
    name : "객체",
    value : "값",
    toString : function() {
        return this.value;
    }
}


document.write(`${object}`);

