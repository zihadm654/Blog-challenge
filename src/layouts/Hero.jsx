import React from 'react'
import Nav from '../components/Nav.jsx';

const Hero = () => {
  return (
    <section className="hero">
      <Nav />
      <div className="hero__content">
        <h2>A modern publishing platform</h2>
        <p>Grow your audience and build your online brand</p>
        <button className="free">Start for Free</button>
        <button className="learn__more">Learn More</button>
      </div>
    </section>
  )
}

export default Hero
