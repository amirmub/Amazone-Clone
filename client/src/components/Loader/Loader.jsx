import React from 'react'
import {FadeLoader} from "react-spinners"
import classes from "./Loader.module.css"
 
function Loader() {
  return (
    <div className={classes.fadeLoader}>
      <FadeLoader color="#2a71d4" />
    </div>
  )
}

export default Loader
