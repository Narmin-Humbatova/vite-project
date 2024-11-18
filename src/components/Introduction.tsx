import React from 'react'
import "./Introduction.css"
// fonts
import { ReactTyped } from "react-typed";

const Introduction:React.FC= () => {
  return (
    <div className='introduction d-flex position-relative'>
      <div className="introduction-text">
        <h5></h5>
        <ReactTyped
      strings={[
        "Meet The Always Pan",
        "Meet The Always Fork",
        "Meet The Always Spoon",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    >
    </ReactTyped>
        <h2 className='my-4'>Your new <br /> <span className='text-decoration-underline'>skillet</span></h2>
        <button className='introduction-shop'>Shop the Always Pan</button>
      </div>
    </div>
  )
}

export default Introduction