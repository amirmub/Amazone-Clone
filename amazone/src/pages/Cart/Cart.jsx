import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import { Link } from 'react-router-dom';

function Cart() {
  const [{basket , user},dispatch] = useContext(DataContext);
  return (
    <LayOut>
      <section>
        <div>
         <h2>Hello</h2>
         <h3>Your Shopping Basket</h3>
         <hr />

         {
          basket?.length === 0 ? <h2> Oops, Your Basket is empty</h2> : 
            
              basket.map((item) => (
               <ProductCard 
               data={item} key={item.id} flex = {true} product_description = {true} cart_button = {false} />
              ))
            
         }
        </div>

        <div>
          {
            basket?.length > 0 && 
            <div>
              <h3>Subtotal ({basket.length} items): &nbsp;
              <strong> ${basket.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</strong></h3>
              <span>
                <input type="checkbox" />
                <span>This Order Contains a Gift</span>
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
