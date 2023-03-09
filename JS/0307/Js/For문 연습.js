let array = [60,70,80,90,40,70,70];
let sum = 0

for(let i=0; i<array.length; i++){
    sum += array[i];
}

document.write(`${sum/array.length} <br>`);

let sum1 = 0;

for(let i=0; i<=100; i++){
    if(i%2 != 0){
        sum1 += i
    }
}
document.write(`${sum1} <br>`);

let sum2 = 0;

for(let i=0; i<=100; i++){
    if(i%3 == 0 || i%5 == 0){
        sum2 += i
    }
}

document.write(`${sum2} <br>`);
