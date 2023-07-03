import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";


//store
export default configureStore({
  reducer : {
    user : userReducer
  }
})

// middleware