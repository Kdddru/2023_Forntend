const form = document.querySelector(`#form`);
const input = document.querySelector(`#text`);

form.addEventListener(`submit`,getValue);
function getValue(){
    event.preventDefault();
    const ul = document.querySelector(`#todolist`);
    const li = document.createElement(`li`);
    const check = document.createElement(`input`)
    check.type ="checkbox"
    const text = document.createTextNode(input.value);
    const span = document.createElement(`span`);
    
    ul.appendChild(li);
    li.appendChild(check);
    li.appendChild(span);
    span.appendChild(text);

    console.log(input.value);
    input.value = "";

    check.addEventListener("click",checkResult);
}

function checkResult(){
    event.target.parentNode.classList.toggle(`check`);
    li.innerHTML = `hi`;
}



