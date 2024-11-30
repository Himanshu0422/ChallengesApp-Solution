import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/settings">Settings</Link>
    </nav>
    <Routes>
      <Route path="profile" element={<h2>Profile Page</h2>} />
      <Route path="settings" element={<h2>Settings Page</h2>} />
    </Routes>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
