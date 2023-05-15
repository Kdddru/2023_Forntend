import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import memoReducer from "./slices/memoSlice";

export default configureStore ({
  reducer:{
    counter: counterReducer,
    memo : memoReducer
  },
})