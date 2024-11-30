import React, { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => setTime((prev) => prev + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    return (
        <div>
            <h1>Timer: {time}s</h1>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    );
};

export default Timer;
