/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Protected from './Component/Protected/Protected';
import Unprotected from './Component/Unprotected/Unprotected';

import './App.css';

function App() {
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
