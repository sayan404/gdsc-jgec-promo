import React, { useState } from 'react'
import Header from '../Layout/header'
import './projects.css'
import ProjectCard from './projectCard'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const projectData = [
  {
    name: 'GDSC JGEC Website',
    projectManager: 'gdscjgec/Image-Editor',
    description: 'Debut of JGEC GDSC Crafting our inaugural site to highlight future endeavors. A beginner-friendly project to create an impressive website.',
    repoLink: "https://github.com/gdscjgec/gdscjgec.github.io",
    previewLink: "https://gdscjgec.github.io/"
  },
  {
    name: 'Image Editor',
    projectManager: 'gdscjgec/Image-Editor',
    description: 'Open Source Web based Image Editor.',
    repoLink: "https://github.com/gdscjgec/Image-Editor",
    previewLink: "https://gdscjgec.github.io/Image-Editor"
  },
  {
    name: 'Pictionary',
    projectManager: 'gdscjgec/Pictionary',
    description: 'Open Source Web based Image Editor.',
    repoLink: "https://github.com/gdscjgec/Pictionary",
    previewLink: "https://gdscjgec.github.io/Pictionary"
  },
  {
    name: 'ML Gallery',
    projectManager: 'gdscjgec/ML-Gallery',
    description: "Hub for diverse Data Science & ML projects. Join with EDA, ML models, Deep Learning, and Computer Vision innovations. Collaborate now!",
    repoLink: "https://github.com/gdscjgec/ML-Gallery",
    previewLink: ""
  },
  {
    name: 'College-Fest-App',
    projectManager: 'gdscjgec/College-Fest-App',
    description: 'Empower events with our Open-Source Android app. Tailor for tech fests, college events. No coding needed, just customize and elevate!',
    repoLink: "https://github.com/gdscjgec/College-Fest-App",
    previewLink: ""
  },
  {
    name: 'Rhythm-Finder',
    projectManager: 'gdscjgec/Rhythm-Finder',
    description: 'Discover tunes with Rhythm-Finder: a Python web app powered by unsupervised ML. Share music preferences, get personalized song suggestions."    ',
    repoLink: "https://github.com/gdscjgec/Rhythm-Finder",
    previewLink: ""
  },

]
const Projects = () => {
  const [highLight, setHighLight] = useState('Projects')
  return (
    <div className='projectPerentDiv'>
      <Header highLight={highLight} />
      <div className='projectContainerMain'>
        <div className='projectText'>
          <span className='ourProject'>OUR PROJECTS</span>
        </div>
        <div className="projectContainer">
          {projectData ?
            <>
              {
                projectData.map((data, idx) => (
                  <ProjectCard key={idx} previewLink={data.previewLink} repoLink={data.repoLink} name={data.name} description={data.description} projectManager={data.projectManager} />
                ))}
            </> : <></>
          }
        </div>
        <div className='moreEvents'>
          <Link to={'https://github.com/gdscjgec'} target='_blank'><Button endIcon={<DirectionsRunIcon />} variant='contained' sx={{ width: '10vw', height: '7vh', padding: '2vh 10vh', margin: '0 auto' }}>More Projects</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Projects