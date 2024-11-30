import React from "react";
import { BrowserRouter as Router, Route, Link, useParams, Routes } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
};

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Routes>
        <Route path="/user/:id" component={User} />
      </Routes>
    </Router>
  );
};

export default App;
