import React, { useRef, useState } from 'react'
import $ from 'jquery'
import {
    ButtonGroup, Button,
    TextField
} from '@mui/material/'

import Section from '../pieces/Section'
import MyAccordion from '../pieces/MyAccordion'

function TextChanger() {
    const inputRef = useRef(null)
    const [text, setText] = useState('')

    const onClick = () => {
        const b = $($(inputRef.current).children()[0]).children()[0]
        setText(b.value)
        b.focus()
        console.log(b.value)
        b.value = ''
    }

    return (
        <Section>
            <p>Text: {text}</p>
            <TextField placeholder='hello' ref={inputRef}/>
            <Button variant="outlined" onClick={onClick}>Change Text</Button>
        </Section>
    )
}

function OtherDemo() {
    return (
        <Section>
            <p>Value: hello</p>
        </Section>
    )
}

export default function UseRefDemo() {
    return(
        <MyAccordion title='UseRef Demo!'>
            <TextChanger />
            <OtherDemo />
        </MyAccordion>
    )
}
