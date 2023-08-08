import React, { useState } from 'react'
import './header.css'
import gdscLogo from '../../assets/gdsc.png'
import { Link } from 'react-router-dom'
const Header = ({ highLight }) => {

  return (
    <div className='headerMainContainer'>
      <div className='leftSecton'>
        <img src={gdscLogo} className='gdscLogo' />
      </div>
      <div className='rightSecton'>
        <ul>
          <Link to={'/home'}><p className={(highLight === 'Home') ? "Home" : ""} >Home</p></Link>
          <Link to={'/about'}><p className={(highLight === 'About') ? "About" : ""} >About</p></Link>
          <Link to={'/events'}><p className={(highLight === 'Events') ? "Events" : ""} >Events</p></Link>
          <Link to={'/projects'}><p className={(highLight === 'Projects') ? "Projects" : ""} >Projects</p></Link>
          <Link to={'/team'}><p className={(highLight === 'Team') ? "Team" : ""} >Team</p></Link>
          <Link to={'/contact'}><p className={(highLight === 'Contact') ? "Contact" : ""} >Contact</p></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header