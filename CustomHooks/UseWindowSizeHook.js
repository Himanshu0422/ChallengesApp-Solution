import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
};

const App = () => {
    const { width, height } = useWindowSize();

    return (
        <div>
            <h1>Width: {width}</h1>
            <h1>Height: {height}</h1>
        </div>
    );
};

export default App;
