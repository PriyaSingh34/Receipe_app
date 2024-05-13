import { configureStore } from "@reduxjs/toolkit";

import recipeReducer from '../feature/recipesSlice.js'
import linkedReducer from '../feature/likedSlice.js'
const store=configureStore(
    {
        reducer:{
            recipe:recipeReducer,
            likedItem:linkedReducer
        }
    }
)

export default store