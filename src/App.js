import React from 'react';
import Course from './Components/Course/Course';
import './App.css';

function App() {
  return (
    <div className="all-content">
      <div className="header text-center text-white bg-info">
        <h3>Welcome to <span className="design text-warning">Web Design & Development</span> Courses</h3>
        <p className="lead pb-2">Learn everything you need to know from us</p>
      </div>
      <Course></Course>
    </div>
  );
}

export default App;
