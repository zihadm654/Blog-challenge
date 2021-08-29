import React from 'react'
import Img from '../images/illustration-phones.svg'
const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__left">
        <img src={Img} alt="" />
      </div>
      <div className="showcase__right">
        <h4>State of the Art Infrastructure</h4>
        <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
          This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
      </div>
    </div>
  )
}

export default Showcase
