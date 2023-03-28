
localStorage.setItem(`key`,1);
console.log(localStorage.getItem(`key`)); 


//localStorage.removeItem(`key`);
/* 
let num =Number(localStorage.getItem(`key`));
console.log(num);
localStorage.setItem(`object`,{id:1});
console.log(localStorage.getItem(`object`));
*/

let objectString = JSON.stringify([1,2,3,4]); //일반적인 string
localStorage.setItem(`object`,objectString);
console.log(localStorage.getItem(`object`));

let object = JSON.parse(localStorage.getItem(`object`)); //객체로
console.log(object);