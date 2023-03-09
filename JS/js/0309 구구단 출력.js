// 특정 구구단 출력 함수
let gugudan = (max) => {
    for(let j=1; j<10; j++){
        document.write(`<p>${max} X ${j} = ${max* j}</p>`);
    }
}

gugudan(4);