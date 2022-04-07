import React from 'react';
import CardTitle from './CardTitle';
import Tiny from '../Assets/images/tiny.png';

function CardInfo() {
  return (
    <div className='bg-third card-feature'>
      <CardTitle />
      <img src={Tiny} alt='tiny face' className='m-auto' />
    </div>
  )
}

export default CardInfo