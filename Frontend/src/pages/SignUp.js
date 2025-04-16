import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner/Spinner';
import { CommonApiUrl } from '../HttpCommon';

// ✅ Yup schema for validation
const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${CommonApiUrl}/api/auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
     
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      Swal.fire({
        title: "Good job!",
        text: "Your account has been created!",
        icon: "success"
      });

      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
      console.error("Sign-up error:", error);
    }
    setLoading(false);
  };

  return (
    <div className='h-screen w-full'>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap px-10">
          <div className="pointer-events-none relative hidden h-screen select-none md:block md:w-1/2 bg-white p-5">
            <img className="-z-1 absolute top-0 h-full w-full bg-cover" src="https://i.postimg.cc/TP2tNcYW/Ecommerce-web-page-cuate.png" alt='logo' />
          </div>

          <div className="flex w-full flex-col mb-6 md:w-1/2">
            <div className="flex justify-center pt-12 md:justify-start md:pl-12">
              <h1 className="text-2xl font-bold text-blue-600"> SellerList. </h1>
            </div>

            <div className="mx-auto flex flex-col justify-center md:px-6 pt-8 md:justify-start lg:w-[28rem]">
              <p className="text-center text-3xl font-bold md:text-left">Create your free account</p>
              <p className="mt-6 text-center font-medium md:text-left">
                Already using SellerList?
                <span className="whitespace-nowrap font-semibold text-blue-700 cursor-pointer">
                  <Link to={"/login"}> Login here</Link>
                </span>
              </p>

              <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
                <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
                  Use email to sign up
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-stretch pt-3 md:pt-8">
                {/* Name */}
                <div className="flex flex-col pt-4">
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col pt-4">
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div className="mb-4 flex flex-col pt-4">
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className="w-full py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Password (min 8 characters)"
                    />
                    <button type='button' className='pr-2' onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                {/* Terms and Conditions */}
                <div className="block">
                  <input
                    type="checkbox"
                    {...register("terms")}
                    className="mr-2 h-5 w-5 rounded border border-gray-300 checked:bg-blue-600 focus:shadow"
                    id="remember-me"
                  />
                  <label htmlFor="remember-me">
                    I agree to the <span className="underline">Terms and Conditions</span>
                  </label>
                  {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700 transition md:w-32"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
