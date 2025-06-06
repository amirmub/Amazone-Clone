import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function Cart() {
  const [{basket , user},dispatch] = useContext(DataContext);

  const increament = (item) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: item
    })
  }
  const decreament = (id) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
    <LayOut>
      <section  className={classes.cart_container}>
       <div className={classes.cart}>
         <div className={classes.cart_header}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
         </div>
        <hr />

        <div className={classes.cart_item}>
            {
              basket?.length === 0 ? <h2> 🧺 Oops! Your basket is  empty.</h2> : 
                
                  basket.map((item) => (   
                <section className={classes.cart_item_section}>
                  <ProductCard 
                    data={item} key={item.id}
                    flex = {true} 
                    product_description = {true} 
                    cart_button = {false} 
                    cart_style={true} 
                    />

                    <div className={classes.cart_item_details}>
                      <button onClick={() => increament(item)}><FaChevronUp size={18}/></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => decreament(item.id)}><FaChevronDown  size={20}/></button>
                    </div>
                    
                </section>
              ))               
           }
        </div>
        </div>

        <div className={`${classes.cart_subtotal}`} style={{display: basket?.length === 0 ? 'none' : 'block'}}>
          {
            basket?.length > 0 && 
            <div>
              <h3>Subtotal ({basket.length} items): &nbsp;
              <strong> ${basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</strong></h3>
              <span>
                <input type="checkbox" />
                <span> This Order Contains a Gift</span>
              </span><br />
             <Link to="/payments"><button>Proceed to Checkout</button></Link>
            </div>
          }
        </div>
      </section>
    </LayOut>
  )
}

export default Cart
