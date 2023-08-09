import React, { useEffect, useState } from 'react'
import Header from '../Layout/header'
import './about.css'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {

  useEffect(() => {
    AOS.init()
  }, [])

  const [highLight, setHighLight] = useState('About')
  return (
    <>
      <Header highLight={highLight} className='specialhead' />
      <div className='aboutContainerMain'>
        <div className='aboutText'>
          <span className='aboutUs'>ABOUT GDSC </span>
        </div>
        <div className='aboutCardSection'>
          <div className='aboutCard' data-aos="fade-left" data-aos-duration="800">
            <div className='aboutCardInnerDiv'>
              <RocketLaunchOutlinedIcon sx={{ fontSize: 35, color: '#DB4437', padding: '1vw', margin: '0 1.5vw', border: '3.5px solid red', borderRadius: '100%' }} />
              <span>Concept of DSC</span>
            </div>
            <span>The Google DSC program is an initiative by Google that aims to empower students with essential development, and web development skills. It operates at a grassroots level, offering hands-on learning opportunities, preparing students for better employability prospects in the tech industry.</span>
            <div className='extraDiv-1'></div>
            <div className='extraDiv-2'></div>
          </div>
          <div className='aboutCard' data-aos="fade-left" data-aos-duration="800">
            <div className='aboutCardInnerDiv'>
              <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 35, color: '#DB4437', padding: '1vw', margin: '0 1.5vw', border: '3.5px solid red', borderRadius: '100%' }} />
              <span>Why DSC?</span>
            </div>
            <span>The focus is on enabling students to learn development skills, leveraging technology to solve real-world problems, and fostering an aspiration to become outstanding developers and change-makers on a global scale.</span>
            <div className='extraDiv-1'></div>
            <div className='extraDiv-2'></div>
          </div>
          <div className='aboutCard' data-aos="fade-left" data-aos-duration="800">
            <div className='aboutCardInnerDiv'>
              <PeopleOutlinedIcon sx={{ fontSize: 35, color: '#DB4437', padding: '1vw', margin: '0 1.5vw', border: '3.5px solid red', borderRadius: '100%' }} />
              <span>Target audience</span>
            </div>
            <span>DSC activities primarily cater to university students and faculty members interested in acquiring development skills and collaborating to address real-world challenges through technology-driven solutions.</span>
            <div className='extraDiv-1'></div>
            <div className='extraDiv-2'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About