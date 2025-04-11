import React from 'react'
import {FadeLoader} from "react-spinners"
 
function Loader() {
  return (
    <div style={
        {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40vh',
            width: '1100px',
            margin: ' 0 auto',
        }
    }>
      <FadeLoader color="#2a71d4" />
    </div>
  )
}

export default Loader
