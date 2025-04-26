import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer({col1, col2, col3, col4,col5,col6}) {
  return (
    <footer>
        <div className={classes.footer__container}>
        <div className={classes.footer__content}>
            <div className={classes.cols}>
                <div className={`${classes.col} ${classes.firstCol}`}>
                     <Link to="">{col1}</Link>
                </div>
                <div className={classes.col}>
                    <Link to="">{col2}</Link>
                </div>
                <div className={classes.col}>
                    <Link to="">{col3}</Link>   
                </div>
                <div className={classes.col}>
                    <Link to="">{col4}</Link>
                </div>
                <div className={classes.col}>
                    <Link to="">{col5}</Link>
                </div>
                <div className={classes.col}>
                    <Link to="">{col6}</Link>
                </div>
            </div>
        </div>   

    </div>
    </footer>
  )
}

export default Footer
