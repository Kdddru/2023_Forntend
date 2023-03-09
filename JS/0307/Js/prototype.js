function Dog(name, age){
    this.name = name;
    this.age = age;
}

let myDog = new Dog("마루", "6")

document.write(`멍멍이 이름은 ${myDog.name} 나이는 ${myDog.age}살 입니다.`);