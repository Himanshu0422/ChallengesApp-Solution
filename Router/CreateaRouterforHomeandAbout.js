import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f5f5f5' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'blue' }}>About</Link>
      </nav>
      <Routes>
        <Route path="/" exact component={() => <h1>Home Page</h1>} />
        <Route path="/about" component={() => <h1>About Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
