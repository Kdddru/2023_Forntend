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
