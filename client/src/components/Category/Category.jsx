import React from 'react'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'
import { CategoryData } from './CatagoryData'

function Category() {
  return (
    <div className={classes.category_container}>
      <div className={classes.category}>
      {
        CategoryData.map((infos,index) => 
          <CategoryCard data = {infos}  key={index}/>
          
        )
      }
    </div>
    </div>
  )
}

export default Category
