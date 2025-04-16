import React, { useContext } from 'react';
import classes from './ProductCard.module.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

function ProductCard({data,flex,product_description,cart_button}) {
     const [state,dispatch] = useContext(DataContext);
     console.log(state);
     
    const addToCart = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: data.id,
          title: data.title,
          image: data.image,
          price: data.price,
          rating: data.rating,
          rate: data.rating.rate,
          description : data.description,
        },
      });
    }

  return (
   <div className={classes.product_container}>
     <div className={`${classes.product} ${flex ? classes.product_flex : ''}`}>  
      <div className={classes.product_img}>
        <Link to={`/products/${data.id}`}><img src={data.image} alt=""/></Link>
      </div>

      <div className={classes.product_info}>
        <h1 className={classes.product_title}>{data.title}</h1>
        <div>
          {
            product_description && <p className={classes.product_description}>{data.description}</p>  
          }
        </div>
        <div className={classes.product_rating}>
          <p><Rating name="half-rating" defaultValue={data.rating.rate} precision={0.5} readOnly/></p>
          <h4>{data.rating.count}</h4>
        </div>
        <div className={classes.product_price}>
          <p>$</p>
          <strong>{data.price}</strong>
        </div>
        {
          cart_button && <button onClick={addToCart}>add to cart</button>
        }
      </div>
    </div>
   </div>
  );
}

export default ProductCard;
