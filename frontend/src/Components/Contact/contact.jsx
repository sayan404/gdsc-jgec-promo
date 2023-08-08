import React, { useState } from 'react'
import Header from '../Layout/header'

const Contact = () => {
    const [highLight, setHighLight] = useState('Contact')
    return (
        <div>
            <Header highLight={highLight} />
        </div>
    )
}

export default Contact