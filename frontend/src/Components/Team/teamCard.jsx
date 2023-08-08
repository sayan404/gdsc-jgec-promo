import React from 'react'
import './teamCard.css'
const TeamCard = ({ name, type, post, gender }) => {
    return (
        <div className='teamCardDiv' data-aos="flip-right" data-aos-duration="800">
            {
                type === 'lead' ?
                    (<div className='teamText'>
                        <span className='teamUs'>Meet Our Team </span>
                    </div>) : (<div className='teamText'>
                        <span className='teamUs'>Core Team Members </span>
                    </div>)

            }
            <p className='type'>{type}</p>
            <p className='dates'>{date}</p>
            <p className='description'>{description}</p>
            <div className='ev-1'></div>
            <div className='ev-2'></div>
        </div>
    )
}

export default TeamCard