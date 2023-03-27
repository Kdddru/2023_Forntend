//fetch를 통한 값 접근  (비동기)

/*fetch(`./data.txt`).then(function(response){
    console.log(response);
    return response.text(); // 메소드 인것
}).then(function(text){
    //처음에 then에서 pormise로 만들어 졌기에 그 값을 사용하기 위해 한번 더 사용
    console.log(text);
})
*/
console.log('fetch 이전에 작성된 내용입니다');

fetch(`./data.txt`)
.then(promise => promise.text()).then(response => console.log(response));


console.log('fetch 이후에 작성된 내용입니다');


fetch(`./data1.txt`)
.then(promise => promise.text())
.then(response => console.log(response));