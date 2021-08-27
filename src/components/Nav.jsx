import React from 'react'

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__left">
          <h3>Blogr</h3>
          <div className="links">
            <select name="product" id="">
              <option value="product">
                product
              </option>
              <option value="Overview">
                Overview
              </option>
              <option value="Pricing">
                Pricing
              </option>
              <option value="Marketplace">
                Marketplace
              </option>
              <option value="Features">
                Features
              </option>
              <option value="Integrations">
                Integrations
              </option>
            </select>
            <select name="company" id="">
              <option value="company">
                company
              </option>
              <option value="About">
                About
              </option>
              <option value="Team">
                Team
              </option>
              <option value="Blog">
                Blog
              </option>
              <option value="Careers">
                Careers
              </option>
            </select>
            <select name="contact" id="">
              <option value="contact">
                Contact
              </option>
              <option value="Newsletter">
                Newsletter
              </option>
              <option value="LinkedIn">
                LinkedIn
              </option>
            </select>
          </div>
        </div>
        <div className="nav__right">
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
    </>
  )
}

export default Nav
