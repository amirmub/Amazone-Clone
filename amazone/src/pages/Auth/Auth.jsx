import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo2 from "../../assets/images/logo2.png"
import classes from "./Auth.module.css"
import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth"
import { DataContext } from '../../components/DataProvider/DataProvider'
import { ActionTypes } from '../../Utility/action.type'
import {ClipLoader} from "react-spinners"

function Auth() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [success, setSuccess] = useState(false);
  const [loading,setLoading] = useState({ signIn : false, signOut : false})

  const [{user},dispatch] = useContext(DataContext)
  const navigate = useNavigate();
   console.log(user);
   

  // console.log(email,password);
  const authHandler = async (e)=>{
    e.preventDefault()
    // console.log(e.target.name);
    if (e.target.name === "signIn") {
      setLoading({...loading,signIn : true})
      signInWithEmailAndPassword(auth,email,password)
      .then((userInfo) =>{
        // console.log(userInfo);
        dispatch({
          type : ActionTypes.SET_USER,
          user : userInfo.user
        })
        setSuccess(true);
        setError("");
        setLoading({...loading,signIn : false})
        navigate("/")
      })
      .catch((err) =>{
        console.log(err);
        setError(err.message)
        setLoading({...loading,signIn : false})
      })
    }
    else{
      setLoading({...loading,signOut : true})
      createUserWithEmailAndPassword(auth,email,password)
      .then((userInfo) =>{
        // console.log(userInfo);
        dispatch({
          type : ActionTypes.SET_USER,
          user : userInfo.user
        })
        setLoading({...loading,signOut : false})
        setSuccess(true);
        setError("");
        navigate("/")
      })
      .catch((err) =>{
        console.log(err);
        setError(err.message)
        setLoading({...loading,signOut : false})
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

              <button type='submit' onClick={authHandler} name='signIn'>
                 {
                    loading.signIn ? <ClipLoader  size={18}/> :  "SignIn"
                 }
              </button> 
                <p>
                  By signing in you agree to the AMAZONE FACE CLONE Contribution of use and Sale
                  . Please See Our Privacy Notice, our Cookies Notice and Our Interest Based Ad Notice.
                </p>
              <button  type='submit' className={classes.last_btn} onClick={authHandler} name='signUp'>
                 {
                    loading.signOut ? <ClipLoader  size={18}/> :  "Create Your Amazone Account"
                 }
              </button>
              {
                error && <small style={{ color: "red" }}>{error}</small>
              }
              {
                 success && !error && <small style={{ color: "green" }}>Successfully Register</small>
              }

          </div>
      </div>
    </section>
  )
}

export default Auth
