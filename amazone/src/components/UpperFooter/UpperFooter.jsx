import React from 'react'
import logo from '../../assets/images/logo.png'
import { BsCurrencyDollar } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import flag from '../../assets/images/american_flag.png'
import classes from './UpperFooter.module.css'

function UpperFooter() {
  return (
    <div className={classes.upperFooter_Container}>
      <div className={classes.upperFooter_logo}>
          <a href="/"><img src={logo} /></a>
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
