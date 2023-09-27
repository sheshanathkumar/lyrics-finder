import React, { useEffect, useRef, useState } from 'react'

export default function Stopwatch() {

    const [time, setTime] = useState(179)
    const [mins, setMins] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        handleTime();
        return () => clearInterval(id.current);
    }, [mins, sec])

    // setInterval( () => {
    //     setTime(time + 1);
    // }, 3000  )

    let id = useRef();

    function handleTime() {

        id.current = setInterval(() => {



            setTime((prev) => {
                return prev - 1;
            });
            setMins(Math.floor(time / 60));
            setSec(time % 60)
            console.log(time, mins, sec)

        }, 1000);

    }


    return (
        <>
            <h1> {mins} : {sec} </h1>
            <div className='d-flex' style={{ gap: '5px' }} >
                <button className="btn btn-danger"
                    onClick={() => {
                        clearInterval(id.current);
                    }}
                > Pause </button>
            </div>
        </>




    )
}
