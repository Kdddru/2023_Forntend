let dan = document.querySelector(`#dan`);
let button = document.querySelector(`#button`);
let gugudan = document.querySelector(`#gugudan`);
let p = gugudan.querySelector(`p`);




function gugudanPrint(){
    if(gugudan.children.length == 0){
        for(i=1; i<10; i++){
            let newP = document.createElement("p");
            let text = `${dan.value} X ${i} = ${dan.value *i}`;
            gugudan.appendChild(newP);   //구구단 div에 p를 생성
            newP.innerHTML = text;
        }
    }
    else{
        
    }
}

button.addEventListener("click",gugudanPrint);



