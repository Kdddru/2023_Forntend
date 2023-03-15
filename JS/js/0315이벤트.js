function printConsole(argument){
    console.log(`${argument} 태그를 눌렀습니다`);
}

let textBox = document.querySelector(`#textBox`);
let printP = document.querySelector(`#print`);
let button = document.querySelector(`#button`);

function printInputValue(){
    printP.innerText = textBox.value;
    printP.style.color = "blue";
    if(button.style.color == "red"){
        button.style.color = "";
    }
    else{
        button.style.color="red";
    }
    textBox.value = "";
}

button.addEventListener("click",printInputValue);

//p태그의 이전 형제태그
//button = p.previousElementSibling;