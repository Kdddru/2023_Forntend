let num = ["일","이","삼"];

for(let i in num){
    document.write(`${i}`);
    document.write(`${num[i]}<br>`);
}

document.write(`<br>`);

for(let j of num){
    document.write(`${j}`);
}

document.write(`<br>`);

for(let i=1; i<=100; i++){
    if(i % 2 == 0){
        document.write(`${i} `);
    }
}

document.write(`<br>`);

for(let i=2; i<=100; i+=2 ){
    document.write(`${i} `);
}

document.write(`<br>`);

for(let j=1; j<=50; j++){
    if(j % 7 ==0){
        document.write(`${j} `);
    }
}

document.write(`<br>`);


for(let i=0; i<4; i++){
    for(let j=0; j<3; j++){
        document.write(`${i}${j} `);
    }
    document.write(`<br>`);
}

//중첩 배열
let array = [[1,2], [2,3], [3,4]];

for(let i=0; i<array.length;i++){
    for(let j=0; j<2;j++){
        document.write(`${array[i][j]}`);
    }
    document.write(`<br>`);
}

for(let i=2; i<10; i++){
    for(let j=1; j<10; j++){
        document.write(`<p>${i} X ${j} = ${i*j}</p> `);
    }
    document.write(`<br>`);
}