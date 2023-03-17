// a태그 클릭했을때 li태그 on클래스 이름을 추가
// 다른 li태그의 on클래스는 제거

const btnList = document.querySelectorAll(`.list .btn`);

for(let i=0; i<btnList.length; i++){
    btnList[i].addEventListener("click",onTap);
}




function onTap(e){
    e.preventDefault();
    for(let i=0; i<btnList.length; i++){
        btnList[i].parentNode.classList.remove("on");
    }
    e.target.parentNode.classList.add("on");
}
