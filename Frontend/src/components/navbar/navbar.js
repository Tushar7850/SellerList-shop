import React, { useContext, useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
// ------------
import { FaShopify } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
//
import Hamburger from "hamburger-react";

//

import Admin from "../../pages/AdminPage/Admin";
import { CardContext } from "../../Context/CardContext/CardContext";
import { AdminContext } from "../../Context/AdminContext/AdminContext";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [slide, setslide] = useState(false);

  const { cartItems } = useContext(CardContext);

  const { user } = useContext(AdminContext);

  const { pathname } = useLocation();

  const CloseSilder = () => {
    setOpen(false);
    setslide(false);
  };

  return (
    <div className="w-full fixed  top-0 left-0  z-50 transition-all ">
      {/* MAIN NAV-BAR */}
      <nav className="flex justify-between shadow  w-screen bg-white relative lg:pr-5 ">
        <div className="m-2 flex  md:space-x-3">
          <h1 className=" text-xl md:text-3xl">SellerList</h1>
          <FaShopify className="text-2xl md:text-3xl" />
        </div>

        <div className="h-12  flex items-center  ">
          {!user ? (
            <div>
              <button className="border rounded-full px-4 py-1.5 text-base mr-2 hover:text-white hover:bg-black ">
                <Link to={"/sign-up"}>Signup</Link>
              </button>
              <button className=" border bg-black text-white rounded-full text-base  px-4 py-1.5 mr-2  hover:text-black hover:bg-white ">
                <Link to={"/login"}>Login</Link>
              </button>
            </div>
          ) : (
            <Admin user={user} />
          )}
        </div>
      </nav>

      {/* SECOND NAV-BAR  */}

      <div className={pathname === "/Account" ? "hidden" : "block"}>
        <nav className="shadow-md  h-12 text-sky-800 pr-1 bg-white w-screen flex justify-between items-center   lg:pr-5 ">
          <div className="">
            <button
              onClick={() => {
                setslide(!slide);
              }}
              className="md:hidden"
            >
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>

            <ul
              className={
                slide
                  ? "fixed w-full  h-screen  -mt-1 px-4 pr-8 p-4  duration-700 ease-in-out bg-zinc-500 backdrop-blur-sm  bg-opacity-80 text-white text-2xl "
                  : "hidden md:flex space-x-4 md:text-lg "
              }
            >
              <Link to={"/"}>
                {" "}
                <li
                  className={
                    slide
                      ? "p-3  border-b-2 border-cyan-200 "
                      : "cursor-pointer rounded-xl  p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border "
                  }
                  onClick={CloseSilder}
                >
                  {" "}
                  HomePage
                </li>
              </Link>
              <Link to={"/womenswear"}>
                {" "}
                <li
                  className={
                    slide
                      ? "p-3 border-b-2 border-cyan-200   "
                      : "cursor-pointer rounded-xl  p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border "
                  }
                  onClick={CloseSilder}
                >
                  Womenswear
                </li>
              </Link>
              <Link to={"/menswear"}>
                {" "}
                <li
                  className={
                    slide
                      ? "p-3 border-b-2  border-cyan-200  "
                      : "cursor-pointer rounded-xl  p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border "
                  }
                  onClick={CloseSilder}
                >
                  {" "}
                  Menswear{" "}
                </li>
              </Link>
              <Link to={"/kidswear"}>
                <li
                  className={
                    slide
                      ? "p-3 border-b-2 border-cyan-200   "
                      : "cursor-pointer rounded-xl  p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border "
                  }
                  onClick={CloseSilder}
                >
                  Kidswear
                </li>
              </Link>
              <Link to={"/shoes"}>
                {" "}
                <li
                  className={
                    slide
                      ? "p-3 border-b-2  border-cyan-200  "
                      : "cursor-pointer rounded-xl  p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border "
                  }
                  onClick={CloseSilder}
                >
                  Shoes
                </li>
              </Link>
            </ul>
          </div>

          <div className="mr-2 flex">
          

            <Link to={"/OrderHistory"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 "
            >
             My Orders
            </button>
            </Link>
            <Link to={"/cart"}>
              <div>
                <Badge
                  badgeContent={cartItems.length === 0 ? "" : cartItems.length}
                  color="primary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
