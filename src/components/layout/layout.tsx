import React from "react"
import "./layout.css"

type layoutProps = {
  children: any
}

function Layout({ children } : layoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
