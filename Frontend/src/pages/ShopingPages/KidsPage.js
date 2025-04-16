import React, { useEffect, useState } from "react";
import ProductShowComponent from "../../components/Re-use-Component/ProductShowComponent";
import FilterNavbar from "../../components/Re-use-Component/CategoryFilterNavbar";
import axios from "axios";
import toast from "react-hot-toast";
import { CommonApiUrl } from "../../HttpCommon";
import Spinner from "../../components/Spinner/Spinner";

export default function KidsPage() {
  const [ShopitemData, setShopitemData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filterList, setFilterList] = useState([]);

  const FilterItem = (category) => {
    fetchProducts(category);
    setSelectedItem(category);
  };

  const fetchProducts = async (FilterItem = "All") => {
    try {
      const response = await axios.get(
        `${CommonApiUrl}/products/KidsWear/${FilterItem}`
      ); // Make the GET request
      setShopitemData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      toast.error("Error fetching products");
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${CommonApiUrl}/products/categories/KidsWear`
      );
      const categories = response.data;
      // Optional: Filter categories belonging only to KidsWear if needed
      setFilterList(["All", ...categories]);
    } catch (err) {
      console.error("Error fetching categories:", err);
      toast.error("Error fetching categories");
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="w-screen ">
      {/* <button className="bg-cyan-600 rounded-lg text-white p-2"> <Link to={"/"}> Home</Link></button> */}
      <h1 className=" text-4xl lg:text-5xl  font-bold text-center pt-5 text-black drop-shadow-[2px_2px_var(--tw-shadow-color)] lg:drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-zinc-300 ">
        KidsPage
      </h1>
      <FilterNavbar
        FilterItem={FilterItem}
        selectedItem={selectedItem}
        categoryList={filterList}
      />
      {isLoading ? <Spinner /> : <ProductShowComponent items={ShopitemData} />}
    </div>
  );
}
