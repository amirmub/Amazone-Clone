import React from 'react';
import classes from './ProductCard.module.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function ProductCard({data,flex}) {
  return (
   <div className={classes.product_container}>
     <div className={`${classes.product} ${flex ? classes.product_flex : ''}`}>  
      <div className={classes.product_img}>
        <Link to={`/products/${data.id}`}><img src={data.image} alt=""/></Link>
      </div>

      <div className={classes.product_info}>
        <h1 className={classes.product_title}>{data.title}</h1>
        <div className={classes.product_rating}>
          <p><Rating name="half-rating" defaultValue={data.rating.rate} precision={0.5} readOnly/></p>
          <h4>{data.rating.count}</h4>
        </div>
        <div className={classes.product_price}>
          <p>$</p>
          <strong>{data.price}</strong>
        </div>
        <button>add to cart</button>
      </div>
    </div>
   </div>
  );
}

export default ProductCard;
