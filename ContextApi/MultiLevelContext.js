import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Create UserContext
const UserContext = createContext();

// Custom hook to use UserContext
const useUser = () => useContext(UserContext);

// Home Component
const Home = () => {
    const { user, setUser } = useUser();
    const [input, setInput] = useState(user.name || "");

    const handleSave = () => {
        setUser({ ...user, name: input });
    };

    return (
        <div>
            <h1>Home Page</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your name"
                style={{ marginBottom: 20, display: "block" }}
            />
            <button onClick={handleSave}>
                <Link to="/name">Go to Name Page</Link>
            </button>
        </div>
    );
};

// NamePage Component
const NamePage = () => {
    const { user } = useUser();

    return (
        <div>
            <h1>Name Page</h1>
            <p>Your name is: {user.name}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

// App Component
const App = () => {
    const [user, setUser] = useState({ name: "" });

    return (
        <Router>
            <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/name" element={<NamePage />} />
                </Routes>
            </UserContext.Provider>
        </Router>
    );
};

export default App;
