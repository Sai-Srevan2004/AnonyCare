import React from 'react';
import './PageComps.css';

const MissionSection = () => {
  return (
    <div className="mission-container" id='mission'>
      {/* First Div: Mission Section */}
      <div className="mission-header">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-description">
          We aim to create a safe, anonymous platform where individuals can share their mental health challenges, connect with others, and seek support to foster well-being and resilience.
        </p>
      </div>

      {/* Second Div: Grid Section */}
      <div className="mission-grid">
        <div className="grid-item">
          <img
            src="https://via.placeholder.com/150"
            alt="Mission 1"
            className="grid-img"
          />
          <p className="grid-text">Build Awareness</p>
        </div>
        <div className="grid-item">
          <img
            src="https://via.placeholder.com/150"
            alt="Mission 2"
            className="grid-img"
          />
          <p className="grid-text">Foster Connections</p>
        </div>
        <div className="grid-item">
          <img
            src="https://via.placeholder.com/150"
            alt="Mission 3"
            className="grid-img"
          />
          <p className="grid-text">Encourage Open Dialogues</p>
        </div>
        <div className="grid-item">
          <img
            src="https://via.placeholder.com/150"
            alt="Mission 4"
            className="grid-img"
          />
          <p className="grid-text">Provide Resources</p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
