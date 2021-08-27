import React from 'react'
import Img1 from '../images/illustration-editor-desktop.svg'
const Describe = () => {
  return (
    <>
      <div className="describe">
        <h3>Designed for the future</h3>
        <img src={Img1} alt="" />
        <div className="layout">
          <div className="layout__left">
            <h5>Intruducing an extensible editor</h5>
            <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.</p>
            <br />
            <h5>Robust content management</h5>
            <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
          <div className="layout__right">
          </div>
        </div>
      </div>
    </>
  )
}

export default Describe
