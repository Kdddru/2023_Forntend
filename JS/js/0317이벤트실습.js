//p1 태그 변경

const p1 = document.querySelector(`#p1`);


p1.addEventListener("click",e =>{
    if(e.target.innerHTML == "숨겨진 단어입니다")
    {
        e.target.innerHTML = "눌려주세요";
        e.target.style.color = "";
    }
    else{
        e.target.innerHTML = "숨겨진 단어입니다"
        e.target.style.color = "red";
    }
})

const firstList = document.querySelector(`#first-list`);
const checkbox = firstList.querySelector(`#checkbox`);

/*
checkbox.addEventListener("click", check)
function check(e){
    const li = e.target.parentNode;
    if(e.target.checked) {
        li.style.color = "grey"
    }
    
}
 */
checkbox.addEventListener("change", e => {
    if(checkbox.checked){
        firstList.style.color = "gray";
    }
    else{
        firstList.style.color = "";
    }
})

const checkList = document.querySelector(`#checklist`);
const checkListInput = checkList.querySelectorAll(`li>input[type =checkbox]`);

const imgDiv = document.querySelector(`#img`);

imgDiv.addEventListener("click", e =>{
    e.target.classList.toggle("change-img");
})

