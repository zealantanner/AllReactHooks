import React, { useReducer, useEffect, useRef } from 'react'
import { IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import {ButtonGroup, Button} from '@mui/material'

import Section from '../pieces/Section'
import MyAccordion from '../pieces/MyAccordion'



function Stopwatch() {
    const initialState = {
        isRunning: false,
        time: 0
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'start':
                return { ...state, isRunning: true };
            case 'stop':
                return { ...state, isRunning: false };
            case 'reset':
                return { ...state, isRunning: false, time: 0 };
            case 'tick':
                return { ...state, time: state.time + 1 };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);
    useEffect(() => {
        if (!state.isRunning) {
            return;
        }
        idRef.current = setInterval(() => dispatch({type: 'tick'}), 1000);
        return () => {
            clearInterval(idRef.current);
            idRef.current = 0;
        };
    }, [state.isRunning]);

    const style = {
        transition: 'transform 50ms linear',
        transform: `rotate(${state.time/60}turn)`,
        paddingBottom: '30px',
        marginLeft: '15px',
    }

    return (
        <Section>
            <p>{Math.floor(state.time/360)%12}:{Math.floor(state.time/60)%60}:{state.time%60}</p>
            <p><IoIosArrowUp style={style}/></p>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button onClick={() => dispatch({ type: 'start' })}>
                    Start
                </Button>
                <Button onClick={() => dispatch({ type: 'stop' })}>
                    Stop
                </Button>
                <Button onClick={() => dispatch({ type: 'reset' })}>
                    Reset
                </Button>
            </ButtonGroup>
        </Section>
    );
}

function ShowTextCounterDemo() {
    function reducer(state, action) {
        switch (action.type) {
            case 'increase':
                return { ...state, count: state.count + 1 }
            case 'toggle_text':
                return { ...state, showText: !state.showText }
            default:
                throw Error('Unknown action: ' + action.type);
        }
    }
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true })
    return(
        <Section>
            <p>Counter: {state.count}</p>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button onClick={() => {
                    dispatch({
                        type: 'increase'
                    })
                }}>+1</Button>
                <Button onClick={() => {
                    dispatch({
                        type: 'toggle_text'
                    })
                }}>{state.showText?<IoIosArrowDown/>:<IoIosArrowUp/>}</Button>
                {/* }}>{state.showText?<IoIosArrowUp/>:<IoIosArrowDown/>}</Button> */}
                {/* <Button>+1</Button> */}
            </ButtonGroup>
            <p>Text: {state.showText && <span>{state.count}</span>}</p>
        </Section>
    )
}

export default function UseReducerDemo() {
    return(
        <MyAccordion title='UseReducer Demo!'>
            <ShowTextCounterDemo />
            <Stopwatch />
        </MyAccordion>
    )
}
