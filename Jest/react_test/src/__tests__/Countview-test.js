import {render, screen} from '@testing-library/react'

import Countview from '../components/Countview'

it('CounterView의 props값에 따른 화면의 글자확인',()=>{
  render(<Countview count={5}/>)

  const initialState = screen.queryByText('현재 숫자 : 5');
  
  expect(initialState).toBeTruthy

});