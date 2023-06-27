let word:string = '안녕';
let num : number = 1;
let isTrue :boolean = true;
let stringArray:Array<string>=['1','2','3'];

interface Person {
  name : string;
  age : number;
}

let myPerson:any ={
  name : 'green',
  age : 40,
}

function printName(person:Person):void{
  console.log(person.name);
}

printName(myPerson);

function getText<T>(text:T): T{
  return text
}

console.log(getText<string>('HI'));
console.log(getText<number>(10));