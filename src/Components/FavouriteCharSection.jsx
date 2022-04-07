import React from 'react'
import { settingsFavouriteChar } from '../utils/sliderOption';
import SliderImages from './SliderImages';


function FavouriteCharSection() {

  
    return (
        <div className='section bg-primary py-5'>
            <div className="pl-4 md:pl-24">
                <h2 className="text-5xl md:text-7xl uppercase text-white font-bold mb-12 mt-4">
                    Find your favourite character
                </h2>
                <SliderImages settings={settingsFavouriteChar} rtl={false} />
            </div>
        </div>
    )
}

export default FavouriteCharSection