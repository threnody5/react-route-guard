/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Protected from './Component/Protected/Protected';
import Unprotected from './Component/Unprotected/Unprotected';

import './App.css';

function App() {
  return (
    <Router>
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
