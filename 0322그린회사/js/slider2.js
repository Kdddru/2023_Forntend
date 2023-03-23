/*슬라이더 버튼 */

const pictureBtn = document.querySelector(`.picture-button`);
const slider2Btn = pictureBtn.querySelectorAll(`a`);

//슬라이더 아이템
const slider2Items =document.querySelectorAll(`.slider2-item`);

//각각의 버튼을 눌렀을때 그 위치에 있는 슬라이더 이동
for(let i = 0; i<slider2Btn.length; i++){
    slider2Btn[i].addEventListener(`click`,function(){
        event.preventDefault();
        //forEach는 함수다
        //배열에 있는 각가의 값을 꺼내서 콜백함수를 통해 쓸수있다
        //0의 기준으로 움직임
        slider2Items.forEach(function(item, index){
            item.style.left = `${i*(-100)}%`
        });
    })
}
//dot 변수지정
const dots =document.createElement(`div`);
dots.classList.add(`slider2-dots`);

//slider2Items갯수에 맞춰 dot 생성 및 슬라이드 클릭 이벤트 생성
for(let i=0; i<slider2Items.length; i++){
    const dot = document.createElement("div");
    dot.classList.add(`dot`);
    dots.appendChild(dot);
    dot.addEventListener(`click`,
    function(){slider2Items.forEach(function(item){item.style.left = `${i*(-100)}%`
        });
        for(let i=0; i< dots.children.length; i++){
            dots.children[i].classList.remove(`on`);
        }
        event.target.classList.add(`on`);
    });
}

const slider2 = document.querySelector(`#slider2`);
slider2.appendChild(dots);