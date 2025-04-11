import React, { useState, useEffect } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import { Product_URL } from '../../Api/EndPoint';
import ProductCard from '../../components/Product/ProductCard';
import axios from 'axios';
import classes from './ProductDetail.module.css'
import Loader from '../../components/Loader/Loader';

function ProductDetail() {
  const [products, setProducts] = useState({});
  const [loading,setLoading] = useState(false);
  const {productId} = useParams();
  
  useEffect(() => {
     setLoading(true)
      axios.get(`${Product_URL}/products/${productId}`)
      .then(res => { 
        setProducts(res.data); 
        setLoading(false);
       })
      .catch(err => {console.log(err);})
  }, []);
  return (
    <LayOut>
      
      <div className={classes.product_detail_container}>
         <div className={classes.product_detail}> 
            {
              loading ? <Loader /> : products.id &&
              <ProductCard data={products} key={products.id}    flex = {true}  product_description = {true} />
            
            }
         </div>
      </div>
    </LayOut>
  )
}

export default ProductDetail
