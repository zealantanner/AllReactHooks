import React, { useState } from 'react'
import {
    ButtonGroup, Button,
    TextField,
} from '@mui/material'

// import ButtonGroup from '@mui/material/ButtonGroup'
// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'

import Section from '../pieces/Section'
import MyAccordion from '../pieces/MyAccordion'

function CounterDemo() {
    const [counter, setCounter] = useState(0)
    function increase() {
        setCounter(counter + 1)
    }
    function decrease() {
        setCounter(counter - 1)
    }
    return (
        <Section>
            <p>Counter: {counter}</p>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button onClick={decrease}>-1</Button>
                <Button onClick={increase}>+1</Button>
            </ButtonGroup>
        </Section>
    )
}

function InputDemo() {
    const [inputValue, setInputValue] = useState('Mr. Magoo')
    function onInputChange(e) {
        setInputValue(e.target.value)
    }
    return (
        <Section>
            <p>Value: {inputValue}</p>
            <TextField className='textField' onChange={onInputChange} defaultValue={inputValue} label='Enter Something...' variant="outlined" />
        </Section>
    )
}

export default function UseStateDemo() {
    return(<>
        <MyAccordion title='UseState Demo!'>
            <CounterDemo />
            <InputDemo />
        </MyAccordion>
    </>)
}
