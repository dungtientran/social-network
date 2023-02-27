import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <div>
        {/* <NavBar /> */}
        <Header />
        {children}
    </div>
  )
}

export default Layout