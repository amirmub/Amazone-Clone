import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from "../../assets/images/logo2.png"
import classes from "./Auth.module.css"

function Auth() {
  return (
      <section className={classes.auth_section}>
        <div className={classes.auth_container}>
        <Link><img src={logo2} alt="logo" /></Link>

          <div className={classes.auth_content}>
              <h1>Sign-in</h1>
              <label htmlFor="email">Email</label><br />
              <input type="email" /><br /><br />
              <label htmlFor="password">Password</label><br />
              <input type="password" /><br />
              <button>SignIn</button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi praesentium, quae eveniet perferendis quis dolores 
                quo nesciunt sint! Earum ipsa soluta ad nostrum, velit eos praesentium animi totam ipsam repellat!
              </p>
              <button>Create Your Amazone Account</button>
          </div>
      </div>
    </section>
  )
}

export default Auth
