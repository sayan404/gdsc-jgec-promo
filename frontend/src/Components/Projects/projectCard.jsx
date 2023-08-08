import React, { useEffect } from 'react'
import './projectCard.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button, colors } from '@mui/material'

const ProjectCard = ({ previewLink, repoLink, name, description, projectManager }) => {
    useEffect(() => {
        AOS.init()
        if (!previewLink) {
            previewLink = repoLink
        }
    }, [])


    return (
        <>
            <div className='projectCardDiv' data-aos="flip-right" data-aos-duration="800">
                <p className='name'>{name}</p>
                <Link to={`${repoLink}`}>
                    <p className='projectManager'>{projectManager}</p>
                </Link>
                <p className='description'>{description}</p>
                <div className='buttons'>
                    <Link to={`${previewLink}`}><Button variant='contained' color='primary' sx={{ width: '10vw', margin: '0 auto' }}>Preview</Button></Link>
                    <Link to={`${repoLink}`}><Button variant='contained' color='success' sx={{ backgroundColor: '#0F9D58', width: '10vw', margin: '0 auto', margin: '2vh' }}>Repository</Button></Link>
                </div>
                <div className='extraDiv-1'></div>
                <div className='extraDiv-2'></div>
            </div>
        </>
    )
}

export default ProjectCard