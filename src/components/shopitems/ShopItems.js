import React from "react";
// import OrengeDress from "./img/dress.jpg";
// import menshoes from "./img/men shoes.jpg";
// import sneakers from "./img/sneakers.jpg";
// import whitebag from "./img/whitebag.webp";
// ----------------------------------
import { FaHeart,FaArrowLeft,FaArrowRight } from "react-icons/fa";
import AllKidsWear from "../../Api/kidswearApi";
import allwomenswear from "../../Api/WomensApi";
import Allshoes from "../../Api/ShoesApi";
import Allmenswear from "../../Api/MenswearApi";
// ------------------------

function ShopItems() {

  const NewListProduct= [...AllKidsWear.ApiData,...Allmenswear.ApiData ,...Allshoes.ApiData, ...allwomenswear.ApiData]
  // console.log(NewListProduct);

    var indexno1 =  Math.floor(Math.random() * NewListProduct.length - 1)
    var indexno2 =  Math.floor(Math.random() * NewListProduct.length - 1)
    var indexno3 =  Math.floor(Math.random() * NewListProduct.length - 1)
    var indexno4 =  Math.floor(Math.random() * NewListProduct.length - 1)
   
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
              src={NewListProduct[indexno1].main_img}
              alt="items"
              className="w-full transition-all  duration-300  hover:scale-110 "
            />
          </div>

          <div className=" mt-1 flex justify-between items-center ">
            <h4 className="text-zinc-500 mt-0.5 text-sm  lg:text-xl  ">{NewListProduct[indexno1].name}</h4>
            <div className="flex  ">
              <h4 className="text-zinc-500 text-sm  lg:text-xl ">208</h4>
              <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl  lg:text-2xl" />
            </div>
          </div>
          <h2 className="font-bold text-lg ">{NewListProduct[indexno1].price}</h2>
        </div>
         {/* ---card1--- */}
         <div className="p-2 ">
          <div className="overflow-hidden h-4/6 rounded-2xl ">
            <img
              src={NewListProduct[indexno2 ].main_img}
              alt="items"
              className="w-full transition-all  duration-300  hover:scale-110 "
            />
          </div>

          <div className=" mt-1 flex justify-between items-center ">
            <h4 className="text-zinc-500 mt-0.5 text-sm  lg:text-xl  ">{NewListProduct[indexno2].name}</h4>
            <div className="flex  ">
              <h4 className="text-zinc-500 text-sm  lg:text-xl ">208</h4>
              <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl  lg:text-2xl" />
            </div>
          </div>
          <h2 className="font-bold text-lg ">{NewListProduct[indexno2].price}</h2>
        </div>
         {/* ---card1--- */}
         <div className="p-2 ">
          <div className="overflow-hidden h-4/6 rounded-2xl ">
            <img
              src={NewListProduct[indexno3 ].main_img}
              alt="items"
              className="w-full transition-all  duration-300  hover:scale-110 "
            />
          </div>

          <div className=" mt-1 flex justify-between items-center ">
            <h4 className="text-zinc-500 mt-0.5 text-sm  lg:text-xl  ">{NewListProduct[indexno3].name}</h4>
            <div className="flex  ">
              <h4 className="text-zinc-500 text-sm  lg:text-xl ">208</h4>
              <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl  lg:text-2xl" />
            </div>
          </div>
          <h2 className="font-bold text-lg ">{NewListProduct[indexno3].price}</h2>
        </div>
         {/* ---card1--- */}
         <div className="p-2 ">
          <div className="overflow-hidden h-4/6 rounded-2xl ">
            <img
              src={NewListProduct[indexno4 ].main_img}
              alt="items"
              className="w-full transition-all  duration-300  hover:scale-110 "
            />
          </div>

          <div className=" mt-1 flex justify-between items-center ">
            <h4 className="text-zinc-500 mt-0.5 text-sm  lg:text-xl  ">{NewListProduct[indexno4].name}</h4>
            <div className="flex  ">
              <h4 className="text-zinc-500 text-sm  lg:text-xl ">208</h4>
              <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl  lg:text-2xl" />
            </div>
          </div>
          <h2 className="font-bold text-lg ">{NewListProduct[indexno4].price}</h2>
        </div>

        




       
         


      </div>
    </div>
  );
}

export default ShopItems;
