import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Product_URL } from '../../Api/EndPoint'
import ProductCard from '../../components/Product/ProductCard'

function Results() {
  const [products, setProducts] = useState([])
  const {catagoryName} = useParams();

  useEffect(() => {
    axios.get(`${Product_URL}/products/category/${catagoryName}`)
    .then(res => { setProducts(res.data);   console.log(res.data) })
  
    .catch(err => {console.log(err);})
  }, [])

  return (
    <LayOut>
        <div className={classes.results_container}>
          <h4 className={classes.result}>Results</h4>
          <h4 className={classes.result}>Category / {catagoryName}</h4>
          <hr />
          <div className={classes.results}>
          
            {
              products?.map((product) => (
                <ProductCard  data={product}  key={product.id}/>
              )
              )
            }
          </div>
        </div>
    </LayOut>
  )
}

export default Results
