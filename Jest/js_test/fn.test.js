const fn = require('./fn');

test('객체 people이 홍길동과20을 가진다', ()=>{
  expect(fn.people("홍길동",20)).toEqual({name:'홍길동', age:20})
})

test('객체 people이 홍길동과20을 가진다', ()=>{
  expect(fn.people("홍길동",20)).toStrictEqual({name:'홍길동', age:20})
})


test('오류name값이 없을때 오류', () => {
  expect(()=>fn.makeError()).toThrow(Error);
})