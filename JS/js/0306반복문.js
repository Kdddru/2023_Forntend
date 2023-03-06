for(let i=0; i<3; i++){
    document.write(`세번 반복합니다<br>`);
}

for(let i =0; i<3; i++){
    document.write(`${i}<br>`);
}

for(i=10; i>0; i--){
    document.write(`${i} `);
}
document.write("<br>");

for(i=0; i<10; i++){
    document.write(`2 x ${i} = ${2*i}<br>`);
}

let numbers = ["영","일","이"];

for (i in numbers){
    document.write(`${i}`);
    document.write(`${numbers[i]} `);
}

for (i=0; i<numbers.length; i++){
    document.write(numbers[i]);
}

document.write(`<br>`);

for(number of numbers){
    document.write(`${number} `);
}

let scores = [50,55,65,75,85];

for(let score of scores){
    if(score>=60){
        document.write(`${score} 합격 `);
    }
}

for(let i in scores){
    if(scores[i]>= 60){
        document.write(`<p>${scores[i]} 합격</p> `);
    }
}

for(let i=0; i<scores.length; i++){
    if(scores[i]>=60){
        document.write(`${scores[i]} 합격`);
    }
}

let students = ["홍길동","장발장"];
students = "성춘향";
document.write(`<p>${students}</p>`);