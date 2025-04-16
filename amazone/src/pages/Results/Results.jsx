import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Product_URL } from '../../Api/EndPoint'
import ProductCard from '../../components/Product/ProductCard'
import {FadeLoader} from "react-spinners"
import Loader from '../../components/Loader/Loader'

function Results() {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(false);

  const {catagoryName} = useParams();
    
  useEffect(() => {
    setLoading(true);
    axios.get(`${Product_URL}/products/category/${catagoryName}`)
    .then(res => {
       setProducts(res.data);
        setLoading(false);
      })
    .catch(err => {
      console.log(err);
      setLoading(false);
    })
  }, [])

  return (
    <LayOut>
        <div className={classes.results_container}>
          <h4 className={classes.result}>Results</h4>
          <h4 className={classes.result}>Category / {catagoryName}</h4>
          <hr />
          <div className={classes.results}>
          {
            loading?(<Loader />) : products?.map((product) => (
            <ProductCard  data={product}  key={product.id} cart_button={true}/>
          )
          )
          }
          </div>
        </div>
    </LayOut>
  )
}

export default Results
