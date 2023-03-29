class Myclass{
    //속성
    constructor(name){
        this.name = name;
        this.money = 0;
    }
    //메소드
    sayName(){
        alert(this.name);
    }
    setMoney(num){
        this.money = num;
    }
}
// 클래스를 이용한 객체 생성

let myclass = new Myclass("green");
myclass.sayName();
console.log(myclass);

function MyFunc(name){
    this.name = name;
    this.money = 0;
    this.sayName = function(){
        alert(this.name);
    }
    this.setMoney = () =>{
        this.money = num;
    }
}

let myfunc = new MyFunc(`blue`);
myfunc.sayName();

for (let i in myclass) {
    console.log(i, myclass[i]);  //속성만 나타남
    
}
for(let i in myfunc){
    console.log(i, myfunc[i]);
}