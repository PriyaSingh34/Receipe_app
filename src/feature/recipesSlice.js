
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    recipes:[],
    recipiesDetails:null
}


const recipeSlice=createSlice({
 name:'recipe',
 initialState,
reducers:{
    getAllRecepies:(state,action)=>{
        state.recipes=action.payload  
        },

        setRecipeDetails(state, action) {
            state.recipiesDetails = action.payload;
          },
      
}
})



export const {getAllRecepies,setRecipeDetails} = recipeSlice.actions
export default recipeSlice.reducer