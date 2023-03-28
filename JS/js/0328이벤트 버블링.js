const divEvent = document.querySelector(`#div-event`);
const pEvent = document.querySelector(`#p-event`);
const spanEvnet = document.querySelector(`#span-event`)

function printTag(e){
    //버블링 제거
    e.stopPropagation();
    console.log(e.target);
    //console.log(e.currentTarget);
}

divEvent.addEventListener(`click`,printTag);
pEvent.addEventListener(`click`,printTag);
spanEvnet.addEventListener(`click`,printTag);