import { useImperativeHandle, forwardRef, useState, useRef } from 'react'

import {
    ButtonGroup, Button,
    TextField
} from '@mui/material'

import MyAccordion from '../pieces/MyAccordion'
import Section from '../pieces/Section'

forwardRef(function MyButton() {
    const [toggle, setToggle] = useState(true)
    return (<>
        <Button
            variant="outlined"
            onClick={() => {
                setToggle(!toggle)
            }}
        >
            From child
        </Button>
        {toggle && <span>Toggle</span>}
    </>)
})

function ImperativeHandleDemo1() {

    return (
        <Section>
            <ButtonGroup>
                <Button variant="outlined">From parent</Button>
                <MyButton />
            </ButtonGroup>
        </Section>
    )
}


export default function UseImperativeHandleDemo() {
    return(<>
        <MyAccordion title='UseEffect Demo!'>
            <ImperativeHandleDemo1 />
        </MyAccordion>
    </>)
}
