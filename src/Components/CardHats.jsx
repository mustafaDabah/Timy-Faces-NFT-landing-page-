import React from 'react';
import CardTitle from './CardTitle';
import TinyHats from '../Assets/video/timy-hats.webm';

function CardHats() {
  return (
    <div className='card-feature bg-secondary mb-5 md:mb-0'>
      <CardTitle/>
      <video className='w-full' autoPlay muted loop>
        <source src={TinyHats}  />
      </video>
    </div>
  )
}

export default CardHats