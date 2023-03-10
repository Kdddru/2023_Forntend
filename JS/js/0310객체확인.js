//let num = Num(123);
//num.toExponential();

document.write(`<p>객체에 들어가 있는 함수를 메소드라고 한다<p>`);

let puppy = {
    name:`초코`,
    eat : function(){
        document.write("박을 먹습니다");
    },
    nameSpeak : function(){
        document.write(`${this.name}`);
    }
}
/*
for(let i in puppy){
    document.write("<p>"+i +":" + puppy[i]+"</p>");
} */

function Intro(name, height, weight){
    this.name= name;
    this.height = height;
    this.weight = weight;
    this.increaseH = function () {
        this.weight++;
    }
}

let me = new Intro('김두현',187,74);

let intro = {
    name : "김두현",
    height : 187,
    weight : 74
}

function AnimalChart(name, kind, age){
    this.name = name;
    this.kind= kind;
    this.age = age;
    this.sickness ="";
    this.condition = "";
    this.receive = function(sickness, condition){
        this.sickness = sickness;
        this.condition = condition;
    } 
    this.confirm = function(){
        for(let i in AnimalChart){
            return`${i} : ${AnimalChart[i]}`;
        }
    }
}

let first = new AnimalChart(`홍길동`,`강아지`,1);