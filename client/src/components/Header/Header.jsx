import React, { useContext } from 'react'
import  classes from './header.module.css'
import { MdOutlineLocationOn } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import logo from '../../assets/images/logo.png'
import flag from '../../assets/images/american_flag.png'
import HeaderBelow from '../HeaderBelow/HeaderBelow';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';

function Header() {
    const [{user,basket},dispatch] = useContext(DataContext);
     const totalItems = basket?.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
    <header>
     <div className={classes.header__container}>
        <div className={classes.header__left} >
            <Link to="/"><img src={logo} alt="logo" className={classes.header__logo} /></Link>
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
                <select name="" id="">
                    <option value="">EN</option>
                </select>
             </div>
            <Link to={!user && "/auth"}  className={classes.header__signin}>
              <div>
                   {
                    user ? 
                     <>
                      <small style={{fontSize : "11px",fontWeight :"500"}}>Hello, {user?.email?.split("@")[0]}</small>
                      <p onClick={()=>{auth.signOut()}}> Sign Out</p>
                    </>
                     : 
                    <>
                      <small>Hello,signin</small>
                      <p>Account & Lists</p>
                    </>
                   }
              </div>
            </Link>
            <Link to="/order" className={classes.header__orders}>
                <small>Returns </small>
                <p>&Orders</p>
            </Link>
            <Link to="/cart" className={classes.header__cart}>
                <p >{totalItems}</p>
                 <h1><FiShoppingCart /></h1>  {/*<span>Cart</span> */}
            </Link>
        </div>
        </div>
    </header>
    <HeaderBelow />
   </>
  )
}

export default Header
