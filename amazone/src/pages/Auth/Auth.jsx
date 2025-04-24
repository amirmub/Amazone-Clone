import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo2 from "../../assets/images/logo2.png"
import classes from "./Auth.module.css"
import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { DataContext } from '../../components/DataProvider/DataProvider'
import { ActionTypes } from '../../Utility/action.type'

function Auth() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const [{user},dispatch] = useContext(DataContext)
   console.log(user);
   

  // console.log(email,password);
  const authHandler = async (e)=>{
    e.preventDefault()
    // console.log(e.target.name);
    if (e.target.name === "signIn") {
      signInWithEmailAndPassword(auth,email,password)
      .then((userInfo) =>{
        // console.log(userInfo);
        dispatch({
          type : ActionTypes.SET_USER,
          user : userInfo.user
        })
      })
      .catch((err) =>{
        console.log(err);
      })
    }
    else{
      createUserWithEmailAndPassword(auth,email,password)
      .then((userInfo) =>{
        // console.log(userInfo);
        dispatch({
          type : ActionTypes.SET_USER,
          user : userInfo.user
        })
      })
      .catch((err) =>{
        console.log(err);
      })
    }
    
  }
  
  return (
      <section className={classes.auth_section}>
        <div className={classes.auth_container}>
        <Link to="/"><img src={logo2} alt="logo" /></Link>

          <div className={classes.auth_content}>
              <h1>Sign-in</h1>
              <label htmlFor="email">Email</label><br />
              <input value={email} onChange={(e) => setEmail((e.target.value))} type="email" /><br /><br />

              <label htmlFor="password">Password</label><br />
              <input value={password} onChange={(e) => setPassword((e.target.value))} type="password" /><br />

              <button type='submit' onClick={authHandler} name='signIn'>SignIn</button>
                <p>
                  By signing in you agree to the AMAZONE FACE CLONE Contribution of use and Sale
                  . Please See Our Privacy Notice, our Cookies Notice and Our Interest Based Ad Notice.
                </p>
              <button  type='submit' onClick={authHandler} name='signUp'>Create Your Amazone Account</button>
          </div>
      </div>
    </section>
  )
}

export default Auth
