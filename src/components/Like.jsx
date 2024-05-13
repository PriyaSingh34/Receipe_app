import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addLikedrecipe } from '../feature/likedSlice';
import { setRecipeDetails } from '../feature/recipesSlice';

const Like = ({onClick, item}) => {

    const dispatch = useDispatch();

  const allLikedRecipes=useSelector(state=>state.likedItem.likedRecipes)

  const handleCardClick = () => {
    dispatch(setRecipeDetails(item.idMeal)); 
    onClick();
  };
  

      
  return (
    <div className='relative w-full h-40  rounded-lg ' onClick={handleCardClick}>
    <div className='absolute w-full h-full z-[-2] group-hover '> 
          <img className='object-cover w-full h-full rounded-3xl transition-all duration-700 group-hover:scale-[1.1]' src={item.strMealThumb} alt="" />
    </div>
    <div className='absolute w-full h-full bg-black opacity-40 z-[-1] rounded-3xl transition-all duration-700 group-hover:scale-[1.1]'></div>
    
    <div className='w-full h-full flex justify-center items-center'>
       <p className= 'text-white text-4xl font-semibold'>{item.strMeal}</p>
    </div>
</div>
  )
}

export default Like
