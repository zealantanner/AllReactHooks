import React from 'react';

import UseStateDemo from './hook-demos/UseStateDemo';
import UseReducerDemo from './hook-demos/UseReducerDemo';
import UseEffectDemo from './hook-demos/UseEffectDemo';
import UseRefDemo from './hook-demos/UseRefDemo';
import UseLayoutEffectDemo from './hook-demos/UseLayoutEffect'
import UseImperativeHandleDemo from './hook-demos/UseImperativeHandle'


import './App.scss';



export default function App() {
  return (<div id='mainContainer'>
    <UseStateDemo />
    <UseReducerDemo />
    <UseEffectDemo />
    <UseRefDemo />
    <UseLayoutEffectDemo />
    <UseImperativeHandleDemo />
  </div>)
}
