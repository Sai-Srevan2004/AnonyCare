import React from 'react';
import './PageComps.css'; // Make sure to create this CSS file for styling

const Features = () => {
    return (
        <div className="features-container">
          <h2 className="features-heading">Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>24/7 Availability</h3>
              <p>Access the platform anytime, anywhere, without interruption.</p>
            </div>
            <div className="feature-item">
              <h3>Secure and Private Communication</h3>
              <p>Ensure your messages and data are fully protected.</p>
            </div>
            <div className="feature-item">
              <h3>Real-time Chat or Message Boards</h3>
              <p>Engage with others instantly using chat or message boards.</p>
            </div>
            <div className="feature-item">
              <h3>Peer-to-Peer Support</h3>
              <p>Get help from both peers for personalized guidance.</p>
            </div>
          </div>
        </div>
      );
};

export default Features;
