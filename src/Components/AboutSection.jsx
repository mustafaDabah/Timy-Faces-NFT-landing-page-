import React from 'react'
import AboutTitle from './AboutTitle'

function AboutSection() {
  return (
    <div className='container' >
        <div className="grid-system section items-center">
           <AboutTitle/>
            <div>
                <p className='font-light text-2xl uppercase text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quae vel, eius quia ipsa magni Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nesciunt? Repudiandae delectus ad eius officiis est veritatis exercitationem expedita. Id minima sapiente incidunt sed. Velit dolorum quae animi odit vero. ?</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection