import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-screen">
      <h1>WORKSPACE</h1>
      <div className="dashboard-grid">
        <div className="nav-card">
          <h3>Planner</h3>
          <p>Planificador de bloques de tiempo diario.</p>
          <button className="nav-btn" onClick={() => navigate('/planner')}>ABRIR</button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;