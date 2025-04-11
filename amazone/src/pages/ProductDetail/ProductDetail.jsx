import React, { useState, useEffect } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import { Product_URL } from '../../Api/EndPoint';
import ProductCard from '../../components/Product/ProductCard';
import axios from 'axios';
import classes from './ProductDetail.module.css'

function ProductDetail() {
  const [products, setProducts] = useState({});
  const {productId} = useParams();
  
  useEffect(() => {
      axios.get(`${Product_URL}/products/${productId}`)
      .then(res => { setProducts(res.data); console.log(res.data) })
      .catch(err => {console.log(err);})
  }, []);
  return (
    <LayOut>
      <div className={classes.product_detail_container}>
        {products.id && <ProductCard data={products} key={products.id} />}
      </div>
    </LayOut>
  )
}

export default ProductDetail
