import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "../modules/memoSlice";
import favoriteReducer from "../modules/favoriteMemo";
export const store = configureStore(
  {
    reducer:{
      memo: memoReducer,
      favorite : favoriteReducer
    }
  }
)