import React, { useState } from 'react'
import Img from '../images/icon-arrow-light.svg'
import Menu from '../images/icon-hamburger.svg'
import Close from '../images/icon-close.svg'
const Nav = () => {
  const [menu, setMenu] = useState(true);
  const [subMenu, setSubMenu] = useState(false);
  const Hover = () => {
    setSubMenu(prev => !prev)
    // if (subMenu  "menu open") {
    //   setSubMenu(false)
    // }
  }
  return (
    <>
      <nav>
        <div className="nav__left">
          <h3>Blogr</h3>
          <div className="links">
            <div
              className="link__name"
              onMouseOver={Hover}
            >
              <a href="#">product</a>
              <img src={Img} alt="" />
            </div>
            <div className={subMenu ? "sub__menu open" : "sub__menu"} >
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </div>
            <div className="link__name">
              <a href="#">About</a>
              <img src={Img} alt="" />
            </div>
            <div className="sub__menu">
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </div>
            <div className="link__name">
              <a href="#">Contact</a>
              <img src={Img} alt="" />
            </div>
            <div className="sub__menu">
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </div>
          </div>
        </div>
        <div className="nav__right">
          <div
            className="menu"
            onClick={() => setMenu(prev => !prev)}
          >
            {menu ? <img src={Menu} /> : <img src={Close} />}
          </div>
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
    </>
  )
}

export default Nav
