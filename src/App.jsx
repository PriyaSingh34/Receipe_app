import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import home1 from "./assets/home.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";
import "./App.css";
import Cards from "./components/Cards.jsx";
import { FcLike } from "react-icons/fc";

import { getAllRecepies, setRecipeDetails } from "./feature/recipesSlice.js";
import RecipeDetails from "./components/RecipeDetails.jsx";
import Like from "./components/Like.jsx";
import { addLikedrecipe } from "./feature/likedSlice.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLike, setIsOpenLike] = useState(false);
  const dispatch = useDispatch();
  const allRecepies = useSelector((state) => state.recipe.recipes);
  const recipeDetails = useSelector((state) => state.recipe.recipiesDetails);
  const allLikedRecipes = useSelector((state) => state.likedItem.likedRecipes);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleLike = () => {
    setIsOpenLike(!isOpenLike);
  };

  const fetchAll = async () => {
    try {
      // const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      dispatch(getAllRecepies(data.meals));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    (async () => {
      fetchAll();
    })();
  }, []);

  const handleCardClick = (item) => {
    dispatch(setRecipeDetails(item.idMeal));
    toggleNavbar();
  };

  const handle2CardClick = () => {
    dispatch(addLikedrecipe(item.idMeal));
    onClick();
  };

  return (
    <>
      <div className="relative w-full h-[100vh] scroll-smooth  ">
        <div className="w-full h-[15%] pt-10 pb-10 bg-[#584b45] flex justify-around">
          <h1 className="text-5xl font-bold text-center text-white">
            {" "}
            Recipes
          </h1>
          <h1
            className="text-5xl font-bold text-end text-white"
            onClick={toggleLike}
          >
            {" "}
            <span className="flex gap-2">
              {" "}
              <FcLike /> Fav
            </span>
          </h1>
        </div>

        <div
          className={`absolute z-[42] transition-all duration-700 right-0 md:right-[5%] bg-slate-50  shadow-2xl max-w-lg w-full h-auto rounded-md ${
            isOpenLike ? " top-28 " : " top-[-2000px]"
          }`}
        >
          <div className="p-5 flex flex-col gap-5 ">
            {allLikedRecipes?.map((item, id) => {
              return (
                <Like
                  key={id}
                  onClick={() => handle2CardClick(item)}
                  item={item}
                />
              );
            })}
          </div>
        </div>

        <div className=" w-full h-auto flex p-10">
          <div className="relative w-full h-full  flex flex-wrap justify-center items-center ">
            <div className="absolute w-full h-full z-[-10]"></div>
            <div className="max-w-5xl h-auto flex flex-wrap gap-16 justify-center ">
              {allRecepies?.map((item, id) => {
                return (
                  // />
                  <Cards
                    key={id}
                    onClick={() => handleCardClick(item)}
                    item={item}
                    id={item?.idMeal}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`fixed w-full  pb-10 h-screen overflow-auto z-[50] top-0 bg-white  transition-all duration-700  ${
            isOpen ? "left-0 " : " left-[-2000px]"
          }`}
        >
          {allRecepies?.map((item, id) => {
            if (item.idMeal === recipeDetails) {
              return (
                <RecipeDetails onClick={toggleNavbar} key={id} item={item} />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default App;
