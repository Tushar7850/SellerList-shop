import React, { useState, useContext } from "react";
import { AdminContext } from "../Context/AdminContext/AdminContext"; // Make sure the path is correct
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner/Spinner";
import { CommonApiUrl } from "../HttpCommon";

// ✅ Yup schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  const { user, logout, setUser } = useContext(AdminContext);
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${CommonApiUrl}/api/auth/login`, data);
      const userData = response.data;

      localStorage.setItem("userInfo", JSON.stringify(userData));
      setUser(userData);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap px-5 md:px-10">
          {/* Left image panel */}
          <div className="pointer-events-none relative hidden h-screen select-none md:block md:w-1/2 bg-white p-5">
            <img
              className="-z-1 absolute top-0 h-full w-full bg-cover"
              alt="logo"
              src="https://i.postimg.cc/JhTPfBGY/Ecommerce-web-page-bro.png"
            />
          </div>

          {/* Login form */}
          <div className="flex w-screen flex-col md:w-6/12">
            <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
              <h1 className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900">
                SellerList.
              </h1>
            </div>

            <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
              <p className="text-left text-3xl font-bold">Welcome back</p>
              <p className="mt-2 text-left text-gray-500">
                Please enter your details to log in.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col pt-3 md:pt-8"
              >
                {/* Email Field */}
                <div className="flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full flex-1 appearance-none bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="mb-8 flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <input
                      type={showPassword ? "password" : "text"}
                      {...register("password")}
                      className="w-full flex-1 appearance-none bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="pr-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                >
                  Log in
                </button>
              </form>

              <div className="py-12 text-center">
                <p className="whitespace-nowrap text-gray-600">
                  Don't have an account?{" "}
                  <span className="underline-offset-4 font-semibold text-blue-500 underline">
                    <Link to="/sign-up">Sign up for free.</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
