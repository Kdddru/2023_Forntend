/*
function math_function(x,y){
    let result = 2* x + y;  
    return result;
}

console.log(math_function(1,2));



function hi(){
    document.write(`안녕하세요. 반갑습니다`);

}

hi();


//명시적 함수

function introName(name){
    document.write(`안녕하세요${name}입니다. 반갑습니다`);
}

introName(`홍길동`);



console.log(print('홍길동'));

function introNameReturn(name){
    return `안녕하세요 ${name}입니다 반갑습니다`;
}

document.write(introNameReturn(`홍길동`));

function area(num1, num2){
    let result = num1*num2;
    return result;
}

document.write(area(5,10));


let numArray = [30,60,40,60,20];

let avrg = (numArray) => {
    let sum = 0;
    let result = 0;
    for(i=0; i<numArray.length; i++){
        sum += numArray[i];
    }
    result = sum/numArray.length;
    return result;
}

console.log(`${avrg(numArray)}`);

function add(num1, num2){
    num2 = (num2 == undefined) ? 0 : num2 ; 
    if(num2 == undefined){
        num2 = 0;
    }
    let result = num1 + num2;
    return result;
    
}                   

document.write(add(5));
*/


//두 수를 곱하는 함수
function multiply(a, b=1){
    return a*b;
}

//나머지 매개변수를 사용하여 값을 가져오는 함수
//가져온 값은 배열의 형태

function addAll(...arguments){
    let sum =0 ;
    for(i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

document.write(addAll(5));

function print(string){
    document.write(`${string}`);
}

