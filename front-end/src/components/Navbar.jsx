import React from 'react'
import "./navStyle.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/allusers"}>Show All Users</NavLink>
      <NavLink to={"/adduser"}>Add User</NavLink>
    </nav>
  )
}

export default Navbar