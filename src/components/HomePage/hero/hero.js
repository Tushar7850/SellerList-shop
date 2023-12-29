import React from "react";
//------------- background image--------------
import hero_bg from "../../Assets/hero_bg.jpg";

// --------------MUI Icons ---------------------
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="p-2 ">
      <div
        className=" rounded-xl h-60  w-full bg-cover bg-center   text-center pt-10 mb-2 lg:h-[25rem]"
        style={{ backgroundImage: `url(${hero_bg})` }}
      >
        <h1 className="text-white font-bold text-xl mb-5 mx-7 lg:text-5xl lg:mt-10  ">
          Change your wardrobe. Find exciting goods.
        </h1>
        <div className="lg:flex lg:justify-center  ">
          <div className="bg-white  overflow-hidden rounded-full flex justify-between items-center  mx-5  p-1   lg:mt-12 lg:h-12 lg:w-9/12 md:justify-between  ">
            <div className="flex justify-start">
              <SearchIcon className="p-0.5 ml-1 mr-2  text-zinc-600 lg:p-0 " />
              <input
                className=" text-sm   outline-none lg:text-lg "
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
            <button className="bg-sky-400 rounded-full p-1 px-2  -ml-12  lg:p-2 lg:px-3   ">
              <ArrowForwardIcon sx={{ color: "white" }} fontSize="small" />
            </button>
          </div>
        </div>
        <div className="flex space-x-1 text-[10px] mx-2 justify-center items-center mt-5 lg:text-xl  lg:space-x-8    ">
          <button className="bg-zinc-200  rounded-full py-1 px-2 md:py-2 md:px-4">
         <Link to={"/womenswear"}>   Women's clothes</Link>
          </button>
          <button className="bg-zinc-200  rounded-full  py-1 px-2 md:py-2 md:px-4 hover:font-bold ">
            <Link to={"/shoes"}>Shoes</Link>
          </button>
          <button className="bg-zinc-200 rounded-full  py-1 px-2 md:py-2 md:px-4">
            <Link to={"/menswear"}>Men's clothes</Link>
          </button>
          <button className="bg-zinc-200  rounded-full  py-1 px-2 md:py-2 md:px-4">
           <Link to={"/kidswear"}> Kids clothes</Link>
          </button>
          <button className="bg-zinc-200  rounded-full  py-1 px-2 md:py-2 md:px-4">
            Hobbies
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
