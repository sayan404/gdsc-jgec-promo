import React, { useEffect } from 'react'
import './eventCard.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const EventCard = ({ link, date, type, description }) => {
    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <>
            <Link to={`${link}`} target='_blank'>
                <div className='eventCardDiv' data-aos="flip-right" data-aos-duration="800">
                    <p className='type'>{type}</p>
                    <p className='dates'>{date}</p>
                    <p className='description'>{description}</p>
                    <div className='ev-1'></div>
                    <div className='ev-2'></div>
                </div>
            </Link>
        </>
    )
}

export default EventCard