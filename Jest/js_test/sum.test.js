//import 를 통해 sum.js를 들고온다
//import { sum } from './sum';


// 변수에 담아서 sum.js를 들고 온다
const sum = require('./sum')

test('1+2는 3이다', () => { 
  expect(sum(1,2)).toBe(3);
});


test('1+6는 7이다', () => { 
  expect(sum(1,6)).toBe(7);
});

//소수끼리의 계산에서 사욜하는 매처
//toBeCloseTo()
test('0.1과0.2의 덧셈 toBe',()=>{
  //소수점 계산은 조심하자
  //expect(0.1 + 0.2).toBe(0.3);
  expect(0.1 + 0.2).toBeCloseTo(0.3);
})

test('홍 이라는 글자가 들어간다', () => {
  expect('홍길동').toMatch(/홍/);
});

test('배열안에 숫자 1이 들어있다', ()=>{
  expect([1,2,3]).toContain(1);
})
