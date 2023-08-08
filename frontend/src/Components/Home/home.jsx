import React, { useState } from 'react'
import './home.css'
import logo from '../../assets/logo.svg'
import colgPic from '../../assets/colgPic.jpeg'
import Header from '../Layout/header'
const Home = () => {
  const [highLight, setHighLight] = useState('Home')
  return (
    <>
      <Header highLight={highLight} />
      <div className='homeContainer'>
        <div className='leftHomeContainer'>
          <img src={logo}></img>
          <p className='p-first-child'>Welcome to GDSC JGEC!</p>
          <div className='innerPTags'>
            <p ><span className='first-child'>Developer Student Clubs, a  </span>
              <span className='second-child' >Google</span>
              <span className='third-child'> Developers program, empowers university students by providing them with opportunities to cultivate mobile and web development expertise, nurture design thinking abilities, and foster essential leadership skills.</span></p>
          </div>
        </div>
        <div className='rightHomeContainer'>
          <img src={colgPic} className='colgPic'></img>
          <p>Jalpaiguri Government Engineering College</p>
        </div>
      </div>
    </>
  )
}

export default Home