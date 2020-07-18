import React from 'react'

const HeaderFeaturedImage = props => {
    if (!props.img) {
        return null
    }

    return (
        <div className='header-image-wrapper'>
            <img src={props.img} />
        </div>
    )
}

export default HeaderFeaturedImage