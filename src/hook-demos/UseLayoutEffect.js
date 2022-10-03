import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import useMousePos from '../custom-hooks/useMousePos.ts'
import axios from 'axios';

import {
    ButtonGroup, Button,
    TextField
} from '@mui/material'

import MyAccordion from '../pieces/MyAccordion'
import Section from '../pieces/Section'

function UseLayoutEffectThing() {
    const inputRef = useRef(null)

    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, [])
    // useLayoutEffect happens before useEffect and before the page is rendered
    useEffect(() => {
        inputRef.current.value = 'hello'
    }, [])
    return (
        <Section>
            <input ref={inputRef}></input>
            {/* <Button variant="outlined" onClick={() => setActivate(!activate)}>click</Button> */}
            {/* <p>UseEffect: {message}</p> */}
            <p>(should show in console)</p>
        </Section>
    )
}


export default function UseLayoutEffectDemo() {
    return(<>
        <MyAccordion title='UseLayoutEffect Demo!'>
            <UseLayoutEffectThing />
        </MyAccordion>
    </>)
}
