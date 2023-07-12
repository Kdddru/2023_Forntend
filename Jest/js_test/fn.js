function people(name, age){
  return {name, age}
};

function makeError(name){
  if(!name){
    throw new Error('오류가 발생했습니다');
  }
  console.log(name);
}



const fn = {
  people,
  makeError,
};


module.exports = fn ;