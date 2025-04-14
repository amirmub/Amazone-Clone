import React from 'react'
import classes from './Footer.module.css'

function Footer({col1, col2, col3, col4}) {
  return (
    <div className={classes.footer__container}>
        <div className={classes.footer__content}>
            <div className={classes.cols}>
                <div>
                     <a href="">{col1}</a>
                </div>
                <div>
                    <a href="">{col2}</a>
                </div>
                <div>
                    <a href="">{col3}</a>   
                </div>
                <div>
                    <a href="">{col4}</a>
                </div>
            </div>
        </div>   
      
    </div>
  )
}

export default Footer
