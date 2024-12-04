import React, { useState } from "react";

const DebugComponent = () => {
    const [count, setCount] = useState(0);

    console.log("Component Rendered with count:", count);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button  onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default DebugComponent;
