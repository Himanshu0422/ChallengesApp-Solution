import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authStatus, setAuthStatus] = useState("loggedOut");

    return (
        <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

const StatusDisplay = () => {
    const { authStatus } = useContext(AuthContext);
    return <h1>Status: {authStatus}</h1>;
};

const App = () => {
    const { setAuthStatus } = useContext(AuthContext);

    return (
        <div>
            <StatusDisplay />
            <button onClick={() => setAuthStatus("loggedIn")}>Log In</button>
            <button onClick={() => setAuthStatus("loggedOut")}>Log Out</button>
        </div>
    );
};

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
