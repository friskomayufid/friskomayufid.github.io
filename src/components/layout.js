import React from "react"
import '../styles/app.css'
import Link from 'gatsby-link'
import profile from '../../content/assets/frisko.jpg'
import bg from '../../content/assets/background.png'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <div>
        <div className="container">
          <img className="background" alt="background" src={bg}></img> 
          <div className="section-wrap">
            <div className="section-left">
              <div className="title">
                <img class="profile" alt="frisko" src={profile}></img> 
                <p>Hi, my name is</p>
                <h1>Frisko Mayufid</h1>
                <p>I am a Front End Developer & Blogger</p>
              </div>
            </div>
            <div className="section-right">
              <div className="navbar">
                <Link className="navlink" to="/">About Me</Link>
                <Link className="navlink" to="/">Resume</Link>
                <Link className="navlink" to="/blog">Blog</Link>
              </div>
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
