const sum = require('./sum')

test('1+2는 3이다', () => { 
  expect(sum(1,2)).toBe(3)
});


test('1+6는 7이다', () => { 
  expect(sum(1,6)).toBe(7)
});