import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};

const App = () => {
    const [name, setName] = useLocalStorage("name", "John Doe");

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Saved Name: {name}</p>
        </div>
    );
};

export default App;
