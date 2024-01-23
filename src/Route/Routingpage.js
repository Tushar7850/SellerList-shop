import React from 'react'

import { Route, Routes } from "react-router-dom";


// 
import Navbar from "../components/navbar/navbar"
// 
import Footer from "../components/footer/Footer";
import AboutUs from "../pages/FooterPages/AboutUs";
import PrivacyPolicy from "../pages/FooterPages/PrivacyPolicy";
import Careers from "../pages/FooterPages/Careers";
import LoginPage from "../pages/RegisterPages/LoginPage";
import SignUpPage from "../pages/RegisterPages/SignUp";
// 
import Allmenswear from "../Api/MenswearApi";
import allwomenswear from "../Api/WomensApi";
import AllKidsWear from '../Api/kidswearApi'
import Allshoes from "../Api/ShoesApi";
// 
import ShoesPage from ".././pages/ShoesPage";
import Womenspage from ".././pages/WomensPage";
import KidsPage from ".././pages/KidsPage";
import MansPage from ".././pages/MensPage";
import Home   from "../pages/HomePage/Home";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Checkitems from "../components/Re-use-Component/Checkitems";
import Page404 from "../pages/Page404/Page404";
import Cart from ".././pages/Cart/Cart";
import ContactUs from '../pages/FooterPages/ContactUs';
import TermsAndCondition from '../pages/FooterPages/TermsAndCondition';
import Profile from '../pages/AdminPage/Profile';
import CustomerService from '../pages/FooterPages/CustomerService';
import Account from '../pages/AdminPage/AccountPage';
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
      <Route path="/customerService" element={<CustomerService/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Account" element={<Account/>}/>
      
     </Routes>
     
     <Footer/>
     
      
    </div>
  )
}

export default Routingpage
