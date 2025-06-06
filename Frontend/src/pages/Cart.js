import React, { useContext } from "react";

import { AdminContext } from "../Context/AdminContext/AdminContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CardContext } from "../Context/CardContext/CardContext";

export default function Cart() {
  const Navigate = useNavigate();

  const { user } = useContext(AdminContext);

  const {
    cartItems,
    haddleRemoveProduct,
    handleAddProduct,
    removeUniqueProduct,
    CarttotalPrice,
    TotalShippingChrges,
    loading,
  } = useContext(CardContext);

  console.log("cartItemscartItemscartItems0", cartItems);

  const CheckOut = () => {
    if (user) {
      toast.success("checkout success");
      Navigate("/checkoutpage");
    } else {
      toast.error("Login First");
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin h-10 w-10 border-4 border-black border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <section className="h-80% bg-gray-100 py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-gray-900">Your Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-5xl md:mt-12">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="">
                  <div className="text-center flex justify-center   text-xl pt-10  ">
                    {cartItems.length === 0 && (
                      <div>
                        {" "}
                        <h1 className="text-4xl font-bold">
                          NO Items are Added😜
                        </h1>
                        <img
                          src="https://i.postimg.cc/15bjqxCP/Make-it-rain-amico.png"
                          className=" h-96 w-full "
                          alt="No-Items In Cart"
                        />
                      </div>
                    )}
                  </div>
                  <ul>
                    {cartItems.map((item, i) => (
                      <>
                        <li
                          key={i}
                          className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                        >
                          <div className="shrink-0">
                            <img
                              className="h-36 w-32 max-w-full rounded-lg object-cover"
                              src={item?.main_img}
                              alt="ProductImg"
                            />
                          </div>

                          <div className="relative flex flex-1 flex-col justify-between">
                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                              <div className="pr-8 sm:pr-5">
                                <p className="text-base font-semibold text-gray-900">
                                  {item?.name}
                                </p>
                                <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                  {item.size}
                                </p>
                              </div>

                              <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                  ₹{item?.price}
                                </p>

                                <div className="sm:order-1">
                                  <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                    <button
                                      className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                      onClick={() => haddleRemoveProduct(item)}
                                    >
                                      -
                                    </button>
                                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                      {item.quantity}
                                    </div>
                                    <button
                                      className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                      onClick={() => handleAddProduct(item)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto"
                              onClick={() => removeUniqueProduct(item._id,item.size)}
                            >
                              <button
                                type="button"
                                className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                              >
                                <svg
                                  className="block h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    className=""
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </li>
                        <div className="border w-full "></div>
                      </>
                    ))}
                  </ul>
                </div>

                <div className={cartItems.length === 0 ? "hidden" : "block"}>
                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">Subtotal</p>
                      <p className="text-lg font-semibold text-gray-900">
                        ₹{CarttotalPrice}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">Shipping</p>
                      <p className="text-lg font-semibold text-gray-900">
                        ₹{TotalShippingChrges}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      <span className="text-xs font-normal text-gray-400">
                        INR
                      </span>{" "}
                      {CarttotalPrice + TotalShippingChrges}
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      onClick={() => CheckOut()}
                      className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                    >
                      Checkout
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
      
      }
     
    </div>
  );
}
