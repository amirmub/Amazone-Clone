import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import Carousal from './components/carousal/Carousal'
import Category from './components/Category/Category'
import Product from './components/Product/Product'

function App() {
  return (
    <div>
      <Header />
      <Carousal />
      <Category />
      <Product />
    </div>
  )
}

export default App
