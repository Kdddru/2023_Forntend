import React from 'react'
import InputForm from '../feathers/inputform/InputForm';
import  CommonButton  from '../feathers/styleComponent/CommonButton';
import  MyButton from '../feathers/styleComponent/MyButton';
import SpecialButton from '../feathers/styleComponent/SpecialButton';
import StyleComp from '../feathers/styleComponent/StyleComp';
import MyLink from '../feathers/styleComponent/MyLink';

export const Home = () => {


  return (
    <div>
      <StyleComp>스타일드 컴포넌트</StyleComp>
      {/** form, submit은 export default 사용 */}
      <MyButton
      onClick={()=>{
        alert('클릭')
      }}
      >버튼 컴포넌트</MyButton>
      <InputForm/>
      <CommonButton color='white'>버튼디자인</CommonButton>
      <SpecialButton mode = 'light'>버튼</SpecialButton>
      <MyLink></MyLink>
    </div>
  )
}
