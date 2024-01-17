import React from "react";
// --------------MUI Icons ---------------------
import { blue } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
// ------------------

function Footer() {
  return (
    <div>
      <footer className="bg-zinc-200  text-zinc-400 lg:flex lg:justify-between px-5 md:px-10  pt-5 py-4 ">
        {/*  */}
        <div>
          <h1 className="text-3xl font-bold text-black md:text-4xl  lg:text-5xl ">
            SellerList
          </h1>
          <br />

          <p className="text-zinc-600 text-sm lg:text-base">
            Your number one site for selling and buying <br /> Cloths, Cosmetics
            and home goods.
          </p>
          <br />

          <h4 className="text-xl text-black md:text-3xl">
            Join our newsletter
          </h4>

          <div className="bg-white rounded-full flex justify-between items-center overflow-hidden p-1 mt-5">
            <input
              className="px-2  outline-none text-black "
              type="email"
              placeholder="Enter your e-mail"
            />
            <button className="bg-sky-400 rounded-full p-2   w-10 -ml-20  lg:ml-20  ">
              <ArrowForwardIcon sx={{ color: "white" }} />
            </button>
          </div>
          <br />
        </div>
        <div className=" md:border border-zinc-300 rounded-full md:mb-5 md:mt-5"></div>

        {/*  */}
        <div>
          <div className="lg:-ml-20 md:mx-5 flex justify-between items-center mt-5 ">
            <div>
              <h4 className="text-lg text-black font-bold  mb-2  md:text-xl">
                Buy
              </h4>
              <ul>
                <li className="cursor-pointer hover:text-zinc-600">
                  Create a profile
                </li>
                <li className="cursor-pointer hover:text-zinc-600">
                  Set up payment type
                </li>
                <li className="cursor-pointer hover:text-zinc-600">Inbox</li>
              </ul>
            </div>

            <div className="md:mr-9">
              <h4 className="text-lg text-black font-bold    mb-2 md:text-xl  ">
                Sell
              </h4>
              <ul>
                <li className="cursor-pointer hover:text-zinc-600  ">
                  Create a profile
                </li>
                <li className="cursor-pointer hover:text-zinc-600  ">
                  List your items
                </li>
                <li className="cursor-pointer hover:text-zinc-600 ">
                  Boost your items
                </li>
              </ul>
            </div>
          </div>

          {/*  */}

          <div className="flex justify-between md:mx-5  items-center mt-7 lg:space-x-12  ">
            <div className="lg:-ml-24">
              <h4 className="text-lg text-black font-bold  mb-2  md:text-xl lg:mb-3   ">
                Help
              </h4>
              <ul>
                <li className="cursor-pointer hover:text-zinc-600">
                  <Link to={"./aboutus"}>About Us</Link>
                </li>
                <li className="cursor-pointer hover:text-zinc-600">
                  <Link to={"/customerService"}>

                  Customer service
                  </Link>
                </li>
                <li className="cursor-pointer hover:text-zinc-600">
                  <Link to={"./careers"}>Careers</Link>
                  
                </li>
                <li className="cursor-pointer hover:text-zinc-600">
                <Link to={"./contactus"}>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="pl-10   ">
              <ul>
                <li className="cursor-pointer hover:text-zinc-600">
                  <Link to={"/TermsAndCondition"}>
                  Terms and Condition

                  </Link>
                </li>
                <li className="cursor-pointer hover:text-zinc-600">
                  {" "}
                  <Link to={"/Privacy-policy"}>Privacy policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="mt-5 flex justify-end lg:items-end  mb-2">
          <div>
            <h4 className="text-xl text-black font-bold ml-4 ">Follow Me  </h4>
            <h6 className="text-sm ml-4">Tushar Sawant</h6>
            <div className="flex space-x-2 mt-2 mb-2 cursor-pointer">

            <Link to={'https://www.instagram.com/tushar_sawant_25/'}>

              <InstagramIcon sx={{ color: "red" }} fontSize="large" />
            </Link>
              <FacebookIcon sx={{ color: blue[600] }} fontSize="large" />
              <TwitterIcon sx={{ color: blue[400] }} fontSize="large" />
            </div>
          </div>
        </div>
      </footer>
      <h4 className="flex justify-end bg-zinc-300 pr-10">
        © 2023 Sellerlist | Design By Tushar Sawant
      </h4>
    </div>
  );
}

export default Footer;
