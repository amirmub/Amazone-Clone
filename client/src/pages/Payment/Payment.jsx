import React, { useContext, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import classes from "./payment.module.css"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { axiosInstance } from '../../Api/axios'
import {ClipLoader} from "react-spinners"



function Payment() {
  const [{basket,user},dispatch] = useContext(DataContext);
  const totalItems = basket?.reduce((acc, item) => acc + item.quantity, 0);
  const total = basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  const [processing,setProcessing] = useState(false);
  
  
  const [cardError,setCarError] = useState("");

  const stripe = useStripe();
  const elements = useElements();

   const handleChange = (e)=>{
     setCarError(e.error.message)
    }
    
    const handlePayment = async (e)=>{
      e.preventDefault();
      setProcessing(true)
      try {
        // 1. backend || function ---> contact to client secret
        const response = await axiosInstance({
          method : "POST",
          url : `/payment/create?total=${total}`
        })
        
        console.log(response.data);
       const clientSecret = response.data?.clientSecret;
       // 2. client(react) side confirmation
      const confirmation = await stripe.confirmCardPayment(
          clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
            name: user?. email.split("@")[0].split(/[\d.]/)[0]
          },
        },
      })
      setProcessing(false)
      console.log(confirmation);
      

     } catch (error) {
      setProcessing(false)

     }





   }
  return (
    <LayOut>
      <section className={classes.payment_container}>
         {/* header */}
        <div className={classes.payment_header}>Checkout ({totalItems}) items</div>

        {/* payment method */}
        <section>
           <div className={classes.payment_address}>
              <h3>Delivery Address</h3>
                <div>
                  <p>{user?.email}</p>
                  <p>Megenagna</p>
                  <p>Addiss,Ababa Ethiopia</p>
                </div>
           </div>
           <hr style={{border:"1.4px solid #E3E6E6"}}/>
          <div className={classes.payment_item}>
            <h3>Review Item and Delivery</h3>
             <div>
                { 
                  basket.map((item) => (   
                      <section className={classes.cart_item_section}>
                        <ProductCard 
                          data={item} key={item.id}
                          flex = {true} 
                          cart_button = {false} 
                          cart_style={true} 
                          />
                    </section> 
                  ))
                  }
              </div>
          </div>
          <hr style={{border:"1.4px solid #E3E6E6"}}/>

        <div className={classes.payment_card_container}>
          <h3>Payment Method</h3>
          <div className={classes.payment_card}>
           <form onSubmit={handlePayment}>
            {
              cardError && <small style={{color : "red",marginLeft : "10px"} }>{cardError}</small>
            }
              <CardElement onChange={handleChange} />
              <p>Total Order | ${total}</p>
            <button type="submit">
              {
                processing ?<small>Processing...</small> : "Pay Now"
              }
            </button>
           </form>
          </div>
        </div>
        </section>
      </section>
    </LayOut>
  )
}

export default Payment
