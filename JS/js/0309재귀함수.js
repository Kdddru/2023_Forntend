function sumFor(num){
    let sum = 0;
    for(let i = 1; i<=num; i++){
        sum += i;
    }
    return sum;
}

// num! (팩토리얼)
function sum(num){
    let sumNum = 0;
    if(num == 1){
        return num;
    }else{
        return num*sum(num-1);
    }
}


// callback

function callback(){
    document.write(`안녕하세요`);
}
callback();

function callbackcheck(f){
    f();
    document.write(`콜백함수를 불러와서 출력`);
}

let copyCallback = callback;
copyCallback();

