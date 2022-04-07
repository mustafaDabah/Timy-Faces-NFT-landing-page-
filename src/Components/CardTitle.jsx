import React from 'react';
import { MdTagFaces } from 'react-icons/md'

function CardTitle() {
    return (
        <div>
            <MdTagFaces fontSize={60} color='white' />
            <h3 className='text-3xl text-white mt-3 uppercase mb-3' >Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
            <p className='text-2xl mb-6 text-gray-200 font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, nihil? Odio perferendis ad enim ipsam.</p>
        </div>
    )
}

export default CardTitle