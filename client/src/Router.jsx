import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from './pages/Landing/Landing'
import Order from './pages/Order/Order'
import Auth from './pages/Auth/Auth'
import Payment from './pages/Payment/Payment'
import Results from './pages/Results/Results'
import Cart from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
  'pk_test_51RHXl5Q19mhqDu1YP0j8sY75Qre6MBdxn47spQTpmsrBhkSR00Nb7rNOPfa9WSCyRKyY3XZwpZwvWrjOiv9tInEi00HRPOLTgL'
);

function Routing() {
  return (
    <>
     <BrowserRouter >
       <Routes >
         <Route path="/" element={<Landing />} />
         <Route path="/auth" element={<Auth />} />
         <Route path="/order" element={<Order />} />
         <Route path="/payments" element={
           <ProtectedRoute msg={"you must login to pay"} redirect={"/payments"}>
             <Elements stripe={stripePromise}>
              <Payment />
              </Elements>
           </ProtectedRoute>
           } 
          />
         <Route path="/category/:catagoryName" element={<Results />} />
         <Route path="/products/:productId" element={<ProductDetail />} />
         <Route path="/cart" element={<Cart />} />
       </Routes >
     </BrowserRouter >
    </>
  )
}

export default Routing
