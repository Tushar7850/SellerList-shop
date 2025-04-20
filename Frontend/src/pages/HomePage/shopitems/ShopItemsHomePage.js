import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CommonApiUrl } from "../../../HttpCommon";
import { useNavigate } from "react-router-dom";

function ShopItemsHomePage() {
  const [randomProducts, setRandomProducts] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const res = await axios.get(`${CommonApiUrl}/products/random?count=4`);
        setRandomProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch random products", err);
      }
    };

    fetchRandomProducts();
  }, []);

  return (
    <div className="px-4 mt-6 md:px-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Recently Listed
        </h2>
        <div className="flex gap-3 text-gray-600">
          <FaArrowLeft
            className="cursor-pointer hover:text-black transition"
            title="Previous"
          />
          <FaArrowRight
            className="cursor-pointer hover:text-black transition"
            title="Next"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {randomProducts.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={()=>{
            Navigate(`/productDetails/${item._id}`)
            }}
          >
            <div className="overflow-hidden rounded-t-2xl h-48 md:h-96">
              <img
                src={item.main_img}
                alt={item.name}
                className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-3 flex flex-col justify-between">
              <h4 className="text-sm md:text-base text-gray-600 truncate">
                {item.name}
              </h4>
              <div className="flex justify-between items-center mt-1">
                <span className="text-lg font-semibold text-gray-900">
                  ₹{item.price}
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-500">208</span>
                  <FaHeart className="text-zinc-300 hover:text-red-500 cursor-pointer transition" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopItemsHomePage;
