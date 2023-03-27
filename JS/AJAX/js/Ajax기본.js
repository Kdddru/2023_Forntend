/*HTTP요청하기 위한 객체 생성*/

/*
const req = new XMLHttpRequest();

req.open("GET","./data.txt");
req.send();
//응답확인  => 서버에 요청을 전송하고 바로 실행하면 값이 없다 
//값이 받아오는데 시간이 걸려서

//onreadtstatechange : 메소드를 수정해서 사용
//readtstate의 값이 바뀔떄마다 실행될 내용작성

req.onreadystatechange = function(){
    console.log("객체상태 : " + this.readyState);
    console.log("응답번호 : " + this.status);
    if(this.readyState == 4 && this.status){
        console.log("값 : " + this.response);
    }
}
*/

const ajaxBtn = document.querySelector(`#ajax-btn`);
const textP = document.querySelector(`#ajax-text`)

ajaxBtn.addEventListener(`click`,function(){
    /*
    XMLHTTP객체 생성
    서버 요청 "./data.text"
    요청 전송
    onreadstatechange 메소드 수정하여 값 확인
     */
    const data = new XMLHttpRequest();

    data.open(`GET`,`./data.txt`);
    data.send();

    data.onreadystatechange = function(){
        console.log(`객체상태 :`+ this.readyState);
        console.log(`응답번호 :`+ this.status);
        if(this.readyState == 4 && this.status){
            console.log(`값 : ` + this.response);
            textP.innerHTML = this.response;
            //새로고침되지 않음
        }
    }

})

//json값 들고오기

const jsonBtn = document.querySelector(`#ajax-btn-json`);

jsonBtn.addEventListener(`click`,function(){
    const req = new XMLHttpRequest();
    req.open("GET", "data.json");
    req.send();

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(`JOSN값 : `,req.response);
            console.log(typeof(req.response));
            // JSON.parse를 통해서 객체로 변환

            const data = JSON.parse(req.response);
            console.log(data);
            console.log(typeof(data));
            console.log(data.id);
            console.log(data.text);
            console.log(data.list);
            console.log(data.object);

            const jsonP = document.querySelector(`#ajax-json`);
            jsonP.innerHTML = data.object.name;
        }
    }
})