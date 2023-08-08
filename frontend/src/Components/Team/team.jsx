import React, { useEffect, useState } from 'react'
import Header from '../Layout/header'
import './team.css'
import female from '../../assets/female.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const teamDataf = [
  {
    type: 'lead',
    name: 'Shreya Sarkar',
    post: [
      "GDSC", "Lead"
    ],
    gender: 'female'
  }
]


// const teamDatas = [
//   {
//     type: 'lead',
//     name: 'Sahil Saha',
//     post: [
//       "GDSC", "Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Aniket Sen',
//     post: [
//       "GDSC", "Android Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Soham Chowdhury',
//     post: [
//       "GDSC", "Management Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Taki Hasan',
//     post: [
//       "GDSC", "AI/ML Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Pratyay Roy',
//     post: [
//       "GDSC", "AI/ML Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Soham Sen',
//     post: [
//       "GDSC", "Content Lead"
//     ],
//     gender: 'male'
//   },
// ]
// const teamDatat = [
//   {
//     type: 'lead',
//     name: 'Niloy Sikdar',
//     post: [
//       "GDSC", "Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Anubhab Sarkar',
//     post: [
//       "Content", "Graphic", "Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Anubhab Sarkar',
//     post: [
//       "Management", "Lead"
//     ],
//     gender: 'female'
//   },
//   {
//     type: 'normal',
//     name: 'Namrata Das',
//     post: [
//       "Management", "Lead", "DSA", "Content"
//     ],
//     gender: 'female'
//   },
//   {
//     type: 'normal',
//     name: 'Sagnik Roy',
//     post: [
//       "AI/ML", "DSA", "Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Tarpan Bhattacharya',
//     post: [
//       "Android", "Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Soham Chowdhury',
//     post: [
//       "DSA", "Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Sahil Saha',
//     post: [
//       "Web", "Flutter", "Lead"
//     ],
//     gender: 'male'
//   },
//   {
//     type: 'normal',
//     name: 'Utpalendu Barman',
//     post: [
//       "Web", "Android", "ML", "Lead"
//     ],
//     gender: 'male'
//   },
// ]
const Team = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const [highLight, setHighLight] = useState('Team')
  return (
    <div>
      <Header highLight={highLight} />
      <div className='teamContainerMain'>
        <div className='team-2023'>
          <div className='teamText'>
            <span className='teamUs'>Meet Our Team</span>
          </div>
          <div className='teamCardDiv' data-aos="flip-right" data-aos-duration="800">
            <img src={female} alt='logo' />
            <p className='memberName'>Shreya Sarkar</p>
            <div className='teamPost'>
              <span className='post-1'>GDSC</span>
              <span className='post-2'>Lead</span>
            </div>
            <div className='tm-1'></div>
            <div className='tm-2'></div>
          </div>
        </div>
        <div className='teamText'>
            <p className='teamUs'>Core Team Members</p>
          </div>
        <div className='teamText'>
            <p className='teamUs-lite'>Stay Tuned !</p>
          </div>
      </div>
    </div>
  )
}

export default Team