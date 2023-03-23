const nav = document.querySelector(`.nav`);
//섹션2 인트로
const intro = document.querySelector(`.intro-scroll`);
//섹션4
const news = document.querySelector(`.news-scroll`);


/*
스크롤의 위치 : scrollX, scrollY
스크롤의 길이  : scrollHeight
화면의 길이 : innerHeight
*/


window.addEventListener(`scroll`,function(){
    // scrollY가 200이상 스크롤 되면 scrollon 클래스 추가
    //200 미만 scrollon 제거
    if(this.scrollY>=200){
        nav.classList.add(`scrollon`);
        intro.classList.add(`scrollon`);
    }
    else{
        nav.classList.remove(`scrollon`);
        intro.classList.remove(`scrollon`);
    }
    if(this.scrollY>900){
        news.classList.add(`scrollon`);
    }
    else{
        news.classList.remove(`scrollon`);
    }
})

