import React from 'react';
import './PageComps.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      
      <div className="first">
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


      <div className="landing-grid">
        {/* Resources Div */}
        <div className="landing-card">
          <img src="resources-icon.png" alt="Resources" />
          <h3>Resources</h3>
          <p>Explore guides, exercises, and tips for better mental health.</p>
          <a href="#resources">Learn More</a>
        </div>

        {/* Success Stories Div */}
        <div className="landing-card">
          <img src="stories-icon.png" alt="Success Stories" />
          <h3>Success Stories</h3>
          <p>Read inspiring anonymous testimonials from our community.</p>
          <a href="#stories">Read Stories</a>
        </div>

        {/* Community Div */}
        <div className="landing-card">
          <img src="community-icon.png" alt="Community" />
          <h3>No of users</h3>
          <p>1000+</p>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
