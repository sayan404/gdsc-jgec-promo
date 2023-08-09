import React, { useEffect, useState } from 'react'
import './header.css'
import gdscLogo from '../../assets/gdsc.png'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import CallIcon from '@mui/icons-material/Call';
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useNavigate } from 'react-router-dom'
const Header = ({ highLight }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const actionsForLoogedInUsers = [
    { icon: <HomeIcon />, name: 'Home', func: home },
    { icon: <InfoIcon />, name: 'about', func: about },
    { icon: <EventIcon />, name: 'event', func: events },
    { icon: <AccountTreeIcon />, name: 'projects', func: projects },
    { icon: <Diversity3Icon />, name: 'team', func: team },
    { icon: <CallIcon />, name: 'Contact', func: contact },

  ]
  function home() {
    navigate('/home')
  }
  function about() {
    navigate('/about')
  }
  function events() {
    navigate('/events')
  }
  function projects() {
    navigate('/projects')
  }
  function team() {
    navigate('/team')
  }
  function contact() {
    navigate('/contact')
  }
  const showMenuHandler = () => {
    open ? setOpen(false) : setOpen(true)
  }
  return (
    <>
      {
        (!window.innerWidth == '600') ?
          <Box sx={{ height: '100%', transform: 'translateZ(0px)', flexGrow: 1 }} className='speedDial'>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              className='speedDialIcon' alt='Profile'
              onClick={showMenuHandler}
              open={open}
              direction='down'
            >
              {actionsForLoogedInUsers.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.func}
                />
              ))}
            </SpeedDial>
          </Box>
          : <div className='headerMainContainer'>
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

      }
    </>
  )
}

export default Header