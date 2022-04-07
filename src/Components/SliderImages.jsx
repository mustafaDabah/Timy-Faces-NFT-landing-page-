import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../utils/images';
import HeaderImageCard from './HeaderImageCard';



function SliderImages({rtl , settings}) {

  return (
    <Slider {...settings}  rtl={rtl} className="my-5 w-full flex justify-center items-center overflow-hidden">
      {IMAGES.map((item , index) => (
        <HeaderImageCard src={item} key={index} />
      ))}
    </Slider>

  )
}

export default SliderImages ;
export const HeaderMemo = React.memo(SliderImages)