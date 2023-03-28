
//async - 비동기
//await - 기다리다    메소드 앞에 붙혀 값을 기다리게만든다



async function doFetch(){
    //await 바로 가져오기
    const promise = await fetch(`./data.txt`);
    const response = await promise.text();

    console.log(response);

}

doFetch();


// fetchAPI를 이용해서 JSON가져오기
let doJson = async function(){
    const promise = await fetch(`./data.json`);
    const response = await promise.json();

    console.log(response);
}
doJson();


const fetchBtn = document.querySelector(`#fetch-btn`);
fetchBtn.addEventListener(`click`, doFetch);


const fetchBtn2 = document.querySelector(`#fetch-btn2`);
fetchBtn2.addEventListener(`click`, async function(){
    const promise = await fetch(`./data.json`);

    if(!promise.ok){
        console.error("값이 존재하지않음".promise.ok);
    }
    const response = await promise.json();
    const address = await response.object.address;

    console.log(address);
})