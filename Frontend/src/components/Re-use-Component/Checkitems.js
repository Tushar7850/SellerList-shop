import React, { useContext, useState } from "react";

import { FaShopify } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { HiCash } from "react-icons/hi";
import { GiReturnArrow } from "react-icons/gi";
import Rating from "@mui/material/Rating";
import { useLocation } from "react-router-dom";
import { CardContext } from "../../Context/CardContext/CardContext";
import useLocationByIP from "../useLocationByIP";

export default function CheckItems() {
  //
  const location = useLocation();
  const selectedProduct = location.state;

  const [uniqueProduct, setUniqueProduct] = useState(selectedProduct);
  const { handleAddProduct } = useContext(CardContext);

  const Sizes = ["S", "M", "L", "XL", "XXL"];

  const SizeAdd = (size) => {
    setUniqueProduct({ ...uniqueProduct, size: size });
  };

  const userLocation = useLocationByIP();

  console.log("userLocation", userLocation);

  return (
    <div className="px-5 mt-5 w-screen pb-10">
      <div className="lg:flex ">
        {/* ---------------IMAGES----------------- */}
        <div className=" h-full lg:h-[23rem] w-full  lg:ml-10 lg:-mr-20 ">
          {/*IMAGE 1 & 2   */}

          <div className="flex py-2  h-full  ">
            {/* IMAGE__1  */}
            <div className="border-zinc-400 border-2 rounded-lg mx-1 overflow-hidden flex justify-center">
              <img
                src={uniqueProduct.main_img}
                alt="image"
                className="w-[18rem]"
              />
            </div>
            {/* IMAGE__2  */}
            <div className="border-zinc-400 border-2 rounded-lg mx-1 overflow-hidden flex justify-center">
              <img
                src={uniqueProduct.item_img_1}
                alt="image"
                className="w-[18rem]"
              />
            </div>
          </div>

          <div className="flex  h-full lg:h-[250px]">
            {/* IMAGE__3  */}
            <div className="border-zinc-400 border-2 rounded-lg mx-1 overflow-hidden flex justify-center">
              <img
                src={uniqueProduct.item_img_2}
                alt="image"
                className="w-[12rem]"
              />
            </div>
            {/* IMAGE__4  */}
            <div className="border-zinc-400 border-2 rounded-lg mx-1 overflow-hidden flex justify-center">
              <img
                src={uniqueProduct.item_img_3}
                alt="image"
                className="w-[12rem]"
              />
            </div>
            {/* IMAGE__5  */}
            <div className="border-zinc-400 border-2 rounded-lg mx-1 overflow-hidden flex justify-center">
              <img
                src={uniqueProduct.item_img_4}
                alt="image"
                className="w-[12rem]"
              />
            </div>
          </div>
        </div>
        {/* --------------------item info-------------- */}
        <div className="w-full mt-5 lg:ml-10  text-zinc-600 ">
          {/* -----Product Details----- */}
          <div>
            <h2 className="text-xl lg:text-3xl font-semibold text-zinc-800 ">
              {uniqueProduct.name}
            </h2>
            {/*  */}
            <div className="flex gap-3">
              <h2 className="font-bold text-2xl mt-2 text-black">
                ₹{uniqueProduct.price}
              </h2>
              <div className="bg-blue-100 border-2 px-1 w-2/6  lg:w-1/6 text-center rounded-lg mt-2 ">
                <h2 className="text-lg "> {uniqueProduct.price_off}</h2>
              </div>
            </div>
            {/*  */}
            <h2 className="text-lg mt-2">
              {" "}
              MRP:
              <span className="line-through ">
                {uniqueProduct.old_price ? uniqueProduct.old_price : null}
              </span>{" "}
            </h2>

            <h2 className="text-red-600 mt-2 ">{uniqueProduct.Stock}</h2>
            <div class="flex items-center">
              <Rating
                name="read-only"
                sx={{ fontSize: "0.8rem" }}
                value={uniqueProduct.rating}
                readOnly
              />
              <span class="  rounded bg-yellow-200 px-2 py-0.5 text-[0.7rem] font-semibold">
                {uniqueProduct.rating}
              </span>
            </div>
            <h4>Inclusive of all taxes</h4>
          </div>

          <hr className="mt-2 " />
          {/* -----Select Size----- */}

          <div>
            <h2 className="text-black font-bold mb-2 mt-2  lg:text-xl">
              Select Size
            </h2>

            <div className="space-x-2 ">
              {Sizes.map((item) => (
                <button
                  className={
                    item === uniqueProduct.size
                      ? "border rounded-lg h-12 w-12 bg-black text-white"
                      : "border rounded-lg h-12 w-12"
                  }
                  onClick={() => SizeAdd(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <hr className="mt-2 " />

          {/*------ Avaliable Offer---- */}

          <div>
            <h2 className="text-black font-bold mb-2 mt-2 lg:text-xl">
              Available Offers
            </h2>
            <div className="flex space-x-1">
              <img
                src="https://www.gurpreetsaluja.com/wp-content/uploads/2020/09/HDFC-LOGO.png"
                className="w-7 h-7"
                alt="image"
              />
              <p className="text-xs text-black pl-2 lg:text-base">
                Up to 5% NeuCoins on HDFC Bank Credit Cards | No Promo Code
                Required
              </p>
            </div>
            <div className="flex space-x-1 mt-2">
              <img
                src="https://static.shoplightspeed.com/shops/606983/files/001201947/10percentoff.png"
                className="w-7 h-7"
                alt="image"
              />
              <p className="text-xs text-black pl-2 lg:text-base">
                10% Instant Discount on OneCard Credit Card only
              </p>
            </div>
            <div className="flex space-x-1 mt-2">
              <img
                src="https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png"
                className="w-7 h-7 p-0.5"
                alt="image"
              />
              <p className="text-xs text-black pl-2 lg:text-base">
                Get 10% discount on Axis Bank Credit Cards.
              </p>
            </div>
          </div>
          <hr className="mt-2 " />
          {/* --- Ship To ---  */}
          <div className="mt-2">
            <h2 className="text-black font-bold  lg:text-xl">Ship To</h2>

            <div
              for="Pincode"
              className="bg-white border rounded-lg pl-5  lg:w-2/3 flex justify-between mt-2 hover:border-blue-500  lg:mt-4  "
            >
              <input
                type="text"
                placeholder="Pincode"
                className="outline-none w-1/2 text-black"
                id="Pincode"
                value={
                  userLocation && userLocation.pincode
                    ? userLocation.pincode
                    : ""
                }
              />
              <h4 className="text-sm text-red-500 p-2 cursor-pointer ">
                Change Pincode
              </h4>
            </div>
            <div className="flex space-x-2 m-2 lg:mt-4">
              <TbTruckDelivery className="text-black text-2xl " />
              <h4>Delivery by </h4>
            </div>
            <div className="flex space-x-2  m-2 lg:mt-4">
              <HiCash className="text-black text-2xl " />
              <h4>Cash on Delivery - </h4>
              <h4 className="font-bold">Available</h4>
            </div>
            <div className="flex space-x-2  m-2 lg:mt-4">
              <GiReturnArrow className="text-black text-2xl " />
              <h4>30 Days Easy Return</h4>
            </div>
          </div>
          {/*  */}
          <hr className="mt-2 " />
          {/*  */}
          <div className="flex justify-end lg:mr-14 mt-2">
            <button
              className="flex  gap-4 items-center  justify-center rounded-md bg-cyan-500 px-5 py-2.5 text-center text-xl font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() => handleAddProduct(uniqueProduct)}
            >
              Add to cart <FaShopify />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
