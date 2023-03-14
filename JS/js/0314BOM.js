/* BOM  browser object model  
브라우저에 접근하여 자바스크립트로 제어하기위해
window -- Bom의 가장 상위 객체
location.reload(); 새로고침
location 현재 페이지의 정보들을 가지고있음
histoy.lenght 갯수반환
window.histoy.go(a)   앞  -a  뒤   (back은 반대)
*/

let choice = confirm("운영체제를 알려드릴까요?");
let plaform = window.navigator.platform;
if(choice){
    document.write(`<p>${plaform}</p>`);
}

