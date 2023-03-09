function text(string){
    document.write(`<p>${string}</p>`);
}


function textCheck(f, string){
    f(string);
    document.write(`${string}이 출력되었습니다`);
}

textCheck(text,"hi");