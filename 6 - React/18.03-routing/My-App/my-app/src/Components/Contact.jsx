import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Outlet />
      <nav className="navBarLink">
        <Link to="/Contact" className="Link">FaceBook</Link>
        <Link to="WhatsApp" className="Link">WhatsApp</Link>
      </nav>
    </div>
  )
}

export default Contact