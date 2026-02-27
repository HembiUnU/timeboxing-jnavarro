import React from 'react';
import '../App.css';

const TimeBoxer = () => {
  const hours = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="planner-view">
      <header className="planner-header">
        <div>
          <h1>DAILY TIMEBOXING</h1>
        </div>
        <div className="date-section">
          DATE: <input type="text" className="underline-input"/>
        </div>
      </header>

      <div className="main-layout">
        <div className="planner-section">
          <h2>Top Priorities</h2>
          {[1, 2, 3].map(n => (
            <div key={n} className="priority-box">
              <span>{n}</span>
              <input type="text" placeholder="..." />
            </div>
          ))}
          <h2 style={{marginTop: '40px'}}>Brain Dump</h2>
          <div className="dump-container">
            <textarea placeholder="Escribe tus ideas aquí..."></textarea>
          </div>
        </div>

        <div className="planner-section">
          <div className="time-grid-container">
            <div className="grid-header">
              <div>TIME</div>
              <div>:00</div>
              <div>:30</div>
            </div>
            {hours.map((h, i) => (
              <div key={i} className="grid-row">
                <div className="grid-time-label">{h} {i < 7 ? 'AM' : 'PM'}</div>
                <div className="grid-cell"><input type="text" /></div>
                <div className="grid-cell"><input type="text" /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeBoxer;