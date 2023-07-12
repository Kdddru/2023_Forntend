function fetchUser(id, checkTest){
  setTimeout(()=>{
    console.log('0.1초가 걸렸습니다');
    const user ={
      id: id,
      name : 'user' + id
    }
    checkTest(user)
  },1000);
}

function fetchUserPromise(id){
  return new Promise((resolve)=>{
    console.log('0.1초가 걸립니다');

    setTimeout(()=>{
      const user = {
        id: id,
        name : 'user' + id
      }
      resolve(user);
    },1000);
  })

}

const asyncfn ={
  fetchUser,
  fetchUserPromise,
}

module.exports = asyncfn;