import React from 'react'
import logo from '../../assets/images/logo.png'
import { BsCurrencyDollar } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import flag from '../../assets/images/american_flag.png'
import classes from './UpperFooter.module.css'
import {Link} from 'react-router-dom'

function UpperFooter() {
  return (
    <div className={classes.upperFooter_Container}>
      <div className={classes.upperFooter_logo}>
          <Link to="/"><img src={logo} /></Link>
      </div>

      <div className={classes.upperFooter_Buttons}>
          <button><FaGlobe className={classes.globe}/>English</button>
          <button><BsCurrencyDollar className={classes.currency}/> USD-U.S.Dollar</button>
          <button className={classes.footer_flag}><img src={flag}alt="flag" /> United State</button>
      </div>
    </div>
  )
}

export default UpperFooter
