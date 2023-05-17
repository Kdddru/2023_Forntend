import { configureStore } from "@reduxjs/toolkit";
import memoSlice from "../modules/memoSlice";
import likeMemoSlice from "../modules/likeMemoSlice";

const store = configureStore({
    reducer : {
      memo: memoSlice,
      likeMemo : likeMemoSlice,
    },
})

export default store