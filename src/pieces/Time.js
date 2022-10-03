import React, { useState, useEffect } from "react";

export default function Time() {
    const [dt, setDt] = useState(new Date());
    const time = dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    useEffect(() => {
        const secTimer = setInterval( () => {
            setDt(new Date())
        },1000)

        return () => clearInterval(secTimer);
    }, []);

    return (
        <p className='time'>
            {time}
        </p>
    );
}