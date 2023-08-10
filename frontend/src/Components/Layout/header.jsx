import React, { useEffect, useState } from 'react';
import './header.css';
import gdscLogo from '../../assets/gdsc.jpeg';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
const Header = ({ highLight }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // Initialize the speed dial as closed
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const actionsForLoggedInUsers = [
    { icon: <HomeIcon />, name: 'Home', func: home },
    { icon: <InfoIcon />, name: 'About', func: about },
    { icon: <EventIcon />, name: 'Events', func: events },
    { icon: <AccountTreeIcon />, name: 'Projects', func: projects },
    { icon: <Diversity3Icon />, name: 'Team', func: team },
    { icon: <CallIcon />, name: 'Contact', func: contact },
  ];

  function home() {
    navigate('/home');
  }
  function about() {
    navigate('/about');
  }
  function events() {
    navigate('/events');
  }
  function projects() {
    navigate('/projects');
  }
  function team() {
    navigate('/team');
  }
  function contact() {
    navigate('/contact');
  }

  const showMenuHandler = () => {
    setOpen(!open); // Toggle the state of the speed dial
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 600 ? (<> <Backdrop open={open} style={{ zIndex: "4" }} />
      <img src={gdscLogo} className='gdscLogo mediaquery' />
            <Box sx={{ height: '100%', transform: 'translateZ(0px)', flexGrow: 1 }} className='speedDial'>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    onClick={showMenuHandler}
                    open={open}
                    direction='down'
                    // className='speedDialOrg'               
                >
                    {actionsForLoggedInUsers.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.func}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </>) : (<div className='headerMainContainer'>
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
      </div>)
      }
    </>
  );
};

export default Header;
