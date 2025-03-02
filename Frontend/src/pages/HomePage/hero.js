import React from "react";
//------------- background image--------------
import hero_bg from "../../Assets/hero_bg.jpg";

// --------------MUI Icons ---------------------
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function Hero() {
  const categories = [
    { name: "Women's clothes", path: "/womenswear" },
    { name: "Shoes", path: "/shoes" },
    { name: "Men's clothes", path: "/menswear" },
    { name: "Kids clothes", path: "/kidswear" },
    { name: "Hobbies", path: "/" },
  ];

  return (
    <div className="p-2 ">
      <div
        className=" rounded-xl h-60  w-full bg-cover bg-center text-center pt-10 mb-2 lg:h-[30rem]"
        style={{ backgroundImage: `url(${hero_bg})` }}
      >
        <h1 className="text-white font-bold text-xl mb-5 mx-7 lg:text-6xl lg:mt-10  ">
          Change your wardrobe. Find exciting goods.
        </h1>
        {/* <div className="lg:flex lg:justify-center  ">
          <div className="bg-white  overflow-hidden rounded-full flex justify-between items-center  mx-5 p-1 lg:mt-12 lg:h-12 lg:w-9/12 md:justify-between  ">
            <div className="flex justify-start w-full">
              <SearchIcon className="p-0.5 ml-1 mr-2  text-zinc-600 lg:p-0 " />
              <input
                className="w-full text-sm outline-none lg:text-lg "
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
            <button className="bg-sky-400 rounded-full p-1 px-2  -ml-12  lg:p-2 lg:px-3   ">
              <ArrowForwardIcon sx={{ color: "white" }} fontSize="small" />
            </button>
          </div>
        </div> */}

        <div className="w-2/3 mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <SearchIcon className="pl-1 z-20 text-gray-800" />
            </div>
            <input
              type="text"
              className="w-full h-14 pl-12 pr-20 rounded-full border-2 border-white/20 bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              placeholder="What are you looking for ?"
            />
            <button className="absolute right-2 top-2 bg-sky-400 hover:bg-sky-500 text-white h-10 px-6 rounded-full transition-colors duration-200">
              Search
            </button>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="bg-white/90 hover:bg-white backdrop-blur-sm px-6 py-3 rounded-full text-gray-800 font-medium text-sm md:text-base transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              {category.name}
            </Link>
          ))}
        </div>
        {/* <div className="flex space-x-1 text-[10px] mx-2 justify-center items-center mt-5 lg:text-xl  lg:space-x-8    ">
          <button className="bg-zinc-200  rounded-full py-1 px-2 md:py-2 md:px-4 hover:font-bold">
            <Link to={"/womenswear"}> Women's clothes</Link>
          </button>
          <button className="bg-zinc-200  rounded-full  py-1 px-2 md:py-2 md:px-4 hover:font-bold ">
            <Link to={"/shoes"}>Shoes</Link>
          </button>
          <button className="bg-zinc-200 rounded-full  py-1 px-2 md:py-2 md:px-4 hover:font-bold">
            <Link to={"/menswear"}>Men's clothes</Link>
          </button>
          <button className="bg-zinc-200  rounded-full  py-1 px-2 md:py-2 md:px-4 hover:font-bold">
            <Link to={"/kidswear"}> Kids clothes</Link>
          </button>
          <button className="bg-zinc-200  rounded-full  py-1 px-2 md:py-2 md:px-4 hover:font-bold">
            Hobbies
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
