//작성한 리듀서를 한꺼번에 묶기
import { combineReducers } from "redux";
import counter from "./counter";


//combineReducers는 state
//combineReducers안에 있는 counter은 속성값으로 설정된다
const rootReducer = combineReducers({counter})

  export default rootReducer