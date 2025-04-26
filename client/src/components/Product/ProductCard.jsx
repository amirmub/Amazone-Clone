import React, { useContext , useState } from 'react';
import classes from './ProductCard.module.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

function ProductCard({data,flex,product_description,cart_button,cart_style,cart_button_style}) {
     const [state,dispatch] = useContext(DataContext);
     const [rating, setRating] = useState(data.rating.rate);
     const [count, setCount] = useState(data.rating.count);
     const [hasRated, setHasRated] = useState(false);
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

    const handleRatingChange = (event, newValue) => {
      if (!hasRated && newValue !== null) {
        setRating(newValue);
        setCount(prev => prev + 1);
        setHasRated(true); // Prevent user from rating again (optional)
      }
    };
  return (
   <div className={classes.product_container}>
     <div className={`${classes.product} ${flex ? classes.product_flex : ''} ${cart_style ? classes.cart_style : ''}`}>  
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
          <p><Rating name="half-rating" defaultValue={data.rating.rate} value={rating} precision={0.5} onChange={handleRatingChange}/></p>
          <h4>{count}</h4>
        </div>
        <div className={classes.product_price}>
          <p>$</p>
          <strong>{data.price}</strong>
        </div>
        {
          cart_button && <button className={`${classes.btn} ${cart_button_style ? classes.cart_btn_style : ''}`} onClick={addToCart}>add to cart</button>
        }
      </div>
    </div>
   </div>
  );
}

export default ProductCard;
