//타입스크립트는 자바스크립트의 변수와 함수에 타입을 설정
let stringArry: string[] = ['1','2','3','4','5'];


interface login {
  (username : string, passowrd : string) : boolean;
}


//화살표 함수, 익명함수를 만들어서 변수에 할당해서 쓰는 내용
let loginUser = (id:string, pw:string):boolean =>{
  console.log("로그인했습니다");
  return true;
}


let loginUserInter : login;

loginUserInter = function(id,pw){
  
  console.log(id, "로그인했습니다");

  return true
}