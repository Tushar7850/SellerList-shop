import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

export default function ProductShowComponent({ items }) {
console.log("itemssssss",items)

  
  return (
    <div className="pb-5 w-full">
      <div className="mt-5 grid gap-4 md:px-5 md:mt-10 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative px-3 flex w-full mt-10 max-w-xs flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
          >
            <div className="relative mt-3 flex h-52 md:h-auto overflow-hidden rounded-xl border">
              <img
                className="w-full object-cover hover:scale-110 transition-transform duration-300"
                src={item.main_img}
                alt={item.name}
                loading="lazy"
              />
              {item.price_off && (
                <span className="absolute top-0 left-0 m-2 rounded-full font-semibold bg-black bg-opacity-30  shadow  px-2.5 py-1 text-sm  text-gray-100 ">
                 Off {item.price_off}%
                </span>
              )}
            </div>
            <div className="mt-4 px-4 pb-5 flex flex-col flex-grow">
              <h5 className="text-lg md:text-xl tracking-tight  font-semibold text-gray-700">
              {item.name.length > 30 ? item.name.slice(0, 30) + "..." : item.name}

              </h5>
              <div className="mt-3 mb-5 flex flex-col lg:flex-row items-center justify-between">
                <div className="">
                  <p className="text-lg md:text-xl font-bold text-gray-700">
                    ₹&nbsp;{item.price}
                  </p>
                  {item.old_price && (
                    <p className="text-sm text-[#cfcfcf] line-through">
                     ₹&nbsp;{item.old_price}
                    </p>
                  )}
                  {item.Stock && (
                    <p className="text-xs text-red-500">
                      {item.Stock}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Rating name="read-only" sx={{ fontSize: "1rem" }} value={item.rating} readOnly />
                  <span className="rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold">
                    {item.rating}
                  </span>
                </div>
              </div>
              <div className="mt-auto">
              <Link to={`/productDetails/${item._id}`}>
                  <button className="flex items-center w-full justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}