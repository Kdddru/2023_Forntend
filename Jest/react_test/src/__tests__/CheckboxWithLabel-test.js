import {cleanup, fireEvent, queryByLabelText, render} from '@testing-library/react';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


//it : test와 동일한 역할
it('CheckboxWithLabel이 클릭 이후 글자가 바뀜', () => {
  
  //render를 통해서 먼저 컴포넌트 실행
  //props 넣어서 진행
  //queryByLabelText:
  //getByLabelText:

  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();

  
});

it('CheckboxWithLabel 클릭확인', ()=>{
  const {getByLabelText, queryByLabelText} = render(
    <CheckboxWithLabel labelOn={'선택'} labelOff={'취소'}/>
  )
  expect(getByLabelText(/취소/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/취소/i));
  expect(queryByLabelText(/선택/i)).toBeTruthy();

});