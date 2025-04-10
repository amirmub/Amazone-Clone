import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from './pages/Landing/Landing'
import Order from './pages/Order/Order'
import SignIn from './pages/Auth/SignIn'
import Payment from './pages/Payment/Payment'
import Cart from './pages/Cart/Cart'

function Routing() {
  return (
    <>
     <BrowserRouter >
       <Routes >
         <Route path="/" element={<Landing />} />
         <Route path="/auth" element={<SignIn />} />
         <Route path="/order" element={<Order />} />
         <Route path="/payments" element={<Payment />} />
         <Route path="/cart" element={<Cart />} />
       </Routes >
     </BrowserRouter >
    </>
  )
}

export default Routing
