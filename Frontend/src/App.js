import React from "react";
import { Route, Routes } from "react-router-dom";

// Importing components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/FooterPages/AboutUs";
import PrivacyPolicy from "./pages/FooterPages/PrivacyPolicy";
import Careers from "./pages/FooterPages/Careers";

import ShoesPage from "./pages/ShopingPages/ShoesPage";
import Womenspage from "./pages/ShopingPages/WomensPage";
import KidsPage from "./pages/ShopingPages/KidsPage";
import MensPage from "./pages/ShopingPages/MensPage";
import Home from "./pages/HomePage/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Page404 from "./pages/Page404";

import ContactUs from "./pages/FooterPages/ContactUs";
import TermsAndCondition from "./pages/FooterPages/TermsAndCondition";
import Profile from "./pages/AdminPage/Profile";
import CustomerService from "./pages/FooterPages/CustomerService";
import Account from "./pages/AdminPage/AccountPage";

import CheckItems from "./components/Re-use-Component/Checkitems";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";
import Checkoutpage from "./pages/Checkoutpage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="w-full overflow-hidden">
     <div>
      {/* Scroll to top component */}
      <ScrollToTop />

      {/* Navbar */}
      <div className="mb-24 md:mb-28">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* Product routes */}
        <Route path="/shoes" element={<ShoesPage />} />
        <Route path="/menswear" element={<MensPage />} />
        <Route path="/womenswear" element={<Womenspage />} />
        <Route path="/kidswear" element={<KidsPage />} />

        {/* Other routes */}
        <Route path="/productDetails/:id" element={<CheckItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkoutpage" element={<Checkoutpage />} />

        {/* Footer routes */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Account" element={<Account />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
}

export default App;
