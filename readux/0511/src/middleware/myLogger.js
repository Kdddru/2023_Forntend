
/**
 * 
 * 미들웨어
 * dispatch 호출되고 리듀서가 실행되기전 먼전 실행되는 중간 함수
 * 
 * 리듀서로 값을 바꾸기전에 실행하는 내용을 출력 or 수정
 * logger : 리덕스에 관한 내용 출력
 * thunk :  비동기 함수를 순서에 따라 출력할 수 있게 작성
 */



const myLogger = store => next => action=> {

  console.log(action);

  // next() 액션객체를 리듀서 또는 미들웨어에게 전달
  // result는 next() 실행한 결과값 : undefined
  const result = next(action);
  return result
}

export default myLogger
