const idInput = document.querySelector(`.id-input`);
const button = document.querySelector(`.submit`);

const getId = () => {
    const id = idInput.value;
    idInput.value = "";  // 
    console.log(id);
}

button.addEventListener("click",getId);
