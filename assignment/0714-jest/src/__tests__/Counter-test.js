import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "../components/Counter";


it('Counter 컴포넌트 숫자 값 확인',()=>{
  
  render(<Counter/>);

  const initalState = screen.getByText('0');

  expect(initalState).toBeTruthy();

})

it('Counter 컴포넌트 증가버튼 확인',()=>{
  render(<Counter/>);

  const increment = screen.getByTestId('incrementBtn');

  fireEvent.click(increment);

  const changeState = screen.getByText('1');

  expect(changeState).toBeTruthy();

})

it('Counter 컴포넌트 감소버튼 확인',()=>{

  render(<Counter/>)

  const decrement = screen.getByTestId('decrementBtn');

  fireEvent.click(decrement);

  const changeState = screen.getByText('-1');

  expect(changeState).toBeTruthy();

})