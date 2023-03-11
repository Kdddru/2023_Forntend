
//객체 생성 후 변수에 할당

let puppy = {
    name : "초코",

    eat : function() {
        document.write(`<p>밥을 먹습니다</p>`)
    },

    age : 6
}

let person= {
    name : "홍길동",
    address : "부산",
    intro : function () {
        return `${this.name}입니다.${this.address}에 거주중입니다`;
    }
}

let myCookie = {
    shape : "원",
    flavor : "초코",
    intro : function () {
        return `${this.shape}모양의 ${this.flavor}맛입니다`;
    },
    count : function(number){
        return `${number}개 있습니다`;
    }
}


//생성자 함수

function Dog(color, name, age){
    this.color = color;
    this.name = name;
    this.age =age;
    this.eat = function(){
        return `${this.name}는 밥을 먹습니다`;
    }
}

let dog1 = new Dog("흰색","흰둥이",1);

dog1.family ="말티즈";

function Student (name,score) {
    this.name= name;
    this.score = score;
    this.study = function(){
        this.score += 10;
    }
    this.showScore=function(){
        return this.score;
    }
}
//어렵다
let myStudent = new Student("홍길동",70);
let yourStudent = new Student("성춘향",80);


function BusCard(money) {
    this.money = money;
    this.charge = function(price){
        this.money += price;
    }
    this.takeBus = function(){
        if(this.money<1500){
            console.log(`잔액이 부족합니다`);
        }
        else{
            this.money -= 1500;
        }
    }
    this.showMoney = function(){
        return this.money;
    }
}

let myBusCard = new BusCard(1500);
let yourBusCard = new BusCard(1000);


function Messege(name, content, time){
    this.name = name;
    this.content = content;
    this.time = time;
    this.modifyMessege = function(messege){
        this.content = messege;
    }
    this.showMessege = function(){
        return `${this.name}님께서 ${this.content}를 ${this.time}에 보냈습니다`;
    }
}

let myMessege =new Messege("홍길동","반갑습니다","0224");
let yourMessege =new Messege("성춘향","안녕하세요","0224");



for(let i in yourMessege){
    document.write(`<p>${i} : ${yourMessege[i]}</p>`);
}

for(let i in myBusCard){
    document.write(`<p>${i} : ${myBusCard[i]}</p>`);
}
