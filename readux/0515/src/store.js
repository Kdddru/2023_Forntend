import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import memoReducer from "./slices/memoSlice";
import thunkReducer from "./slices/thunkSlice";
import weatherReducer from "./slices/weatherSlice";

export default configureStore ({
  reducer:{
    counter: counterReducer,
    memo : memoReducer,
    thunkCounter : thunkReducer,
    weather : weatherReducer
  },
  middleware : (getDefalutMiddleware)=> getDefalutMiddleware()
})