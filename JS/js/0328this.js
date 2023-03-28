function Box(){
    this.height = 10;
    this.width = 10;
    this.area =function(){
        return this.height*this.width;
    }
}

let mybox =new Box();

console.log(mybox, mybox.area());

function testThis(){
    console.log(this);
}

testThis.bind(mybox)();

const btn = document.querySelector(`#btn`);
btn.addEventListener(`click`,function(){
    console.log(this);
})


const btnList = document.querySelectorAll(`#list li button`);
for(i=0; i<btnList.length; i++){
    btnList[i].addEventListener(`click`,testThis);
}
