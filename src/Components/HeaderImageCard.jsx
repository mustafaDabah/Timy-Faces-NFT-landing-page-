import React from 'react'

function HeaderImageCard({ src , title }) {
    return (
        <div className='mx-0'>
            <img src={src} alt={title} className="rounded-lg object-cover" />
        </div>
    )
}

export default HeaderImageCard