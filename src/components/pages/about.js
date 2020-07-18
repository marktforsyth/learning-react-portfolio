import React from 'react'

import profilePicture from '../../../static/assets/images/bio/headshot.png'

export default function() {
    return (
        <div className='content-page-wrapper'>
            <div
                style={{
                    background: 'url(' + profilePicture + ') no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            <div className='right-column'>
                <h1>About Me</h1>

                <p>
                    I am seriously a good looking guy, am I wrong? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non unde similique consectetur hic accusamus libero, nesciunt recusandae cupiditate deserunt eaque est quam alias dolorem. Molestiae fugit magni laboriosam eos?
                </p>
            </div>
        </div>
    )
}