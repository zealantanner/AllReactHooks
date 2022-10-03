import React, { useEffect, useState } from 'react'
import useMousePos from '../custom-hooks/useMousePos.ts'
import axios from 'axios';

import {
    ButtonGroup, Button,
    TextField
} from '@mui/material'

import MyAccordion from '../pieces/MyAccordion'
import Section from '../pieces/Section'
import Time from '../pieces/Time'

function ApiUseEffectDemo() {
    const [data, setData] = useState('')
    const [thing, setThing] = useState(true)

    useEffect(() => {
        axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
        .then((res) => {
            setData(res.data.text)
            console.log(res.data)
        })
    }, [thing])
    return (
        <Section>
            <p>Random Fact: {data}</p>
            <hr />
            <p>when this changes it refreshes: {thing?'true':'false'}</p>
            <Button variant="outlined" onClick={() => setThing(!thing)}>New Fact</Button>
        </Section>
    )
}

function TimeDemo() {
    return (
        <Section>
            <Time />
        </Section>
    )
}

function MouseDetector() {
    const mouse = useMousePos()
    return (<>
        <Section>
            {mouse.x && mouse.y ? <p>x: {mouse.x}; y: {mouse.y}</p> : <p>x: ? y: ?</p>}
        </Section>
    </>)
}

function MouseSquare() {
    const [isShow, setIsShow] = useState(false)
    const mouse = useMousePos()
    const style = {
        position: 'fixed',
        top: mouse.y+10,
        left: mouse.x,
        zIndex: 10,
        transition: 'transform 50ms ease',
        transform: `rotate(${mouse.x+mouse.y}deg)`,

    }
    return (<>
        <Section>
            <Button variant="outlined" onClick={()=>{setIsShow(!isShow)}}>{isShow?<span>hide</span>:<span>show</span>}</Button>
        </Section>
        {isShow &&
            <div style={style}>
                <Section>
                    Hello!
                </Section>
            </div>
        }
    </>)
}

function Drawing() {
    const [isShow, setIsShow] = useState(false)
    const mouse = useMousePos()
    const dots = (mouse.history).map((pos,i) =>
        {<li key={i} style={{
            position: 'fixed',
            top: pos.y+10,
            left: pos.x,
            zIndex: 10,
            color: 'red',
            }}>
            {i}
        </li>}
    );

    return (<>
        <Section title="drawing">
            {/* <Button onClick={()=>{setIsShow(!isShow)}}>show</Button> */}
            <Button variant="outlined" onClick={()=>{setIsShow(!isShow)}}>{isShow?<span>hide</span>:<span>show</span>}</Button>
        </Section>
        {isShow &&
        dots
        }
    </>)

}

export default function UseEffectDemo() {
    return(<>
        <MyAccordion title='UseEffect Demo!'>
            <ApiUseEffectDemo />
            <MouseDetector />
            <TimeDemo />
            <MouseSquare />
            <Drawing />
        </MyAccordion>
    </>)
}
