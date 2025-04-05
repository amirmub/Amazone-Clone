import React from 'react'
import { IoMenu } from "react-icons/io5";
import classes from './HeaderBelow.module.css'

function HeaderBelow() {
  return (
    <div>
      <div className={classes.header__below}>
        <ul>
            <li><IoMenu /></li>
            <li>All</li>
            <li>Today's Deals</li>
            <li>Registery</li>
            <li>Customer Service</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderBelow
