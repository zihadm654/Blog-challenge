import React from 'react'
import Img from '../images/illustration-laptop-desktop.svg'
import Img1 from '../images/illustration-laptop-mobile.svg'
const Feature = () => {
  return (
    <div>
      <div className="feature">
        <div className="feature__left">
          <img src={Img} alt="" className="large" />
          <img src={Img1} alt="" className="mobile" />
        </div>
        <div className="feature__right">
          <h4>Free, open, simple</h4>
          <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
          <h4>Powerful tooling</h4>
          <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a
            breeze,
            but
            capable of producing even the most complicated sites.</p>
        </div>
      </div>
    </div>
  )
}

export default Feature
