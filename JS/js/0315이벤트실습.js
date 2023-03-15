let dan = document.querySelector(`#dan`);
let button = document.querySelector(`#button`);
let gugudan = document.querySelector(`#gugudan`);
let p = gugudan.querySelector(`p`);




function gugudanPrint(){
    for(i=1; i<10; i++){
        let newP = document.createElement("p");
        let print = document.createTextNode(`${dan.value}X ${i} = ${dan.value *i}`);
        newP.appendChild(print);
    }
}

button.addEventListener("click",gugudanPrint);

