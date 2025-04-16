import React, { useContext, useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { HiCash } from "react-icons/hi";
import { GiReturnArrow } from "react-icons/gi";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { CardContext } from "../../Context/CardContext/CardContext";
import useLocationByIP from "../useLocationByIP";
import axios from "axios";
import { CommonApiUrl } from "../../HttpCommon";

export default function CheckItems() {
  const [uniqueProduct, setUniqueProduct] = useState(null);
  const { handleAddProduct } = useContext(CardContext);
  const { id } = useParams();
  const userLocation = useLocationByIP();

  const Sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${CommonApiUrl}/products/product/${id}`);
        const productWithDefaultSize = { ...res.data, size: Sizes[0] };
        console.log("productWithDefaultSize",productWithDefaultSize);
        
        setUniqueProduct(productWithDefaultSize);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const SizeAdd = (size) => {
    setUniqueProduct({ ...uniqueProduct, size: size });
  };

  if (!uniqueProduct) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="px-5 mt-5 w-screen pb-10">
      <div className="lg:flex">
        {/* Images */}
        <div className="h-full lg:h-[23rem] w-full lg:ml-10 lg:-mr-20">
          <div className="flex py-2 h-full">
            {[uniqueProduct.main_img, uniqueProduct.item_img_1].map((img, idx) => (
              <div key={idx} className="border-zinc-400 border-2 rounded-lg mx-1 overflow-hidden flex justify-center">
                <img src={img} alt={`product-${idx}`} className="w-[18rem]" />
              </div>
            ))}
          </div>
          <div className="flex h-full lg:h-[250px]">
            {[uniqueProduct.item_img_2, uniqueProduct.item_img_3, uniqueProduct.item_img_4].map((img, idx) => (
              <div key={idx} className="border-zinc-400 border-2 rounded-lg mx-1 overflow-hidden flex justify-center">
                <img src={img} alt={`product-sub-${idx}`} className="w-[12rem]" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full mt-5 lg:ml-10 text-zinc-600">
          <h2 className="text-xl lg:text-3xl font-semibold text-zinc-800">{uniqueProduct.name}</h2>

          <div className="flex gap-3">
            <h2 className="font-bold text-2xl mt-2 text-black">₹{uniqueProduct.price}</h2>
            <div className="bg-blue-100 border-2 px-1 w-2/6 lg:w-1/6 text-center rounded-lg mt-2">
              <h2 className="text-lg">{uniqueProduct.price_off}% Off</h2>
            </div>
          </div>

          <h2 className="text-lg mt-2">
            MRP: <span className="line-through">{uniqueProduct.old_price || null}</span>
          </h2>

          <h2 className="text-red-600 mt-2">{uniqueProduct.Stock}</h2>

          <div className="flex items-center">
            <Rating name="read-only" sx={{ fontSize: "0.8rem" }} value={uniqueProduct.rating} readOnly />
            <span className="rounded bg-yellow-200 px-2 py-0.5 text-[0.7rem] font-semibold">{uniqueProduct.rating}</span>
          </div>
          <h4>Inclusive of all taxes</h4>

          <hr className="mt-2" />

          {/* Size Selector */}
          <div>
            <h2 className="text-black font-bold mb-2 mt-2 lg:text-xl">Select Size</h2>
            <div className="space-x-2">
              {Sizes.map((item) => (
                <button
                  key={item}
                  className={item === uniqueProduct.size ? "border rounded-lg h-12 w-12 bg-black text-white" : "border rounded-lg h-12 w-12"}
                  onClick={() => SizeAdd(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <hr className="mt-2" />

          {/* Offers */}
          <div>
            <h2 className="text-black font-bold mb-2 mt-2 lg:text-xl">Available Offers</h2>

            <Offer
              img="https://www.gurpreetsaluja.com/wp-content/uploads/2020/09/HDFC-LOGO.png"
              text="Up to 5% NeuCoins on HDFC Bank Credit Cards | No Promo Code Required"
            />
            <Offer
              img="https://static.shoplightspeed.com/shops/606983/files/001201947/10percentoff.png"
              text="10% Instant Discount on OneCard Credit Card only"
            />
            <Offer
              img="https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png"
              text="Get 10% discount on Axis Bank Credit Cards."
            />
          </div>

          <hr className="mt-2" />

          {/* Shipping Info */}
          <div className="mt-2">
            <h2 className="text-black font-bold lg:text-xl">Ship To</h2>

            <label htmlFor="Pincode" className="bg-white border rounded-lg pl-5 lg:w-2/3 flex justify-between mt-2 hover:border-blue-500 lg:mt-4">
              <input
                type="text"
                placeholder="Pincode"
                className="outline-none w-1/2 text-black"
                id="Pincode"
                value={userLocation?.pincode || ""}
                readOnly
              />
              <h4 className="text-sm text-red-500 p-2 cursor-pointer">Change Pincode</h4>
            </label>

            <ShippingInfo icon={<TbTruckDelivery className="text-black text-2xl" />} text="Delivery by" />
            <ShippingInfo icon={<HiCash className="text-black text-2xl" />} text="Cash on Delivery - " extra="Available" />
            <ShippingInfo icon={<GiReturnArrow className="text-black text-2xl" />} text="30 Days Easy Return" />
          </div>

          <hr className="mt-2" />

          {/* Add to Cart */}
          <div className="flex justify-end lg:mr-14 mt-2">
            <button
              className="flex gap-4 items-center justify-center rounded-md bg-cyan-500 px-5 py-2.5 text-center text-xl font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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

// Subcomponents for cleaner JSX
const Offer = ({ img, text }) => (
  <div className="flex space-x-1 mt-2">
    <img src={img} className="w-7 h-7" alt="offer" />
    <p className="text-xs text-black pl-2 lg:text-base">{text}</p>
  </div>
);

const ShippingInfo = ({ icon, text, extra }) => (
  <div className="flex space-x-2 m-2 lg:mt-4 items-center">
    {icon}
    <h4>{text}</h4>
    {extra && <h4 className="font-bold">{extra}</h4>}
  </div>
);
