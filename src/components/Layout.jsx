import React from 'react'
import Header from './Header/Header'
import NavBar from './Header/NavBar'

const Layout = ({ children }) => {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      {children}
    </div>
  )
}

export default Layout