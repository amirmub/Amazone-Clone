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
        loading ? <Loader /> :  product.map((singleProduct) => (
          <ProductCard data={singleProduct} key={singleProduct.id}/>
         )
         )
      }
    </div>
    
  )
}

export default Product
