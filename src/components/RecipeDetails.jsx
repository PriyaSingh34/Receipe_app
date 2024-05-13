import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { getRecipeDetailsById } from '../feature/recipesSlice';
import { setRecipeDetails } from "../feature/recipesSlice";
import { PiCookingPotFill } from "react-icons/pi";
import { PiMapPinSimpleAreaFill } from "react-icons/pi";
import { FaHashtag } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import "../App.css"

const RecipeDetails = ({ onClick, item }) => {
  const dispatch = useDispatch();

  const ingredients = [
    {
      ingrediats: item?.strIngredient1,
      measure: item?.strMeasure1,
    },
    {
      ingrediats: item?.strIngredient2,
      measure: item?.strMeasure2,
    },
    {
      ingrediats: item?.strIngredient3,
      measure: item?.strMeasure3,
    },
    {
      ingrediats: item?.strIngredient4,
      measure: item?.strMeasure4,
    },

    {
      ingrediats: item?.strIngredient5,
      measure: item?.strMeasure5,
    },
    {
      ingrediats: item?.strIngredient6,
      measure: item?.strMeasure6,
    },
    {
      ingrediats: item?.strIngredient7,
      measure: item?.strMeasure7,
    },
    {
      ingrediats: item?.strIngredient8,
      measure: item?.strMeasure8,
    },
    {
      ingrediats: item?.strIngredient9,
      measure: item?.strMeasure9,
    },
    {
      ingrediats: item?.strIngredient10,
      measure: item?.strMeasure10,
    },
    {
      ingrediats: item?.strIngredient11,
      measure: item?.strMeasure11,
    },
    {
      ingrediats: item?.strIngredient12,
      measure: item?.strMeasure12,
    },
    {
      ingrediats: item?.strIngredient13,
      measure: item?.strMeasure13,
    },
  ];

  return (
    <div className=" w-full h-full ">
      <div className="w-full h-auto p-5 pt-10 pb-1 flex flex-col items-center justify-center ">
        <h1
          className="max-w-5xl text-green-500 w-full text-xl text-start cursor-pointer"
          onClick={onClick}
        >
          {" "}
          <span className="flex">
            {" "}
            <IoMdArrowRoundBack size={30} /> Back
          </span>
        </h1>
        <h1 className="max-w-5xl w-full text-3xl md:text-5xl font-bold text-start mt-3">
          {" "}
          {item.strMeal}
        </h1>
        <p className="max-w-5xl w-full text-lg md:text-3xl font text-start mt-3">
          {item.strCategory}
        </p>
      </div>

      <div className="relative w-full h-[600px] mt-10">
        <img
          className="w-full h-full object-cover "
          src={item.strMealThumb}
          alt=""
        />

        <div className="absolute top-[20%] left-[10%] bg-white opacity-0 w-72 h-52 rounded-md animate-slide-in-left">
          <div className="w-full h-full flex flex-col justify-center pl-10 ">
            <div>
              <div className="flex gap-5 ">
                <PiCookingPotFill className="pt-1" size={40} />

                <div>
                  <p className="text-green-500 font-semibold"> CATEGORY</p>
                  <p> {item.strCategory}</p>
                </div>
              </div>
              <div className="flex gap-5 mt-1 ">
                <PiMapPinSimpleAreaFill className="pt-1" size={40} />

                <div>
                  <p className="text-green-500 font-semibold"> AREA</p>
                  <p> {item.strArea}</p>
                </div>
              </div>
              <div className="flex gap-5 mt-1">
                <FaHashtag className="pt-1" size={35} />

                <div>
                  <p className="text-green-500 font-semibold"> TAG</p>
                  <p> {item.strTags}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto  md:p-20 mb-10">
        <div className="max-w-6xl w-full h-full m-auto grid-cols-1 grid lg:grid-cols-2 md:gap-y-[54rem] gap-y-[44rem]">
            <div className="relative">
          <div className="absolute left-0 w-full h-auto  p-8 animate-slide-in-left opacity-0 ">
            <div className="w-full h-auto bg-[#f5f3ed] rounded-md">
              <div className="w-full h-auto flex flex-col  border-b-gray-300 border-b-2">
                <div className="p-5">
                  <p className="text-green-500 font-semibold text-2xl md:text-3xl">
                    Ingredients:
                  </p>
                </div>
              </div>

              {ingredients.map((item, id) => {
                if (item.ingrediats !== "") {
                  return (
                    <div className="w-full h-auto flex flex-col bg-[#f5f3ed] border-b-gray-300 border-b-2 border-dottedtransition-all duration-300 hover:bg-[#d9d7d2]">
                      <div className="pl-5 pt-3 pb-3">
                        <p className=" font-semibold text-lg md:text-2xl uppercase">
                          {item?.ingrediats} :{" "}
                          <span className="font-normal lowercase">
                            {item?.measure}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="w-full h-auto flex justify-center mt-10 ">
              <div className="w-40 h-16 bg-gray-500 p-5 rounded-lg hover:text-white hover:bg-slate-900 transform hover:scale-105 transition-all duration-300">
                <a
                  href={item.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className=" text-white text-lg md:text-xl font-semibold text-center">
                    View Source
                  </p>
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="relative w-full  h-auto   ">
            <div className="absolute opacity-0 animate-slide-in-right left-0 lg:top-[-150px] w-full h-auto bg-white rounded-md p-4 ">
              <div className="p-5">
                <p className="text-green-500 font-bold text-3xl md:text-5xl text-center">
                  Instructions
                </p>
              </div>

              <div className="w-full h-80 p-4 bg-[#f1f1f1] rounded-lg mt-5">
                <div className="relative w-full h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={item.strMealThumb}
                    alt=""
                  />
                  <div className="absolute w-full h-full top-0 left-0 bg-black opacity-45"></div>
                  <div className="absolute w-full h-full top-0 left-0">
                    <a
                      href={item.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-full h-full flex justify-center items-center group">
                        <FaPlay
                          className="text-green-500 transition-all duration-700 group-hover:scale-[1.6]"
                          size={50}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto mt-4">
                <a
                  className="text-green-500 text-xl font-bold"
                  href={item.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
                <h1 className=" mt-6 text-2xl font-bold">How To Make:</h1>
                <p className="text-lg text-justify">{item.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
