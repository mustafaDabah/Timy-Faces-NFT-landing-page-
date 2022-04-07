import React from 'react';
import AboutTitle from './AboutTitle';
import AccordionItems from './AccordionItems';

function AccordionSection() {
    
    return (
        <div className='container section mb-20'>
            <div className="grid-system items-center">
                <AboutTitle/>
                <AccordionItems/>
            </div>
        </div>
    )
}

export default AccordionSection