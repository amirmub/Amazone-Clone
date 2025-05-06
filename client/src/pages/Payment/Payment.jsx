import React, { useContext, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import classes from "./Payment.module.css"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { axiosInstance } from '../../Api/axios'
import { db } from '../../Utility/firebase'
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'
import { ActionTypes } from '../../Utility/action.type'


function Payment() {
  const [{basket,user},dispatch] = useContext(DataContext);
  const totalItems = basket?.reduce((acc, item) => acc + item.quantity, 0);
  const total = basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  const [processing,setProcessing] = useState(false);
  const [error,setError] = useState("");
  
  const [cardError,setCarError] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

   const handleChange = (e)=>{
     setError(e.error.message)
    }
    
    const handlePayment = async (e)=>{
      e.preventDefault();
      setProcessing(true)
      try {
        // 1. backend || function ---> contact to client secret
        const response = await axiosInstance({
          method : "POST",
          url: `/payment/create?total=${Math.round(total * 100)}` // Send total in cents
        })
        
        console.log(response.data);
       const clientSecret = response.data?.clientSecret;
       // 2. client(react) side confirmation
       const {paymentIntent} = await stripe.confirmCardPayment(  
         clientSecret, {
           payment_method: {
             card: elements.getElement(CardElement),
             billing_details: {
               name: user?. email.split("@")[0]
              },
            },
          })
          setProcessing(false)
          console.log(paymentIntent);
          
       // 3. after the confirmation ---> order page -->store on firebase database --> finally clear basket
          const orderRef = doc(collection(db, "users", user.uid, "orders"), paymentIntent.id);
          await setDoc(orderRef, {
            basket: basket,
            amount: (paymentIntent.amount / 100),
            created: paymentIntent.created,
          });
        
          navigate("/order",{state : {msg : "you have placed new order"}})

          dispatch({
            type : ActionTypes.EMPTY_BASKET
          })
     } catch (error) {
       setError(error);
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
              <small style={{color : "red",display : "flex", justifyContent : "center",fontSize : "14px"}}>
                {
                  error && error.message                  
                }
              </small>
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
