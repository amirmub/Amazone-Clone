import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import classes from './Product.module.css'
import Loader from '../Loader/Loader';

function Product() {
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true);
     axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data)
        console.log(response.data)
        setLoading(false);        
      })
      .catch((error) => console.log(error))
    },[])

  return (
    <div className={classes.products}>
      {
        loading ?<div className={classes.loader}><Loader /></div> :  product.map((singleProduct) => (
          <ProductCard data={singleProduct} key={singleProduct.id} cart_button_style={false} cart_button={true}/>
         )
         )
      }
    </div>
    
  )
}

export default Product
