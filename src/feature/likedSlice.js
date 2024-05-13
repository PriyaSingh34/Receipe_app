import { createSlice } from "@reduxjs/toolkit";

const initialState={
    likedRecipes:[]
}


const likedRecipeSlice = createSlice({
    initialState,
    name:'favorites',
    reducers:{
        addLikedrecipe:(state,action,id)=>{
            console.log("in linked slice",action.payload)
       
            const arr=[...state.likedRecipes,action.payload]
            state.likedRecipes=[...arr]
        },

        removeLikedRecipe: (state, action) => {
            const id = action.payload.idMeal;
            const index = state.likedRecipes.findIndex(recipe => recipe.idMeal === id);
            if (index !== -1) {
              state.likedRecipes.splice(index, 1);
            }
          }
        
    }
})


export const {addLikedrecipe,removeLikedRecipe}=likedRecipeSlice.actions
export default likedRecipeSlice.reducer