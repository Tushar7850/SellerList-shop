import React, { useState, useEffect } from "react";
import hero_bg from "../../Assets/hero_bg.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CommonApiUrl } from "../../HttpCommon";

function Hero() {
  const [productNames, setProductNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState({ name: "", id: null });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductNames = async () => {
      try {
        const res = await axios.get(`${CommonApiUrl}/products/names`);
        setProductNames(res.data);
      } catch (err) {
        console.error("Failed to fetch product names:", err);
      }
    };

    fetchProductNames();
  }, []);

  const filteredProducts = productNames.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    if (selected && selected.id) {
      navigate(`productDetails/${selected.id}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSelected({ name: "", id: null });
  };

  const handleItemSelect = (name, id) => {
    setSelected({ name, id });
    setSearchTerm(name);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="p-2">
      <div
        className="rounded-xl h-60 w-full bg-cover bg-center text-center pt-10 mb-2 lg:h-[30rem]"
        style={{ backgroundImage: `url(${hero_bg})` }}
      >
        <h1
          className="text-white font-bold text-xl mb-5 mx-7 lg:text-6xl lg:mt-10"
          style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
        >
          Change your wardrobe. Find exciting goods.
        </h1>

        <div className="w-2/3 mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <SearchIcon className="pl-1 z-20 text-gray-800" />
            </div>

            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Search for products"
              className="w-full h-14 pl-10  pr-20 rounded-full border-2 border-white/20 bg-white/95 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            />

            {searchTerm && !selected.id && (
              <ul className="absolute w-full bg-white shadow-lg max-h-60 overflow-auto mt-1 rounded-lg z-10">
                {filteredProducts.map((product) => (
                  <li
                    key={product._id}
                    className="cursor-pointer hover:bg-sky-200 px-6 py-2"
                    onClick={() => handleItemSelect(product.name, product._id)}
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 bg-sky-400 hover:bg-sky-500 text-white h-10 px-6 rounded-full transition-colors duration-200"
            >
              Search
            </button>
          </div>
        </div>

        {/* Optional Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
          {[
            { name: "Women's clothes", path: "/womenswear" },
            { name: "Shoes", path: "/shoes" },
            { name: "Men's clothes", path: "/menswear" },
            { name: "Kids clothes", path: "/kidswear" },
            // { name: "Hobbies", path: "/" },
          ].map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="bg-white/90 hover:bg-white backdrop-blur-sm px-6 py-3 rounded-full text-gray-800 font-medium text-sm md:text-base transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
