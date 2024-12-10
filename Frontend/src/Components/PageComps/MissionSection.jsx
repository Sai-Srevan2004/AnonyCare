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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3v37KXY6zN2aze3ysvBkpDZ6hdeRYgWydNa_lD4iWJXNU8OjVGMDZrLURK3JFduUjUg&usqp=CAU"
            alt="Mission 1"
            className="grid-img"
          />
          <p className="grid-text">Build Awareness</p>
        </div>
        <div className="grid-item">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-connecting-people-infographic_52683-76904.jpg"
            alt="Mission 2"
            className="grid-img"
          />
          <p className="grid-text">Foster Connections</p>
        </div>
        <div className="grid-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9CCKIpgpgqcQH52M_bLSsHSqMY9gsbfUhQ&s"
            alt="Mission 3"
            className="grid-img"
          />
          <p className="grid-text">Encourage Open Dialogues</p>
        </div>
        <div className="grid-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0065/3990/3094/files/Meriwool-Layers-Social-10-6-20-Draft-1_1024x1024.gif?v=1601659451"
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
