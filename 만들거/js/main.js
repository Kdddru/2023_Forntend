const list =document.querySelector('#list');
const btn = list.querySelectorAll(`.btn`);
const img = list.querySelectorAll('img');
console.log(btn);

for(let i=0;  i<btn.length; i++){
    btn[i].addEventListener('click',printImg);
}


function printImg(e){
    e.preventDefault();
    
}