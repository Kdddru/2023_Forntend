
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

