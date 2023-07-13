import {fireEvent, render, screen} from '@testing-library/react'
import CountButtons from '../components/CountButtons'
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';


it('버튼이 있는지 확인', ()=>{
  render(<CountButtons/>);

  const incrementBtn = screen.getByTestId('incrementbtn');
  const decrementBtn = screen.getByTestId('decrementbtn');

  expect(incrementBtn).toBeInTheDocument();
  expect(decrementBtn).toBeInTheDocument();
})


//함수에 prop 값

it('CountButtons의 props값으로 함수 확인', ()=>{
  //직접 함수 작성 불가능
  //임의 함수를 jest에서 받아와서 사용

  const incrementFn = jest.fn();
  const decrementFn = jest.fn();

  render(<CountButtons incrementFn={incrementFn} decrementFn={decrementFn}/>)

  //임의로 받아온 함수가 이벤트에 따라서 실행되는지 확인
  // 함수와 이벤트와의 연결 여부 확인

  const incrementBtn = screen.getByTestId('incrementbtn');
  const decrementBtn = screen.getByTestId('decrementbtn');

  fireEvent.click(incrementBtn);
  fireEvent.click(decrementBtn);

  //이벤트가 발생되었는지 확인  : toBeCalled();
  expect(incrementFn).toBeCalled();
  expect(decrementFn).toBeCalled();

})