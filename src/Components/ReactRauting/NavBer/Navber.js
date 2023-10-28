import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navber.css"

function Navber() {
  return (
    <nav>
      <NavLink className='nav-link' to="/home">Home</NavLink>
      <NavLink className='nav-link' to="/blog">Blog</NavLink>
      <NavLink className='nav-link' to="/contact">Contact</NavLink>
      <NavLink  className='nav-link'to="/about">About</NavLink>
      <NavLink  className='nav-link'to="/user">User</NavLink>
    </nav>
  )
}

export default Navber
