const slide = document.querySelector(`.slide`);
const slideImg = slide.querySelectorAll(`div`);
const next = slide.querySelector(`#next`);
const prev = slide.querySelector(`#prev`);


const startlength = 0;

next.addEventListener(`click`,nextEvent);

function nextEvent(){
    const maxlength = slideImg.length;
    for(i=0; i<slideImg.length; i++){
        if(startlength<maxlength){
            startlength++;
            slideImg[i].style.left = `${-200*startlength}%`
        }
    }
}