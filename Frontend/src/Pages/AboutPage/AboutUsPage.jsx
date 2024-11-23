import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your confidential mental health support platform</p>
      </header>
      
      <section className="about-section">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to providing anonymous mental health support to those who need it most. We believe that everyone deserves a safe, judgment-free space to express their feelings and receive support. Our platform allows users to communicate freely with trained mental health experts and peers, helping them navigate tough moments and mental health challenges.
          </p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/600x400" alt="Mental health support" />
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-container-ab">
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Confidentiality" />
            <h3>Confidential Support</h3>
            <p>
              Your privacy is our priority. All conversations are kept strictly confidential to ensure a safe space for all.
            </p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Expert Guidance" />
            <h3>Real Time Chat</h3>
            <p>
            Our real-time chat feature connects you instantly with other users, providing quick and efficient support during moments of need. Whether you need someone to talk to or professional guidance, help is just a message away.
            </p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Peer Support" />
            <h3>Peer Support</h3>
            <p>
              Connect with others who understand your struggles. Peer-to-peer support creates a sense of community and empathy.
            </p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="24/7 Availability" />
            <h3>24/7 Availability</h3>
            <p>
              We are here whenever you need us. Our platform is available around the clock, ensuring help is always at hand.
            </p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Join Us Today</h2>
        <p>
          Whether you're looking for support or looking to offer support to others, our platform is here for you. Join today and begin your journey to better mental well-being.
        </p>
        <button>Get Started</button>
      </section>
    </div>
  );
};

export default AboutUsPage;
