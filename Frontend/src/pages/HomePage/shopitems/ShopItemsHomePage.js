import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CommonApiUrl } from "../../../HttpCommon";

function ShopItemsHomePage() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const res = await axios.get(
          `${CommonApiUrl}/products/random?count=4`
        );
        setRandomProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch random products", err);
      }
    };

    fetchRandomProducts();
  }, []);

  return (
    <div className="px-4 mt-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Listed Recently</h2>
        <div className="flex space-x-2">
          <FaArrowLeft className="md:text-lg lg:text-2xl cursor-pointer" />
          <FaArrowRight className="md:text-lg lg:text-2xl cursor-pointer" />
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 md:grid-cols-4">
        {randomProducts.map((item, i) => (
          <div key={i} className="p-2">
            <div className="overflow-hidden h-4/6 rounded-2xl border">
              <img
                src={item.main_img}
                alt="product"
                className="w-full transition-all duration-300 hover:scale-110"
              />
            </div>

            <div className="mt-1 flex justify-between items-center">
              <h4 className="text-zinc-500 mt-0.5 text-sm lg:text-xl">
                {item.name}
              </h4>
              <div className="flex">
                <h4 className="text-zinc-500 text-sm lg:text-xl">208</h4>
                <FaHeart className="text-zinc-300 hover:text-red-600 md:text-xl lg:text-2xl" />
              </div>
            </div>
            <h2 className="font-bold text-lg">{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopItemsHomePage;
