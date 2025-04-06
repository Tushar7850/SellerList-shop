import React from "react";
import ShopItemsHomePage from "./shopitems/ShopItemsHomePage";
import Hero from "./hero";

// Icons
import { TbTruckDelivery } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Images
import descImg2 from "../../Assets/dis-img2.jpg";
import descImg3 from "../../Assets/dis-img3.jpg";
import descImg4 from "../../Assets/dis-img4.jpg";
import descImg5 from "../../Assets/dis-img5.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Feature component - optimized with Tailwind
function Feature({ icon, title, description }) {
  return (
    <div className="w-full p-2 md:p-4 hover:shadow-md transition-all duration-300">
      <div className="text-center">
        <div className="border rounded-full h-8 w-8 md:h-16 md:w-16 flex justify-center items-center mx-auto mb-4">
          {icon}
        </div>
        <h4 className="font-bold text-sm md:text-xl mb-2">{title}</h4>
        <p className="text-xs md:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const images = [
    { url: descImg2, alt: "Product showcase 1" },
    { url: descImg3, alt: "Product showcase 2" },
    { url: descImg4, alt: "Product showcase 3" },
    { url: descImg5, alt: "Product showcase 4" },
  ];

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-70 border border-gray-200 text-gray-600 hover:bg-opacity-90 hover:text-gray-800 transition-all duration-300 focus:outline-none"
      aria-label="Next slide"
    >
      <FaChevronRight className="text-lg" />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-70 border border-gray-200 text-gray-600 hover:bg-opacity-90 hover:text-gray-800 transition-all duration-300 focus:outline-none"
      aria-label="Previous slide"
    >
      <FaChevronLeft className="text-lg" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // Add appendDots to customize dots position
    appendDots: (dots) => (
      <div>
        <ul className="mt-4"> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots",
  };

  return (
    <div className="bg-white">
      <Hero />

      <div className=" mx-auto px-4 my-12 relative">
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-10">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-96 object-fill rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => navigate("/womenswear")}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Features section */}
      <section className="grid grid-cols-2 md:grid-cols-4 md:px-5 my-5 md:my-10 cursor-pointer sm:gap-4 max-w-screen-xl mx-auto">
        <Feature
          icon={<TbTruckDelivery className="text-lg md:text-4xl" />}
          title="Free Shipping"
          description="Enjoy free shipping on all your orders."
        />
        <Feature
          icon={<FaClock className="text-lg md:text-4xl" />}
          title="24/7 Support"
          description="Reach out to us anytime, We are at your service."
        />
        <Feature
          icon={<MdLocalOffer className="text-lg md:text-4xl" />}
          title="Offer Card"
          description="Enjoy discounts using our offer cards and coupon codes."
        />
        <Feature
          icon={<FaLock className="text-lg md:text-4xl" />}
          title="Secure Payment"
          description="We provide secure payment gateways for your transactions."
        />
      </section>

      <ShopItemsHomePage />
    </div>
  );
}
