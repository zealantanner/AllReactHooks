import { useState, useEffect } from "react";

export default function useMousePos() {
    const [mouse, setMouse] = useState({x:0,y:0, history: [{x:0,y:0}]});
    const [mousePos, setMousePos] = useState({x:0,y:0});
    const [mouseHistory, setMouseHistory] = useState([{x:0,y:0}]);
    function clearHistory() {
        setMouseHistory([])
    }
    useEffect(() => {
        const getMousePos = e => {
            setMousePos({x:e.clientX, y:e.clientY});
        };
        document.addEventListener("mousemove", getMousePos);
        return function cleanup() {
            document.removeEventListener("mousemove", getMousePos);
        };
    });
    useEffect(() => {
        const last = mouseHistory[mouseHistory.length-1]
        if(mousePos.y != last.y && mousePos.x != last.x) {
            const thing = [...mouseHistory,mousePos]
            setMouseHistory(thing);
        }
    }, [mousePos])

    useEffect(() => {
        setMouse({x: mousePos.x, y: mousePos.y, history: mouseHistory});
    }, [mousePos, mouseHistory])
    return mouse;
};
