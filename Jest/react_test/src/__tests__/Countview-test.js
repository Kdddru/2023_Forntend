import {render, screen} from '@testing-library/react'

import Countview from '../components/Countview'

it('CounterView의 props값에 따른 화면의 글자확인',()=>{
  render(<Countview count={5}/>)

  const initialState = screen.queryByText('현재 숫자 : 5');
  
  expect(initialState).toBeTruthy();

  render(<Countview count={0} />)

  const countState = screen.getByText("현재 숫자 : 0")
  // 현재 가져온 html엘리멘트가 Document에 있는지 확인
  expect(countState).toBeInTheDocument();

});