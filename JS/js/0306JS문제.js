let num1 = 10;
let num2 = 20;

if(num1 > num2){
    console.log(`${num1}`);
}
else{
    console.log(`${num2}`);
}

let book = 3;

if(book<5){
    console.log(`현재 책을 빌릴 수 있습니다. \n 빌릴수 있는 권수 : ${5-book}`);

}else{
    console.log("대출 받을수 있는 책을 다 받았습니다");
}

let score = 65;
if(score>= 70){
    console.log(`합격`);
}else if(60<=score && score<70 ){
    console.log(`보충수업`);
}
else{
    console.log(`재수강`);
}

let month = 3;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31일");
        break;
    case 2 :
        console.log("28일");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30일");
        break;
}


