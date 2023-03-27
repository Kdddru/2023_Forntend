const slide = document.querySelector(`.slide`);
const slideImg = slide.querySelectorAll(`div`);
const next = slide.querySelector(`#next`);
const prev = slide.querySelector(`#prev`);


let startlength = 0;
const maxlength = slideImg.length;

next.addEventListener(`click`,nextEvent);

function nextEvent(){
    if(startlength<maxlength-1){
        startlength++;
        for(let i=0; i<slideImg.length; i++){
            slideImg[i].style.left = `${-100*startlength}%`;
        }
    }
}

prev.addEventListener(`click`,prevEvent);

function prevEvent(){
    if(startlength>0){
        startlength--;
        for(let i=0; i<slideImg.length; i++){
            slideImg[i].style.left = `${-100*startlength}%`;
        }
    }
}