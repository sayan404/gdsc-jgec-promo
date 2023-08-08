import React, { useEffect } from 'react'
import './App.css'
import WebFont from 'webfontloader'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome/welcome'
import Home from './Components/Home/home'
import Contact from './Components/Contact/contact'
import About from './Components/About/about'
import Events from './Components/Events/events'
import Team from './Components/Team/team'
import Projects from './Components/Projects/projects'

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "JetBrains Mono" ,"Product Sans" , "Droid Serif", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (
    <>
 
    <Routes>
    <Route path='/' element={<Welcome />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/events' element={<Events />}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/team' element={<Team />}/>
    <Route path='/contact' element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App
