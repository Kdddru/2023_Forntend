import React, { useEffect } from 'react'

export const KakaoMapComp = () => {
  
  const kakao = window.kakao;

  useEffect(()=>{
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
	    center: new kakao.maps.LatLng(35.156441, 129.059360), //지도의 중심좌표.
	    level: 3 //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    
    const markerPosition  = new kakao.maps.LatLng(35.156441, 129.059360); 
    const markerPosition2  = new kakao.maps.LatLng(35.154184, 129.059533);

    const marker = new kakao.maps.Marker({
      position: markerPosition2
    });
    marker.setMap(map);
  },[])


  return (
    <div>
      <h3>지도</h3>
      <div id='map' style={{width:'500px',height:'500px'}}></div>
    </div>
  )
}
