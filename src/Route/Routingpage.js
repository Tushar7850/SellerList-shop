import React from 'react'

import { Route, Routes } from "react-router-dom";


// 
import Navbar from "../components/navbar/navbar"
// 
import Footer from "../components/footer/Footer";
import AboutUs from "../components/footer/AboutUs";
import PrivacyPolicy from "../components/footer/PrivacyPolicy";
import Careers from "../components/footer/Careers";
import LoginPage from "../components/Login/LoginPage";
// 
import Allmenswear from "../Api/MenswearApi";
import allwomenswear from "../Api/WomensApi";
import AllKidsWear from '../Api/kidswearApi'
import Allshoes from "../Api/ShoesApi";
// 
import ShoesPage from "../components/Pages/ShoesPage";
import Womenspage from "../components/Pages/WomensPage";
import KidsPage from "../components/Pages/KidsPage";
import MansPage from "../components/Pages/MensPage";
import Home   from "../components/HomePage/Home";
import ScrollToTop from "../components/Assets/ScrollToTop/ScrollToTop";
import Checkitems from "../components/Pages/Re-use-Component/Checkitems";
import Page404 from "../Page404/Page404";
import Cart from "../components/Cart/Cart";
import SignUpPage from "../components/Sign-up/SignUp";
import ContactUs from '../components/footer/ContactUs';
import TermsAndCondition from '../components/footer/TermsAndCondition';
import DashBoard from '../components/AdminPage/DashBoard';
// 


function Routingpage() {


  
  


  return (
    <div>
         {/*  */}
      <ScrollToTop/>
   {/*  */}
     <Navbar/>
     
     
     <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="*" element={<Page404/>}/>
      <Route path="/login" element={ <LoginPage/>}/>
      <Route path="/sign-up" element={ <SignUpPage/>}/>

      <Route path="/shoes" element={<ShoesPage ProductApi={Allshoes}/>}/>
      <Route path="/menswear" element={<MansPage ProductApi={Allmenswear} />}/>
      <Route path="/womenswear" element={ <Womenspage ProductApi={allwomenswear} />}/>
      <Route path="/kidswear" element={ <KidsPage ProductApi={AllKidsWear}/>}/>
      {/*  */}

      <Route path="/productdetails" element={<Checkitems/>}/>
      <Route path="/cart" element={<Cart/>}/>

    
      {/*  Footer*/}
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/Privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/TermsAndCondition" element={<TermsAndCondition/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      
     </Routes>
     
     <Footer/>
     
      
    </div>
  )
}

export default Routingpage
