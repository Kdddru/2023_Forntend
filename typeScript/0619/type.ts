class MyClass {
  name = '';
  money = 0;
  //constructor를 통해서 객체를 생성할때 속성의 값 지정
  constructor (name : any){
    this.name = name;
  }
  //함수형태로 메소드를 만들어서 사용
  setMoney = (money : any) =>{
    this.money= money;
  } 

}


//타입스크립트로 작성하는 클래스
//Accessor : 접근할수 없는 속성(provatie)에 get과 set을 이용하여 접근
class MyTypeClass {
  
  private name:string;
  money: number = 0;

  //set과 get을 통해 접근

  get getname():string{
    return this.name
  }

  set setname(newValue:string){
    this.name = newValue;
  }

}

const mytypeclass  = new MyTypeClass();
mytypeclass.money = 1000;
mytypeclass.setname='green';


abstract class Develgoper2 {
  //{}없는 메소드
  abstract coding():void;
  drink():void{
    console.log('drink');
  }
}

class FrontEndDeveloper extends Develgoper2 {
  coding():void{
    console.log('develop wed');
  }
  design():void{
    console.log('desgin web');
  }

}

const front = new FrontEndDeveloper();

front.drink();
front.design();
front.coding();


//제네릭
//타입(자료형)을 함수의 파라미터처럼 사용한것

function getText<T>(text:T):T{
  return text 
}

console.log(getText<string>('hi'));
console.log(getText<number>(10));
console.log(getText<boolean>(true));