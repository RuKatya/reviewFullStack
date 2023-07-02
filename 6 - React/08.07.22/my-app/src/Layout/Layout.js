import React from 'react'
import NavBar from '../Components/NavBar'
//import footer from '../Components/footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <NavBar />

        <Outlet />

        
    </div>
  )
}

export default Layout