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
        <div className={classes.payment_header}>Checkout ({totalItems} ) items</div>

        {/* payment method */}
        <section style={{marginBottom : "90vh"}}>
          <h3>Delivery Address</h3>
            <div>
              <p>{user?.email}</p>
              <p>Megenagna</p>
              <p>Addiss,Ababa Ethiopia</p>
            </div>
          <div>
            <h3>Review Item and delivery</h3>
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
        </section>
      </section>
    </LayOut>
  )
}

export default Payment
