import React from 'react';
import './PageComps.css';
import { Link } from 'react-router-dom';
import { ImUsers } from "react-icons/im";
import { MdAutoStories } from "react-icons/md";
import { TbMoodHappyFilled } from "react-icons/tb";


const LandingPage = () => {
  return (
    <div className="landing-container">
      
      <div className="first">
      <header className="landing-header">
        <h1 className="landing-title">Anonymous Mental Health Support</h1>
        <p className="landing-subtitle">
          Find a safe space to share your thoughts, connect anonymously, and seek support for your mental well-being.
        </p>
        <Link to='/chat'>        <button className="landing-button">Get Started</button>

        </Link>
      </header>
      <div className="landing-image">
        <img 
          src="https://meded.ucsf.edu/sites/meded.ucsf.edu/files/inline-images/mental%20health%20page.jpg"
          alt="Mental Health Support"
          className="landing-img"
        />
      </div>
      </div>


      <div className="landing-grid">
        {/* Resources Div */}
        <div className="landing-card">
        <TbMoodHappyFilled />
          <h3>Mood Tracking</h3>
          <p>Track your mood by giving daily mood</p>
          <Link to="/trackmood">Track Mood</Link>
        </div>

        {/* Success Stories Div */}
        <div className="landing-card">
        <MdAutoStories />
          <h3>Success Stories</h3>
          <p>Read inspiring anonymous testimonials from our community.</p>
          <Link to='/stories'>Read Stories</Link>
        </div>

        {/* Community Div */}
        <div className="landing-card">
        <ImUsers />
          <h3>No of users</h3>
          <p>1000+</p>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
