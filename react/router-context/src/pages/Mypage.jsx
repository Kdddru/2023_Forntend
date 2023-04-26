import React, { useContext, useRef, useState } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom';

export const Mypage = () => {
  const {state, action} = useContext(DataContext);

  const [show, setShow] = useState(false);

  //DOM에 접근하기위해 리액트에서 id대신 useRef사용
  /**
   * 
   *  : id값으로 접근하면 return의 화면이 다 호출된 뒤에 접근
   * useEffect를 이용해서  마운트 후 id접근
   * useRef를 사용하면 바로 작성을 해도 마운트 후에 값을 가져옴
   * React는 가상 Dom이기 때문에 render이후에 return의 태그들이 화면에 출력 
   */

  const prePic = useRef();

  //좋아요 게시물 삭제
  const deleteLike = (id) =>{
    const newLikeList = state.likelist.filter((like)=>(
      like.boardId !== id
    ))
    action.setLikelist(newLikeList);
  }
  //프로파일 바꾸기
  const changeProfile = () =>{
    setShow(true)
  }

  const onLoadFile = (e) =>{
    //console.dir(e.target.files);

    /**
     * URL createObjectURL에서 오류 발생
     * typeError : 잘못된 값이 들어갔을떄 생기는 오류
     * undefined일때 
     * 1. 다른 값 수정
     * 2. 함수 중지
     */
    if(e.target.files[0] === undefined){
      //함수 종료 return -1
      return -1;
    }

    //사진 넣기전 변환
    action.setUser(
      {
        ...state.user,
        profile:URL.createObjectURL(e.target.files[0])
      }
    )
    
    console.log(prePic);
    prePic.current.style.backgroundSize ='cover'
    prePic.current.style.backgroundImage = 
    `url(${URL.createObjectURL(e.target.files[0])})`


  }

  return (
    <div>
      <h3>MyPage</h3>
      <div>
        <img src={state.user.profile} alt="프로필사진" width={200}/>
        <div>
          <button
          onClick={changeProfile}
          >프로필 수정</button>
        </div>
        </div>
      <h5>{state.user.writer}님의 페이지</h5>
      <hr/>
      <h5>좋아요 리스트</h5>
      <ul>
        <li>게시글 제목</li>
        {
          state.likelist.map((like)=>(
            <li key={like.boardId}>
              <Link to={`/boardlist/${like.boardId}`}>
                {like.title}
              </Link>
              <button
              onClick={()=>{deleteLike(like.boardId)}}
              >삭제</button> 
            </li>
          ))
        }
      </ul>

      {/** 모달창 사용*/}
      {/** 프로필 수정창 */}
        <div className='modal-background'
          style={{
            width : "100%",
            height : "100vh",
            backgroundColor:'rgba(0,0,0,0.3)',
            position : 'absolute',
            top: "0",
            display : show ?  `block` : 'none'
          }}
        >
          <div className='modal'
          style={{
            width : '80%',
            backgroundColor : "white",
            height : '300px',
            margin : "auto",
            marginTop : "80px",
            padding : "40px 20px"
          }}
          >
            {/** 미리보기 */}
            <div ref={prePic}
              style={{
              width :'200px',
              height : '200px',
              backgroundColor:'rgba(0,0,0,0.3)',
            }}></div>
            <input type="file" onChange={onLoadFile}/>
            <button
            onClick={()=>{
              /**같은 스테이트가 아니면 useEffect를 쓸필요없음 */
              setShow(false) 
            }}
            >닫기</button>
          </div>
        </div>
    </div>
  )
}
