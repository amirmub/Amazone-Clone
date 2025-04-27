import React, { useContext, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import classes from "./payment.module.css"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


function Payment() {
  const [{basket,user},dispatch] = useContext(DataContext);
  const totalItems = basket?.reduce((acc, item) => acc + item.quantity, 0);
  const [cardError,setCarError] = useState("");

  const stripe = useStripe();
  const elements = useElements();

   const handleChange = (e)=>{
    setCarError(e.error.message)
   }

  // const [loading, setLoading] = useState(false);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!stripe || !elements) return;

  //   setLoading(true);

  //   const { clientSecret } = await res.json();

  //   const result = await stripe.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card: elements.getElement(CardElement),
  //     },
  //   });

  //   if (result.error) {
  //     console.error(result.error.message);
  //   } else {
  //     if (result.paymentIntent.status === 'succeeded') {
  //       alert('Payment successful!');
  //     }
  //   }

  //   setLoading(false);
  // };
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
           <form>
            {
              cardError && <small style={{color : "red",marginLeft : "10px"} }>{cardError}</small>
            }
              <CardElement onChange={handleChange} />
              <p>Total Order | ${basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
            <button onClick={(e)=>{e.preventDefault()}} type="submit">
             Pay Now
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
