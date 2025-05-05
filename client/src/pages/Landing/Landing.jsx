import React from 'react'
import Carousal from '../../components/carousal/Carousal'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import LayOut from '../../components/LayOut/LayOut'

function Landing() {
  return (
    <LayOut>
      <Carousal />
      <Category />
      <Product />
    </LayOut>
  )
}

export default Landing
