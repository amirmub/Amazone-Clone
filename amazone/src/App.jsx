import React, { useContext, useEffect } from 'react'
import "./App.css"
import Routing from './Router'
import { DataContext } from './components/DataProvider/DataProvider'
import { ActionTypes } from './Utility/action.type'
import { auth } from './Utility/firebase'
import { BsType } from 'react-icons/bs'

function App() {
  const [{user},dispatch] = useContext(DataContext);
   useEffect(()=>{
      auth.onAuthStateChanged((authUser) =>{
        if (authUser) {
          console.log(authUser);
          dispatch({
            type : ActionTypes.SET_USER,
            user : authUser
          })

        }
        else {
          dispatch({
            type : ActionTypes.SET_USER,
            user : null
          })
        }
      })
   },[])

  return (
    <div>
     <Routing />
    </div>
  )
}

export default App
