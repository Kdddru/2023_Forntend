//render : 컴포넌트를 실행시키는 함수
//screen : 렌더이후에 화면에 추력되는 html 엘리멘트 가져오는 개체

// >> render를 통해서 가져와 쓸 수 도 있다
//ex) const {getByText} = render(컴포넌트)

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/메롱/i);
  //expect(linkElement).toBeInTheDocument();


  const view = screen.getByText('현재 숫자 : 0');

  expect(view).toBeInTheDocument();


});

it('App에서 증가버튼을 눌렀을때 값이 바뀌는지', ()=>{
  render(<App/>)

  const incrementBtn = screen.getByTestId('incrementbtn');

  fireEvent.click(incrementBtn);

  const changeState = screen.getByText('현재 숫자 : 1');
  expect(changeState).toBeInTheDocument();


})