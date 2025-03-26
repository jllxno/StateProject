import React, { useState, useEffect } from "react";


export const TimeCounter = () => {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div className="timer-container">
            <h2>Tiempo: {seconds} s</h2>
            <button className="start-button" onClick={() => setRunning(true)}>Iniciar</button>
            <button className="stop-button" onClick={() => { setRunning(false); setSeconds(0); }}>Parar</button>
        </div>
    );
};