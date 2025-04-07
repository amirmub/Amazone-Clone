import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import classes from './Product.module.css'

function Product() {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
     axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data)
        console.log(response);
        
      })
      .catch((error) => console.log(error))
    },[])

  return (
    <div className={classes.products}>
     {
       product.map((singleProduct) => (
        <ProductCard data={singleProduct} key={singleProduct.id}/>
       )
       )
     }
    </div>
    
  )
}

export default Product
