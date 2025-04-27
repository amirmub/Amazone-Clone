import React, { useContext, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import classes from "./payment.module.css"

function Payment() {
  const [products, setProducts] = useState({});
  const [{basket,user},dispatch] = useContext(DataContext);
  const totalItems = basket?.reduce((acc, item) => acc + item.quantity, 0);
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
                          product_description = {true} 
                          cart_button = {false} 
                          cart_style={true} 
                          />
                    </section> 
                  ))
                  }
              </div>
          </div>
          <hr style={{border:"1.4px solid #E3E6E6"}}/>

        <div>
          <h3>Payment Method</h3>
        </div>
        </section>
      </section>
    </LayOut>
  )
}

export default Payment
