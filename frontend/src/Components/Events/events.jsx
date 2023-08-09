import React, { useState } from 'react'
import Header from '../Layout/header'
import './events.css'
import EventCard from './eventCard'
import { Button } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { Link } from 'react-router-dom'
const eventData = [
  {
    
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jalpaiguri-government-engineering-college-jalpaiguri-presents-intro-to-open-source-and-jwoc/',
    date: 'JAN 24, 2023',
    type: 'Speaker Session / Tech Talk',
    description: 'Intro to Open-source | JWOC introduction at Jalpaiguri Govt. Engineering College'
  },
  {
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jalpaiguri-government-engineering-college-jalpaiguri-presents-compose-camp-session-4-hands-on-android-studio/',
    date: 'SEP 29, 2022',
    type: 'Speaker Session / Tech Talk',
    description: 'Camp Session 4: Android Studio Hands-on | Jalpaiguri Govt. Engineering College'
  },
  {
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jalpaiguri-government-engineering-college-jalpaiguri-presents-compose-camp-session-3-display-lists-and-use-material-design/',
    date: 'SEP 28, 2022',
    type: 'Speaker Session / Tech Talk',
    description: 'Camp Session 3: Display lists and use Material Design Jalpaiguri Govt. Eng. College'
  },
  {
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jalpaiguri-government-engineering-college-jalpaiguri-presents-compose-camp-session-2-building-app-ui/',
    date: 'SEP 25, 2022',
    type: 'Speaker Session / Tech Talk',
    description: 'Camp Session 2: Building App UI Jalpaiguri Government Engineering College - Jalpaiguri'
  },
  {
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jalpaiguri-government-engineering-college-jalpaiguri-presents-android-compose-camp-introduction-session/',
    date: 'SEP 18, 2022',
    type: 'Speaker Session / Tech Talk',
    description: 'Android Compose Camp- Introduction Session Jalpaiguri Government Engineering College'
  },
  {
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jalpaiguri-government-engineering-college-jalpaiguri-presents-gdsc-jgec-2022-23-info-session/',
    date: 'SEP 15, 2022',
    type: 'Informational Session /  Tech Talk',
    description: ' GDSC JGEC 2022-23 Info Session Jalpaiguri Government Engineering College - Jalpaiguri'
  },
  {
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jalpaiguri-government-engineering-college-jalpaiguri-presents-flutter-festival-gdsc-jgec-session-5/',
    date: 'MAR 29, 2022',
    type: 'Workshop / Study Group',
    description: ' Flutter Festival GDSC JGEC - Session #5 Jalpaiguri Government Engineering College'
  },
  {
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jalpaiguri-government-engineering-college-jalpaiguri-presents-intro-to-git-and-github-jwoc/',
    date: 'FEB 5, 2023',
    type: 'Workshop / Study Group',
    description: 'Git & GitHub introduction | JWoC at Jalpaiguri Government Engineering College'
  },
]
const Events = () => {
  const [highLight, setHighLight] = useState('Events')
  return (
    <>
      <div className='eventParentDiv'>
        <Header highLight={highLight} />
        <div className='eventContainerMain'>
          <div className='eventText'>
            <span className='eventUs'>UPCOMING EVENTS </span>
          </div>
          <span className='pastEventText'>There are currently no upcoming events. Please check again soon. </span>
          <div className='eventText'>
            <span className='eventUs'>PAST EVENTS</span>
          </div>
          <div className="eventContainer">
            {eventData ?
              <>
                {
                  eventData.map((data, idx) => (
                    <EventCard key={idx} link={data.link} date={data.date} type={data.type} description={data.description} />
                 ))}
              </> : <></>
            }
          </div>
          <div className='moreEvents'>
            <Link to={'https://gdsc.community.dev/jalpaiguri-government-engineering-college-jalpaiguri/'} target='_blank'><Button endIcon={<DirectionsRunIcon />} variant='contained' sx={{width : '10vw' , height : '8vh', margin : '0 auto'}}>More Events</Button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events