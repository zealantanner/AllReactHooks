import React, { useState } from 'react'
import {
    ButtonGroup, Button,
    TextField,
    Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import Section from '../pieces/Section'
import './scss/MyAccordion.scss'


export default function MyAccordion(props) {
    const [isOpen, setIsOpen] = useState(true)
    return (<>
        <Accordion className='accordion' expanded={isOpen}>
            <AccordionSummary
                className='accordionSummary'
                onClick={() => {setIsOpen(!isOpen)}}
                expandIcon={<ExpandMoreIcon className='icon'/>}
                >
                <h1>{props.title}</h1>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
                {props.children}
            </AccordionDetails>
        </Accordion>

    </>)
}
