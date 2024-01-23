import React, { useState } from "react";
// import AllmenswearApi from "../MenWear/MenswearApi";
import ProductShowComponent from "../components/Re-use-Component/ProductShowComponent";
import FilterNavbar from "../components/Re-use-Component/CategoryFilterNavbar";

 






export default function ShoesPage({ProductApi}) {
  

 


  const [ShopitemData, setShopitemData] = useState(ProductApi.ApiData);
    

  

  const UniqueList = [
    ...new Set(
      ProductApi.ApiData.map((CurElem) => {
        return CurElem.category;
      })
    ),
    "All",
  ];

  const FilterItem = (category) => {
    if (category === "All") {
      setShopitemData(ProductApi.ApiData)
      return
    } else {
      const updatedList = ProductApi.ApiData.filter((CurElem) => {
        return CurElem.category === category;
      })
      setShopitemData(updatedList);
    }
  };

  return (
    <>
    {/* <button className="bg-cyan-600 rounded-lg text-white p-2"> <Link to={"/"}> Home</Link></button> */}
      <h1 className=" text-4xl lg:text-5xl  font-bold text-center mt-5 text-black drop-shadow-[2px_2px_var(--tw-shadow-color)] lg:drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-zinc-300 ">{ProductApi.ApiCategory}</h1>
      <FilterNavbar FilterItem={FilterItem} categoryList={UniqueList} />

      <ProductShowComponent items={ShopitemData} />
    </>
  );
}
