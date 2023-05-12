//작성한 리듀서를 한꺼번에 묶기
import { combineReducers } from "redux";
import counter from "./counter";
import counterNumber from "./counterNumber";
import memo from "./memo";
import counterThunk from "./counterThunk";
import weatherThunk from "./weatherThunk";

//combineReducers는 state
//combineReducers안에 있는 counter은 속성값으로 설정된다

//dispatch를 통해 action에 파라미터 가져온다
const rootReducer = combineReducers(
  {counter,counterNumber,memo,counterThunk,weatherThunk}
  )

  export default rootReducer