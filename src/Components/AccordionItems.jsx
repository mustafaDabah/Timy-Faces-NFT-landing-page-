import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

function AccordionItems() {
    const accordionData =
    {
        title: 'lorem What harsh truths do you prefer to ignore?',
        desc: 'In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris  sed adipisicing eu esse duis nulla non. '
    }

    return (
        <Accordion allowMultipleExpanded allowZeroExpanded >
            {[accordionData, accordionData, accordionData, accordionData].map((item , index) => (
                <AccordionItem className='mb-3' key={index}>
                    <AccordionItemHeading >
                        <AccordionItemButton>
                            <h4 className='text-2xl font-normal'> {item.title}</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='font-light text-xl'>{item.desc}</p>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default AccordionItems