/** @format */

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Protected from './Component/Protected/Protected';
import Unprotected from './Component/Unprotected/Unprotected';
import Home from './Component/Home/Home';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    console.log(`loggedInUser: ${isAuthenticated}`);
  };

  const logout = () => {
    setIsAuthenticated(false);
    console.log(`loggedInUser: ${isAuthenticated}`);
  };

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Link to Home Page</Link>
          </li>
          <li>
            <Link to='/protected'>Link to Protected Page</Link>
          </li>
          <li>
            <Link to='/unprotected'>Link to Unprotected Page</Link>
          </li>
        </ul>
        <button onClick={login}>Login</button>
        <br />
        <button onClick={logout}>Logout</button>
      </div>
      <Routes>
        <Route
          path='/protected'
          component={Protected}
        />
        <Route
          path='/unprotected'
          component={Unprotected}
        />
      </Routes>
    </Router>
  );
}

export default App;
