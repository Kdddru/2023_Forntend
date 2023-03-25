const slide = document.querySelector(`.slide`);
const slideImg = slide.querySelectorAll(`div`);
const next = slide.querySelector(`#next`);
const prev = slide.querySelector(`#prev`);


const maxlength = slideImg.length;
let startlength = 0;

next.addEventListener(`click`,nextEvent);

function nextEvent(){
    if(startlength<maxlength-1){
        startlength++;
        for(i=0; i<slideImg.length; i++){
            slideImg[i].style.left = `${-100*startlength}%`;
        }
    }
}

prev.addEventListener(`click`,preventEvent);

function preventEvent(){
    if(startlength>0){
        startlength--;
        for(i=0; i<slideImg.length; i++){
            slideImg[i].style.left = `${-100*startlength}%`;
        }
    }
}