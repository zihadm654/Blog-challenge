import React from 'react'

const Footer = () => {
  return (
    <footer>
      <h4>Blogr</h4>
      <div className="product__list">
        <h5>Product</h5>
        <a href="">Overview</a>
        <a href="">Pricing</a>
        <a href="">Marketplace</a>
        <a href="">Features</a>
        <a href="">Integrations</a>
      </div>
      <div className="company__list">
        <h5>Company</h5>
        <a href="">About</a>
        <a href="">Team</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
      </div>
      <div className="contact__list">
        <h5>Connect</h5>
        <a href="">Contact</a>
        <a href="">Newsletter</a>
        <a href="">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer
