import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <>
        <nav>
            <Link to="/">Home Page</Link>
            <Link to="/joke-page">Joke Page</Link>
            <Link to="/categories">Categories</Link>
        </nav>
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default Layout