for(let i = 10; i>0; i--){
    document.write(`${i} `);
}

let numArray = [1,2,3,4];

document.write(`<hr>`);

for(let i of numArray){
    document.write(`${i} `);
}

document.write(`<hr>`);

let flowerArray = ["해바라기", "튤립", "장미"];

for(let i in flowerArray){
    document.write(`${flowerArray[i]} `);
}

document.write(`<hr>`);

for (let i = 1; i<=6; i++ ){
    if(6%i == 0){
        document.write(`${i} `);
    }
}

document.write(`<hr>`);

let a = 2;
let b = 3;
/*
for (let i =0; i<b; i++ ){
    result *= 2 
}
 */
let power = function(a,b){
    return a**b;
}

const myStorage = {
    car:{
        inside:{
            gloveBox : "maps",
            passengerSeat : "crumbs"
        },
        outside : {
            trunk: "jack"
        }
    }
}
let map = myStorage.car.inside.gloveBox;
document.write(`${map}`);


let info = {
    name : "Nature of Code",
    price : `${30000}원`,
    writer : "다니엘 쉬프만",
    ISBN : 9788967471901
}

function product(name, pay){
    this.name = name;
    this.pay = pay;
    this.keep = function(){
        return `${this.name}을 보관했습니다`;
    }
    this.getPay = function(){
        return this.pay;
    }
}

let book = new product("book",6000);
let pencil = new product("pencil", 2000);
let hat= new product("hat",8000);



function user(id, money){
    this.id = id;
    this.money = money;
    this.buylist = [];
    this.charge= function(plustMoney){
        return this.money += plustMoney;
    } 
    this.buy = function(products){
        if(this.money >= products.getPay()){
            this.money -= products.getPay();
            this.buylist.push(products.name);
            return `계산완료  남은돈 : ${this.money} `; 
        }
        else{
            console.log(`돈부족`);
            return `계산불가`;
        }
    }
}

let harry = new user("harry", 10000);
