const img = document.querySelector(`#menu`);
const outbtn = document.querySelector(`#out`);
const sideBar = document.querySelector(`#sideBar`);
const sidemenu = document.querySelector(`#sidemenu`);

img.addEventListener(`click`,printMenu);

function printMenu(){
    sideBar.classList.remove(`off`);
}

outbtn.addEventListener(`click`,outMenu)

function outMenu(){
    sideBar.classList.add(`off`);
}