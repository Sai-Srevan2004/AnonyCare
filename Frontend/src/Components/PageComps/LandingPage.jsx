import React from 'react';
import './PageComps.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="landing-title">Anonymous Mental Health Support</h1>
        <p className="landing-subtitle">
          Find a safe space to share your thoughts, connect anonymously, and seek support for your mental well-being.
        </p>
        <button className="landing-button">Get Started</button>
      </header>
      <div className="landing-image">
        <img 
          src="https://via.placeholder.com/500x300" 
          alt="Mental Health Support" 
          className="landing-img"
        />
      </div>
    </div>
  );
};

export default LandingPage;
