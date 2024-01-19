import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/fetch">Fetch</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header