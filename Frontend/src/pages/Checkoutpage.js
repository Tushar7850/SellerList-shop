import React, { useContext } from "react";
import { LuAtSign } from "react-icons/lu";
import { FaAddressCard } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";
import { CardContext } from "../Context/CardContext/CardContext";
import { AdminContext } from "../Context/AdminContext/AdminContext";
import { useForm } from "react-hook-form";
import { CommonApiUrl } from "../HttpCommon";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Checkoutpage() {
  const { cartItems, CarttotalPrice, TotalShippingChrges,fetchCart } =
    useContext(CardContext);
  const { user } = useContext(AdminContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!user || !user._id) {
      toast.error("Please log in to continue.");
      return;
    }

    const orderPayload = {
      userId: user._id,
      items: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
        size: item.size,
      })),
      totalAmount: CarttotalPrice + TotalShippingChrges,
      shippingAddress: {
        street: data.street,
        state: data.state,
        zip: data.zip,
      },
      paymentMethod: "Card",
      paymentStatus: "Pending",
    };

    try {
      const response = await fetch(`${CommonApiUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(orderPayload),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Order placed successfully!");
        fetchCart()
        navigate("/");
      } else {
        toast.error("Failed to place order: " + responseData.message);
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        {/* Order Summary */}
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 h-64 overflow-y-scroll rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((product, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={product?.main_img}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{product?.name}</span>
                  <span className="text-gray-400">{product?.size}</span>
                  <p className="text-lg font-bold">₹{product?.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment + Billing */}
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>

          {/* Email */}
          <label className="mt-4 mb-2 block text-sm font-medium">Email</label>
          <div className="relative">
            <input
              type="text"
              value={user?.email}
              disabled
              className="w-full rounded-md border px-4 py-3 pl-11 text-sm shadow-sm"
              placeholder="your.email@gmail.com"
            />
            <div className="absolute inset-y-0 left-0 inline-flex items-center px-3">
              <LuAtSign className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Card Holder */}
          <label className="mt-4 mb-2 block text-sm font-medium">
            Card Holder
          </label>
          <div className="relative">
            <input
              type="text"
              value={user?.name}
              disabled
              className="w-full rounded-md border px-4 py-3 pl-11 text-sm uppercase shadow-sm"
              placeholder="Your full name here"
            />
            <div className="absolute inset-y-0 left-0 inline-flex items-center px-3">
              <FaAddressCard className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Card Inputs (UI only) */}
          <label className="mt-4 mb-2 block text-sm font-medium">
            Card Details
          </label>
          <div className="flex gap-2">
            <div className="relative w-7/12">
              <input
                {...register("cardNumber", {
                  required: "Card number is required",
                  pattern: {
                    value: /^\d{16}$/,
                    message: "Invalid card number",
                  },
                })}
                type="text"
                className={`w-full rounded-md border px-2 py-3 pl-11 text-sm shadow-sm ${
                  errors.cardNumber ? "border-red-500" : ""
                }`}
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3">
                <BsCreditCard2Back className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <input
              {...register("expiryDate", {
                required: "Expiry date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Invalid expiry date (MM/YY)",
                },
              })}
              type="text"
              className={`w-full rounded-md border px-2 py-3 text-sm shadow-sm ${
                errors.expiryDate ? "border-red-500" : ""
              }`}
              placeholder="MM/YY"
            />
            <input
              {...register("cvc", {
                required: "CVC is required",
                pattern: {
                  value: /^\d{3}$/,
                  message: "Invalid CVC",
                },
              })}
              type="text"
              className={`w-1/6 rounded-md border px-2 py-3 text-sm shadow-sm ${
                errors.cvc ? "border-red-500" : ""
              }`}
              placeholder="CVC"
            />
          </div>

          {/* Billing Address */}
          <label className="mt-4 mb-2 block text-sm font-medium">
            Billing Address
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              {...register("street", {
                required: "Street address is required",
              })}
              type="text"
              className={`w-full sm:w-7/12 rounded-md border px-4 py-3 text-sm shadow-sm ${
                errors.street ? "border-red-500" : ""
              }`}
              placeholder="Street Address"
            />
            <select
              {...register("state", { required: "State is required" })}
              className={`w-full rounded-md border px-4 py-3 text-sm shadow-sm ${
                errors.state ? "border-red-500" : ""
              }`}
            >
              <option value="">State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Delhi">Delhi</option>
            </select>
            <input
              {...register("zip", {
                required: "ZIP is required",
                pattern: { value: /^\d{6}$/, message: "Invalid ZIP code" },
              })}
              type="text"
              className={`w-full sm:w-1/4 rounded-md border px-4 py-3 text-sm shadow-sm ${
                errors.zip ? "border-red-500" : ""
              }`}
              placeholder="ZIP"
            />
          </div>

          {/* Totals */}
          <div className="mt-6 border-t border-b py-2">
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">₹{CarttotalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">
                ₹{TotalShippingChrges}
              </p>
            </div>
          </div>

          {/* Final Total */}
          <div className="mt-6 flex justify-between text-xl font-semibold">
            <p>Total</p>
            <p>₹{CarttotalPrice + TotalShippingChrges}</p>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit(onSubmit)}
            className="mt-6 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkoutpage;
