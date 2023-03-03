let user = prompt("닉네임을 입력해주세요");
document.getElementById("greeting").innerHTML = `${user}님 오신것을 환영합니다`;
document.getElementById("sub-title").innerHTML =`홈페이지에 방문하신 것을 환영합니다`;


document.querySelector("#greeting+#sub-titled").innerHTML =`querySelector를 이용`
