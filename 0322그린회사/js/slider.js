/*슬라이더 버튼 */

const prevButton = document.querySelector(`#prev`);
const nextButton = document.querySelector(`#next`);

//슬라이더 아이템
const sliderItems =document.querySelectorAll(`.slider-item`);

//전체 슬라이더 갯수
const maxSlide =sliderItems.length

//현재위치
let currSlide = 1;


//next btn
nextButton.addEventListener("click",function(){
    if(currSlide<maxSlide){
        currSlide++;
        for (let i = 0; i<sliderItems.length; i++){
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`;
        }
    }
})

//prev btn
prevButton.addEventListener(`click`,function(){
    if(currSlide>1){
        currSlide--;
        for (let i = 0; i<sliderItems.length; i++){
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`;
        }
    }
})