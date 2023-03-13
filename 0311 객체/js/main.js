let first = new AnimalChart("홍길동","강아지", 1);


function AnimalChart(name, kind, age){
    this.name = name;
    this.kind = kind;
    this.age = age;
    this.sickness = "";
    this.condition = "";

    this.receive = function(sickness,condition){
        this.sickness +=sickness;
        this.condition = condition;
    }

    this.confirm = function(){
        for(let i in first){
            delete first.receive;
            delete first.confirm;
            console.log(`${i} : ${first[i]}`);
        }
    }
}

first.receive("감기","나쁨");
first.receive(" 두통");
