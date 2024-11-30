import React, { useState } from "react";

const ToggleVisibility = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>This text can be toggled!</p>}
        </div>
    );
};

export default ToggleVisibility;
