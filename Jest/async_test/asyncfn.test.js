const asyncfn = require('./asyncfn');

test('setTimeout 확인', (done)=>{
  asyncfn.fetchUser('green',(user)=>{
    expect(user).toEqual({
      id:'green',
      name : 'usergreen'
    });
    done();
  })
})



//fetchUserPromise를 then으로
test('user Promise',()=>{
  return asyncfn.fetchUserPromise('2').then(
    (user)=>{
      expect(user).toEqual({
        id:'2',
        name:'user2'
      })
    });
})

test('user Promise await', async()=>{
  const user = await asyncfn.fetchUserPromise('3');
  expect(user).toEqual({
    id:'3',
    name:'user3'
  })
})