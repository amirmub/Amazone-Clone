import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LowerFooter.module.css'

function LowerFooter() {
  return (
    <div className={classes.lowerFooter}>
      <div>
      <ul>
        <li><Link to="">Conditions of Use</Link></li>
        <li><Link to="">Privacy Notice</Link></li>
        <li><Link to="">Consumer Health Data Privacy Disclosure</Link></li>
        <li><Link to="">Your Ads Privacy Choices</Link></li>
      </ul>
      <p>© Amazone Clone 2025,by amirmub</p>
      </div>
    </div>
  )
}

export default LowerFooter
