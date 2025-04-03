import React from 'react'
import  classes from './header.module.css'
import { MdOutlineLocationOn } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import logo from '../../assets/logo.png'
import flag from '../../assets/american_flag.png'

function Header() {
  return (
    <header>
     <div className={classes.header__container}>
        <div className={classes.header__left} >
            <img src={logo} alt="logo" className={classes.header__logo} />
            <div  className={classes.location}>
                <div className={classes.location__icon}><span><MdOutlineLocationOn /></span></div>
                <div>
                    <small>Deliver to</small>
                    <p>Ethiopia</p>
                </div>
            </div>
        </div>
        <div className={classes.header__center}>
            <select name="" id="">
                <option value="">All</option>
                <option value="">Books</option>
                <option value="">Electronics</option>
                <option value="">Fashion</option>
            </select>
            <input type="text" placeholder='Search Amazone'className={classes.header__search} />
            <button className={classes.header__btn}><IoIosSearch /></button>
        </div>
        <div className={classes.header__right}>
             <div className={classes.header__right_content}>
                <img className={classes.header_flag} src={flag} alt="" />
                <p>EN</p>
             </div>
            <div className={classes.header__signin}>
                <small>Hello,signin</small>
                <p>Account & Lists</p>
            </div>
            <div className={classes.header__orders}>
                <small>Returns </small>
                <p>&Orders</p>
            </div>
            <div className={classes.header__cart}>
                <p >0</p>
                <h1><FiShoppingCart /></h1><span>Cart</span>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
