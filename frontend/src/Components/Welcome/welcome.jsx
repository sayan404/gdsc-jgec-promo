import React, { useEffect } from 'react'
import logo from '../../assets/logo.svg'
import banner from '../../assets/banner.png'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import './Welcome.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
const Welcome = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <div className='bannnerContainer'>
                <div className='img'>
                    <img className="banner" src={banner} alt="Logo" />
                </div>
                <div className='blurContainer-1' data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0">
                </div>
                <div className='blurContainer' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500" >
                    <span>WELCOME TO</span>
                    {/* <span></span> */}
                    <img src={logo} alt="Logo" />
                    <span className='littleText'>GDSC x JGEC</span>
                    <Link to={'/home'}>
                        <Button sx={{
                            margin: '50px',
                            backgroundColor: '#34A853',
                            border: 'none',
                            height: '6vh',
                            fontFamily: 'Product Sans',
                        }} variant="contained" color='primary' endIcon={<SendIcon />} >Explore More</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Welcome