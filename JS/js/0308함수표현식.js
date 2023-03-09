let sub = function(num1, num2){
    let result = num1-num2;
    return result;
}

document.write(`${sub(5,10)}`);



let oddEvenCheck = function(num){
    if(num%2 == 0){
        document.write(`짝수`);
    }
    else{
        document.write(`홀수`);
    }
}


let oddEvenCheckOper = function(num){
    return (num%2 == 0)? `짝수` : `홀수`;
}

console.log(oddEvenCheckOper(6));

