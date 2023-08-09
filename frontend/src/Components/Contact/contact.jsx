import React, { useEffect, useState } from 'react'
import Header from '../Layout/header'
import './contact.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

    useEffect(() => {
        AOS.init()
    }, [])
    const [highLight, setHighLight] = useState('Contact')
    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [senderSubject, setSenderSubject] = useState('')
    const [senderMessage, setSenderMessage] = useState('')
    return (
        <div>
            <Header highLight={highLight} />
            <div className='contactContainerMain' >
                {/* onSubmit={submitHandler} */}
                <div className='leftDiv' data-aos="flip-right" data-aos-duration="800">
                    <div className='contactText'>
                        <span className='contact'>Lets Get in Touch</span>
                    </div>
                    <form>
                        <div className='formName'>
                            <p>Name</p>
                            <input type='text' value={senderName} placeholder='Enter Your Name' onChange={(e) => setSenderName(e.target.value)} />
                        </div>
                        <div className='formEmail'>
                            <p>Email</p>
                            <input type='text' value={senderEmail} placeholder='Enter Your Email' onChange={(e) => setSenderEmail(e.target.value)} />
                        </div>
                        <div className='formSubject'>
                            <p>Subject</p>
                            <input type='text' value={senderSubject} placeholder='Enter Your Subject' onChange={(e) => setSenderSubject(e.target.value)} />
                        </div>
                        <div className='formSubject'>
                            <p>Message</p>
                            <input type='text' contenteditable value={senderMessage} placeholder='Enter Your Message' onChange={(e) => setSenderMessage(e.target.value)} />
                        </div>
                        <div className='moreEvents'>
                            <Button type='submit' endIcon={<SendIcon />} variant='contained' sx={{ width: '10vw', height: '7vh', padding :' 2vh 10vh' , margin: '0 auto', font: '2.5vh JetBrains Mono' }}>Submit</Button>
                        </div>
                    </form>
                    <div className='cnt-1'></div>
                </div>
                <div className='rightDiv' data-aos="flip-right" data-aos-duration="800">
                    <div className='cnt-1 spcl'></div>
                    <div className='contactText'>
                        <span className='contact extraStyle'>Follow Us On</span>
                    </div>
                    <div className='icons' >
                        <Link to='https://github.com/gdscjgec' ><GitHubIcon sx={{
                            fontSize: 35, padding: '2vh', color: '#4285F4', '&:hover': {
                                color: '#0F9D58'
                            }
                        }} /></Link>
                        <Link to='https://www.linkedin.com/company/gdscjgec/' ><LinkedInIcon sx={{
                            fontSize: 35, padding: '2vh', color: '#DB4437', '&:hover': {
                                color: '#F4B400'
                            }
                        }} /></Link>
                        <Link to='https://instagram.com/gdscjgec?igshid=OGQ5ZDc2ODk2ZA' ><InstagramIcon sx={{
                            fontSize: 35, padding: '2vh', color: '#F4B400', '&:hover': {
                                color: '#DB4437'
                            }
                        }} /></Link>
                        <Link to='https://twitter.com/gdscjgec?t=Z-FwIoySG0C8zNSAyA7QHw&s=09' ><TwitterIcon sx={{
                            fontSize: 35, padding: '2vh', color: '#0F9D58', '&:hover': {
                                color: '#4285F4'
                            }
                        }} /></Link>
                        <Link to='https://www.youtube.com/@GDSCJGEC' ><YouTubeIcon sx={{
                            fontSize: 35, padding: '2vh', color: '#DB4437', '&:hover': {
                                color: '#F4B400'
                            }
                        }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact