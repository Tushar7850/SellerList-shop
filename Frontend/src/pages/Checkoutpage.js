import React, { useContext } from "react";
//
import { LuAtSign } from "react-icons/lu";
import { FaAddressCard } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";
//
import { CardContext } from "../Context/CardContext/CardContext";
import { AdminContext } from "../Context/AdminContext/AdminContext";

function Checkoutpage() {
  const { cartItems, CarttotalPrice, TotalShippingChrges } =
    useContext(CardContext);
  const { user } = useContext(AdminContext);


  const buyNow = async () => {
    
  }
  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          {/* <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" 
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
          ></span>
          <span className="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">2</span>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" >3</span>
          <span className="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div> */}
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 h-64 overflow-y-scroll rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((product) => (
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={product?.main_img}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{product?.name}</span>
                  <span className="float-right text-gray-400">
                    {product?.size}
                  </span>
                  <p className="text-lg font-bold">₹{product?.price}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label for="email" className="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                value={user?.email}
                disabled="true"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <span className="h-4 w-4 text-gray-400">
                  <LuAtSign />
                </span>
              </div>
            </div>
            <label
              for="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <span className="h-4 w-4 text-gray-400">
                  <FaAddressCard />
                </span>
              </div>
            </div>
            <label
              for="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <span className="h-4 w-4 text-gray-400">
                    <BsCreditCard2Back />
                  </span>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
            <label
              for="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/43d56f605a4ad41c190b7798a99c53bf.svg"
                    alt=""
                  />
                </div>
              </div>
              <select
                type="text"
                name="billing-state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
                <option value="State">Maharashtra</option>
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">₹{CarttotalPrice}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">
                  ₹{TotalShippingChrges}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                ₹{CarttotalPrice + TotalShippingChrges}
              </p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkoutpage;
