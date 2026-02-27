import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TimeBoxer from './components/TimeBoxer';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-main-wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/planner" element={<TimeBoxer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;