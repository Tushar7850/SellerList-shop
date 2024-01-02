
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

export default function ProductShowComponent(props) {


  
  return (
    <div>
      <div className="pb-5 w-full ">
        
        <div className=" mt-5 grid gap-1 md:px-5  md:mt-10 lg:gap-3  grid-cols-2  md:grid-cols-3  lg:grid-cols-5   ">
        {props.items.map((curElem) => (
        <div className="relative px-3 flex w-full mt-10 max-w-xs flex-col overflow-hidden rounded-xl border border-gray-100 bg-sky-3g00 shadow-md ">
          <div
            className="relative  mt-3 flex h-52 md:h-auto overflow-hidden rounded-xl border "
           
          >
            <img
              className="bg-cover w-full hover:scale-110 transition-all duration-300 "
              src={curElem.main_img}
              alt="product"
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-cyan-700 px-2 py-0.5 text-center text-sm font-semibold text-white">
              {curElem.price_off}
            </span>
          </div>
          <div className="mt-4  md:px-5 pb-5">
            <div>
              <h5 className=" md:text-lg lg:text-xl text-center tracking-tight h-20 text-slate-900">
                {curElem.name}
              </h5>
            </div>
            <div className="mt-3 mb-5 flex flex-col lg:flex-row items-center justify-between ">
              <p className="space-x-1">
                <span className=" text-lg md:text-xl font-bold text-slate-900">₹{curElem.price}</span>
                <span className="text-xs text-slate-900 line-through">{curElem.old_price}</span>
                <span className="text-xs text-red-500 ">{curElem.Stock}</span>
                
              </p>
               
              <div className="flex items-center">
              <Rating name="read-only" sx={{fontSize:"0.8rem"}} value={curElem.rating} readOnly />
          <span className="  rounded bg-yellow-200 px-2 py-0.5 text-[0.7rem] font-semibold">{curElem.rating}</span>
        </div>
            </div>
            <Link to={"/productdetails"} state={curElem}>
            <button
             
             className="flex items-center w-full justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      ))}
         
        </div>
      </div>
      
    </div>
  );
}
