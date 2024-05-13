import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeDetails } from "../feature/recipesSlice";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

import { addLikedrecipe, removeLikedRecipe } from "../feature/likedSlice.js";

const Cards = ({ onClick, item, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const allLikedRecipes = useSelector((state) => state.likedItem.likedRecipes);

  const handleCardClick = () => {
    dispatch(setRecipeDetails(item.idMeal));
    onClick();
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-80 h-56 md:w-[430px] md:h-[300px] rounded-3xl group cursor-pointer">
      <div className="absolute top-5 left-6 w-10 h-10">
        <p className="relative z-[40] " onClick={toggleNavbar}>
          {isOpen ? (
            <FcLike
              size={30}
              onClick={() => dispatch(removeLikedRecipe(item, id))}
            />
          ) : (
            <FcLikePlaceholder
              onClick={() => dispatch(addLikedrecipe(item))}
              size={30}
            />
          )}
        </p>
      </div>

      <div className="absolute w-full h-full z-[-2] group-hover ">
        <img
          className="object-cover w-full h-full rounded-3xl transition-all duration-700 group-hover:scale-[1.1]"
          src={item.strMealThumb}
          alt=""
        />
      </div>
      <div className="absolute w-full h-full bg-black opacity-40 z-[-1] rounded-3xl transition-all duration-700 group-hover:scale-[1.1]"></div>
      <div
        className="w-full h-full flex flex-col justify-between"
        onClick={handleCardClick}
      >
        <div className="w-full flex justify-end p-5 group-hover">
          <div className="  relative rounded-md  group-hover">
            <div className="absolute w-full h-full bg-black opacity-70 z-[-1] rounded-md"></div>
            <div className="pt-2 pb-2 pr-3 pl-3">
              <p className="text-white text-xl">{item.strCategory}</p>
            </div>
          </div>
        </div>

        <div className="pl-10 pb-10 group-hover">
          <p className="text-white font-bold text-3xl">{item.strMeal} </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
