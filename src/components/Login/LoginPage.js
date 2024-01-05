import React, { useState } from 'react'
import { auth , googleAuthProvider } from '../../Firebase.congif';
import{signInWithEmailAndPassword} from 'firebase/auth'
import{signInWithPopup} from 'firebase/auth'

import { useNavigate ,Link } from 'react-router-dom';
// 
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';  


export default function LoginPage() {

  const [email,setEmail] =useState('');
  const [password, setPassword]= useState('')
  const [notify, setNotify]= useState('')
  // 
  const [showPassword,setShowPassword] = useState(true)
  // 

  const Navigate =useNavigate()


  const handleLogin= async(e)=>{
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password)
      console.log(userCredential.user);

      Navigate("/")
      
    } catch (error) {
      setNotify("Email or Password is wrong")
      console.log(error);
      
    }
  }
  const handleSignInWithGoogle = async(e)=>{
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
      <div className="flex flex-wrap px-10">
      <div className="pointer-events-none relative hidden h-screen select-none  md:block md:w-1/2 bg-white p-5">
    <img className="-z-1 absolute top-0 h-full w-full bg-cover"  alt="logo" src="https://i.postimg.cc/JhTPfBGY/Ecommerce-web-page-bro.png" />
  </div>
  <div className="flex w-full flex-col md:w-6/12">
    <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
      <h1 className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"> SellerList. </h1>
    </div>
    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
      <p className="text-left text-3xl font-bold">Welcome back</p>
      <p className="mt-2 text-left text-gray-500">Welcome back, please enter your details.</p>
      <button onClick={handleSignInWithGoogle} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-500  ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="logo" /> Log in with Google</button>
      <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
        <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col pt-3 md:pt-8">
        <div className="flex flex-col pt-4">
          <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="email" id="login-email" onChange={(e)=>setEmail(e.target.value)} value={email} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
          </div>
        </div>
        <div className="mb-12 flex flex-col pt-4">
          <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type={showPassword ? "password" :"text"} id="login-password" onChange={(e)=>setPassword(e.target.value)} value={password} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
            <button type='button' className='pr-2' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <VisibilityIcon/> :<VisibilityOffIcon/>}</button>
          </div>
        </div>
        <button type="submit"   className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
      </form>
        <span className='text-red-500'>{notify}</span>
      <div className="py-12 text-center">
        <p className="whitespace-nowrap text-gray-600">
          Don't have an account?
          <span className="underline-offset-4 font-semibold text-blue-500 underline"><Link to={"/sign-up"}>Sign up for free.</Link></span>
        </p>
      </div>
    </div>
  </div>
 
</div>


      
      
    </div>
  )
}
