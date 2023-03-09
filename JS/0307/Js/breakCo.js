let num = 0;

while(true){
    num++;
    document.write(`${num} `);
    if(num==10){
        break;
    }
}

document.write(`<br>`);

for(let i=1; i<=10; i++){
    if(i%3 == 0){
        continue;
    }
    document.write(`${i} `);
}

