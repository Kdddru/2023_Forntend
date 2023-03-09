function print(string){
    document.write(`${string}`);
}

let string = "안녕하세요";


let dustSelector = (dust) =>{
    if(dust<= 30){
        print(`좋음`);
    }else if(dust <=80){
        print(`보통`);
    }else if (dust<= 150){
        print('나쁨');
    }
    else{
        print(`매우나쁨`);
    }
}

let dust = 40;

dustSelector(dust);
