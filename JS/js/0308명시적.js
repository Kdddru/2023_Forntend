
//익명함수

let hi = function(){
    document.write(`<p>안녕하세요</p>`);
}

hi();

let print = function(string){
    document.write(`<p>${string}</p>`);
}

for(let i=0; i<3; i++){
    let hello = function(){
        document.write(`<p>hi</p>`);
    }
    hello();
}
