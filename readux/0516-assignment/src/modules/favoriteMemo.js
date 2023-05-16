import { createSlice } from "@reduxjs/toolkit";


export const favoriteMemo = createSlice(
  {
    name : "favoriteMemo",
    initialState :[],
    reducers:{
      addFavorite : (state, action)=>{
        const newFavorite = {
          ...action.payload,
          id : state.length
        }
        const newFavoriteList = state.concat(newFavorite)
        return newFavoriteList
      },
      deleteFavorite : (state,action) =>{
        state.splice(action.payload,1)
      }
    }
  }
)

export const { addFavorite, deleteFavorite } = favoriteMemo.actions

export default favoriteMemo.reducer