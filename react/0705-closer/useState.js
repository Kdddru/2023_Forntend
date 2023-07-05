function myState(value){
  //myState를 호출할때 들어갈 값
  let myValue = value;
  
  //myValue 값 바꿔주는 함수
  function setFunction(payload){
    myValue = payload;
  }

  function getMyValue(){
    return myValue;
  }

  //값을 여러개를 내보내기 위해 배열로
  return [getMyValue,setFunction]
}

const [number, setNumber]= myState(10);


console.log(number());
setNumber(100);
console.log(number());