import React from 'react'
import CardTitle from './CardTitle';
import Tiny from '../Assets/images/tiny-2.png';

function CardImage() {
    return (
        <div className='bg-forth card-feature mt-5'>
            <div className='grid-system items-center'>
                <CardTitle />
                <img src={Tiny} alt="tiny" className='m-auto w-[75%]'/>
            </div>
        </div>
    )
}

export default CardImage