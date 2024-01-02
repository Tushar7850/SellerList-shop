import React from 'react'

export default function SignUpPage() {
  return (
    <div>
       <div>
      <div className="flex flex-wrap px-5  ">
      <div className="pointer-events-none relative hidden h-screen select-none  md:block md:w-1/2 bg-white p-5">
    {/* <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
      <p className="mb-8 text-3xl font-semibold leading-10">We work 10x faster than our compeititors and stay consistant. While they're bogged won with techincal debt, we're realeasing new features.</p>
      <p className="mb-4 text-3xl font-semibold">John Elmond</p>
      <p className="">Founder, Emogue</p>
      <p className="mb-7 text-sm opacity-70">Web Design Agency</p>
    </div> */}
    <img className="-z-1 absolute top-0 h-full w-full bg-cover" src="https://i.postimg.cc/TP2tNcYW/Ecommerce-web-page-cuate.png" alt='logo' />
  </div>
  <div className="flex w-full flex-col md:w-1/2">
    <div className="flex justify-center pt-12 md:justify-start md:pl-12">
      <h1 className="text-2xl font-bold text-blue-600"> SellerList . </h1>
    </div>
    <div className="my-auto mx-auto flex flex-col justify-center md:px-6 pt-8 md:justify-start lg:w-[28rem]">
      <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Create your free account</p>
      <p className="mt-6 text-center font-medium md:text-left">
        Already using wobble?
        <span className="whitespace-nowrap font-semibold text-blue-700 cursor-pointer">Login here</span>
      </p>
      <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"><img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="logo" /> Get started with Google</button>
      <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
        <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
      </div>
      <form className="flex flex-col items-stretch pt-3 md:pt-8">
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input type="text" id="login-name" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input type="email" id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
          </div>
        </div>
        <div className="mb-4 flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
          </div>
        </div>
        <div className="block">
          <input className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow" type="checkbox" id="remember-me"  />
          <label className="inline-block" for="remember-me"> I agree to the <span className="underline">Terms and Conditions</span></label>
        </div>
        <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">Sign in</button>
      </form>
    </div>
  </div>
 
</div>


      
      
    </div>
      
    </div>
  )
}
