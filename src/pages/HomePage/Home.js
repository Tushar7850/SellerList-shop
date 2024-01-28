import React from 'react'
// import Hero from './hero/hero'
import ShopItemsHomePage from './shopitems/ShopItemsHomePage'
import Hero from './hero'

// 
import { TbTruckDelivery } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { FaLock } from "react-icons/fa";
// 

import descimg2 from '../../Assets/dis-img2.jpg'
import descimg3 from '../../Assets/dis-img3.jpg'
import descimg4 from '../../Assets/dis-img4.jpg'
import descimg5 from '../../Assets/dis-img5.jpg'


import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const Navigate = useNavigate()
  
  const images = [
  
    { url: descimg2 },
    { url: descimg3},
    { url: descimg4},
    { url: descimg5},
   
  ];
  
  return (
    <div >
       
        <Hero/>


        <section className='grid place-content-center grid-cols-2 md:grid-cols-4 px-5 my-5 md:my-10 cursor-pointer sm:gap-4'>
        <Feature icon={<TbTruckDelivery className=' text-lg md:text-4xl'/>} title="Free Shipping" description="Enjoy free shipping on all your orders." />
        <Feature icon={<FaClock className='text-lg md:text-4xl'/>} title="24/7 Support" description="Reach out to us anytime, We are at your service." />
        <Feature icon={<MdLocalOffer className='text-lg md:text-4xl'/>} title="Offer Card" description="Enjoy discounts using our offer cards and coupon codes." />
        <Feature icon={<FaLock className='text-lg md:text-4xl'/>} title="Secure Payment" description="We provide secure payment gateways for your transactions." />
      </section>



      <div className='w-full max-w-screen-xl  hidden md:block '>
        <SimpleImageSlider
          width={'100%'}
          height={480}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          navSize={80}
         onClick={()=>Navigate('/womenswear')}
     
       
        />
      </div>
        <ShopItemsHomePage/>





        

      
      
    </div>
  )
}



function Feature({ icon, title, description }) {
  return (
    <div className="w-full p-4  hover:shadow-md ">
      <div className='text-center'>
        <div className='border rounded-full h-8 w-8 md:h-16 md:w-16 flex justify-center items-center mx-auto mb-4'>
          {icon}
        </div>
        <h4 className='font-bold md:text-xl mb-2'>{title}</h4>
        <p className='text-sm md:text-base'>{description}</p>
      </div>
    </div>
  );
}