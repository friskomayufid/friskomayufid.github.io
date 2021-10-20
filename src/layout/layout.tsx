import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import '../styles/app.css'
type layoutProps = {
  children: any
}

function Layout({ children }: layoutProps) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Frisko Mayufid</title>
        <link rel="canonical" href="http://frisko.space" />
      </Helmet>
      <main className="site-main">{children}</main>
      <div className="viewport-bottom">
        <footer className="site-foot">
          <div className="site-foot-nav container">
            <div className="site-foot-nav-left">
              <Link to="/">{`Frisko Mayufid`}</Link> © 2021
            </div>
            <div className="site-foot-nav-right">
              {/* <Navigation
                data={site.navigation}
                navClass="site-foot-nav-item"
              /> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
