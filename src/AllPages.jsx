import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import DeliveryPolicy from './pages/DeliveryPolicy'
import Home from './pages/Home'
import Orders from './pages/Orders'
import ReturnPolicy from "./pages/OurPolicy"
import PlaceOrder from './pages/PlaceOrder'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Product from './pages/Product'
import { useEffect, useState } from 'react'
import AdminLogin from './AdminPages/Login'

const ALlPages = () => {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/return-policy' element={<ReturnPolicy />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/delivery' element={<DeliveryPolicy />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        {/* <Route path='/admin' element={<AdminLogin />} /> */}
        {/* <Route path='/admin'>
          <Route path='login' element={<AdminLogin />} />
        </Route> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default ALlPages
