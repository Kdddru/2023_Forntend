const pics = document.querySelectorAll(`.imagebox .pic`);
const lightbox = document.querySelector(`#lightbox`);


for(let i=0; i<pics.length; i++){
    pics[i].addEventListener('click',showLightbox);
}

function showLightbox(e){
    let img = e.target.dataset.src;
    lightbox.firstElementChild.src = img;
    lightbox.style.display = "block";
}

lightbox.addEventListener(`click`,function(){
    lightbox.style.display = "none";
})