import React from 'react';
import './PageComps.css'; // Make sure to create this CSS file for styling

const EducationalCards = () => {
 
    return (
        <>
        <h2 style={{textAlign:'center',fontSize:'2.5rem'}}>Educational Content</h2>
        <div className="cards-container">
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="Anxiety, Depression, Stress" className="card-img"/>
            <h3>Understanding Anxiety, Depression, and Stress</h3>
            <p>Learn about the symptoms, causes, and effects of anxiety, depression, and stress.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="Mental Health Tips" className="card-img"/>
            <h3>Tips to Manage Your Mental Health</h3>
            <p>Discover effective ways to take care of your mental health and find balance in life.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="Helping a Friend" className="card-img"/>
            <h3>How to Help a Friend in Need</h3>
            <p>Find out how you can offer support and help a friend who may be struggling with their mental health.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="Mindfulness" className="card-img"/>
            <h3>Mindfulness Practices</h3>
            <p>Learn about mindfulness techniques to help reduce stress and improve overall well-being.</p>
          </div>
        </div>
        </>
      );
};

export default EducationalCards;
