import React, { useState } from 'react'
// 
import { auth, googleAuthProvider  } from '../../Firebase.congif'
import {createUserWithEmailAndPassword} from'firebase/auth'
import{signInWithPopup } from 'firebase/auth'
// 
import Swal from 'sweetalert2';
// 
import { Link, useNavigate } from 'react-router-dom';
// 
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import toast from 'react-hot-toast';


export default function SignUpPage() {
 
  

    const [email,setEmail] =useState('');
    const [password, setPassword]= useState('')
    const [name, setName]= useState('')
    // 
    const [notify, setNotify]= useState('')
    // 
    const [showPassword,setShowPassword] = useState(true)


    const Navigate= useNavigate()
   



    const HandleFormSubmit = async (e)=>{
      e.preventDefault()
      try {
        const userCredential = await  createUserWithEmailAndPassword(auth,email,password)
        console.log("User Register", userCredential.user);
      
        Swal.fire({
          title: "Good job!",
          text: "Your Account Has been created !",
          icon: "success"
        });

        setEmail("")
        setName("")
        setPassword("")
        Navigate("/")
        
      } catch (error) {
        setNotify("Email or Password is wrong")
        toast.error("Email or Password is wrong")
      console.log(error);
        
      }

    }


    const handleSignInWithGoogle = async()=>{
      try{
        const userCredential = await signInWithPopup(auth, googleAuthProvider)
        console.log(userCredential.user)
        Navigate("/")
      }
      catch (error) {
        setNotify("no found")
        console.log(error);
  
        
      }
    }


  return (
    <div>
       <div>
      <div className="flex flex-wrap px-10  ">
      <div className="pointer-events-none relative hidden h-screen select-none  md:block md:w-1/2 bg-white p-5">
    <img className="-z-1 absolute top-0 h-full w-full bg-cover" src="https://i.postimg.cc/TP2tNcYW/Ecommerce-web-page-cuate.png" alt='logo' />
  </div>
  <div className="flex w-full flex-col mb-6 md:w-1/2">
    <div className="flex justify-center pt-12 md:justify-start md:pl-12">
      <h1 className="text-2xl font-bold text-blue-600"> SellerList . </h1>
    </div>
    <div className=" mx-auto flex flex-col justify-center md:px-6 pt-8 md:justify-start lg:w-[28rem]">
      <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Create your free account </p>
      <p className="mt-6 text-center font-medium md:text-left">
        Already using wobble?
        <span className="whitespace-nowrap font-semibold text-blue-700 cursor-pointer"> <Link to={"/login"}> Login here</Link></span>
      </p>
      <button onClick={handleSignInWithGoogle} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"><img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="logo" /> Get started with Google</button>
      <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
        <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
      </div>
      <form onSubmit={HandleFormSubmit} className="flex flex-col items-stretch pt-3 md:pt-8">
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input type="text" id="login-name" onChange={(e)=>setName(e.target.value)} value={name} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input type="email" id="login-email"  onChange={(e)=>setEmail(e.target.value)} value={email} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
          </div>
        </div>
        <div className="mb-4 flex flex-col pt-4">
          <div className="relative flex overflow-hidden  rounded-md border-2 transition focus-within:border-blue-600">
            <input type={showPassword ? "password" :"text"} id="login-password" onChange={(e)=>setPassword(e.target.value)} value={password} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
            <button type='button' className='pr-2' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <VisibilityIcon/> :<VisibilityOffIcon/>}</button>
          </div>
        </div>
        <div className="block">
          <input className="mr-2 h-5 w-5  rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 checked:text-white focus:border-blue-600 focus:shadow" type="checkbox" id="remember-me"  />
          <label className="inline-block" for="remember-me"> I agree to the <span className="underline">Terms and Conditions</span></label>
        </div>
        <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">Sign in</button>
        <span className='text-red-500'>{notify}</span>
      </form>
    </div>
  </div>
 
</div>


      
      
    </div>
      
    </div>
  )
}
