function outerFunction(){
    let value = 10;
    function innerFunction(){
        alert(value);
    }
    innerFunction();
}

function add(a,b){
    let sum = a+b;
    function printNum(){
        document.write(sum);
    }
    printNum();
}


//클로저
//함수 호출할때마다 지역변수들은 초기화
let count = () =>{
    let countNum = 0;
    countNum++;
    return countNum;
}

function countClosure(){
    let countNum = 0;
    return function(){
        return countNum +=1;
    }
}

let counter = countClosure();
console.log(counter());
console.log(countClosure());
