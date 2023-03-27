const maxNum = document.querySelector(`#maxNum`);
const getNum = document.querySelector(`#getNum`);
const btn = document.querySelector(`#printBtn`);

btn.addEventListener(`click`,printNum);

function printNum(){
    const print = document.querySelector(`#print`);
    let maxValue = parseInt(maxNum.value);
    let random = parseInt(Math.ceil(Math.random()*maxValue));
    let getValue = parseInt(getNum.value);
    print.innerHTML = `You chose : ${getValue}, the machine chose : ${random}`;
    const printVS = document.querySelector(`#printVS`);
    if(random>0 && getValue>0){
        if(getValue == random){
            printVS.innerHTML=`YOU WON!`;
        }
        else{
            printVS.innerHTML=`YOU LOSE!`;
        }
    }
    else{
        printVS.innerHTML=`YOU CAN'T PLAY`;
    }
}