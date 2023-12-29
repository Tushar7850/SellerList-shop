import React from "react";
import OrengeDress from "./img/dress.jpg";
import menshoes from "./img/men shoes.jpg";
import sneakers from "./img/sneakers.jpg";
import whitebag from "./img/whitebag.webp";
// ----------------------------------
import { FaHeart,FaArrowLeft,FaArrowRight } from "react-icons/fa";
// ------------------------

function ShopItems() {
  return (
    <div className="px-4 mt-2">

      <div className="flex justify-between items-center">
      <h2 className="text-2xl ">Listed Recently</h2>
     <div className="flex space-x-2">
     <FaArrowLeft className="md:text-lg lg:text-2xl cursor-pointer"/>
      <FaArrowRight className="md:text-lg lg:text-2xl cursor-pointer"/>
     </div>
      </div>

     
      {/* --------all cards----------- */}
      <div className=" mt-2  grid  grid-cols-2  md:grid-cols-4  ">

         {/* ---card1--- */}
         <div className="p-2 ">
          <div className="overflow-hidden h-4/6 rounded-2xl ">
            <img
              src={OrengeDress}
              alt="items"
              className="w-full transition-all  duration-300  hover:scale-110 "
            />
          </div>

          <div className=" mt-1 flex justify-between items-center ">
            <h4 className="text-zinc-500 mt-0.5 text-sm  lg:text-xl  ">Orenge Dress</h4>
            <div className="flex  ">
              <h4 className="text-zinc-500 text-sm  lg:text-xl ">208</h4>
              <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl  lg:text-2xl" />
            </div>
          </div>
          <h2 className="font-bold text-lg ">$19</h2>
        </div>

         {/* ---card2--- */}
         <div className="p-2 ">
          <div className="overflow-hidden h-4/6 rounded-2xl ">
            <img
              src={menshoes}
              alt="items"
              className="w-full transition-all  duration-300  hover:scale-110   "
            />
          </div>

          <div className=" mt-1 flex justify-between items-center ">
            <h4 className="text-zinc-500 mt-0.5 text-sm  lg:text-xl  ">Designer Shoes</h4>
            <div className="flex  ">
              <h4 className="text-zinc-500 text-sm  lg:text-xl ">156</h4>
              <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl  lg:text-2xl" />
            </div>
          </div>
          <h2 className="font-bold text-lg ">$19</h2>
        </div>

         {/* ---card3--- */}
         <div className="p-2 ">
          <div className="overflow-hidden h-4/6 rounded-2xl ">
            <img
              src={sneakers}
              alt="items"
              className="w-full transition-all  duration-300  hover:scale-110   "
            />
          </div>

          <div className=" mt-1 flex justify-between items-center ">
            <h4 className="text-zinc-500 mt-0.5 text-sm  lg:text-xl  ">Sneakers</h4>
            <div className="flex  ">
              <h4 className="text-zinc-500 text-sm  lg:text-xl ">122</h4>
              <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl  lg:text-2xl" />
            </div>
          </div>
          <h2 className="font-bold text-lg ">$19</h2>
        </div>

         {/* ---card4--- */}
         <div className="p-2 ">
          <div className="overflow-hidden h-4/6 rounded-2xl ">
            <img
              src={whitebag}
              alt="items"
              className="w-full transition-all  duration-300  hover:scale-110   "
            />
          </div>

          <div className=" mt-1 flex justify-between items-center ">
            <h4 className="text-zinc-500 mt-0.5 text-sm  lg:text-xl ">School Bag</h4>
            <div className="flex  ">
              <h4 className="text-zinc-500 text-sm  lg:text-xl ">56</h4>
              <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl  lg:text-2xl" />
            </div>
          </div>
          <h2 className="font-bold text-lg ">$19</h2>
        </div>




       
         


      </div>
    </div>
  );
}

export default ShopItems;
