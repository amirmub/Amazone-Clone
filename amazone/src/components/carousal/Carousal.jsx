import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {img} from "../../assets/data"
import classes from './Carousal.module.css'

function Carousal() {
  return (
    <>
    <div>
       <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
       >
        {img.map((item) => {
           return <img src={item} />
          }
        )
        }
      </Carousel>
    </div>
    <div className={classes.fade}></div>
    </>
  )
}

export default Carousal
