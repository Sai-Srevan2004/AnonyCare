import React from 'react';
import './PageComps.css'; // Make sure to create this CSS file for styling
import {Link} from 'react-router-dom'

const EducationalCards = () => {
 
    return (
        <>
        <h2 style={{textAlign:'center',fontSize:'2.5rem'}}>Educational Content</h2>
        <div className="cards-container">
          <div className="card" >
              <a href="https://neurolaunch.com/difference-between-stress-and-anxiety-and-depression/">
              <img  src="https://www.frontiersin.org/files/Articles/842378/fpsyg-13-842378-HTML/image_m/fpsyg-13-842378-g001.jpg" alt="Anxiety, Depression, Stress" className="card-img"/>
            <h3>Understanding Anxiety, Depression, and Stress</h3>
            <p>Learn about the symptoms, causes, and effects of anxiety, depression, and stress.</p>
              </a>
          </div>
          <div className="card">
            <a href="https://www.mind.org.uk/media-a/6152/mental-wellbeing-2020.pdf">
            <img  src="https://capitalflow.ie/wp-content/uploads/2021/10/Top-Tips-2.png" alt="Mental Health Tips" className="card-img"/>
            <h3>Tips to Manage Your Mental Health</h3>
            <p>Discover effective ways to take care of your mental health and find balance in life.</p>
            </a>
          </div>

          <div className="card">
           <a href="https://www.mindful.org/wp-content/uploads/2015/07/MindfulPractices-e-Booklet-v4-Jul15-VF.pdf">
           <img  src="https://www.findatopdoc.com/var/fatd/storage/images/_aliases/infographic_main/healthy-living/what-is-mindfulness-and-how-to-practice-mindful-breathing/404798-1-eng-US/What-is-Mindfulness-and-How-to-Practice-Mindful-Breathing.jpg" alt="Mindfulness" className="card-img"/>
            <h3>Mindfulness Practices</h3>
            <p>Learn about mindfulness techniques to help reduce stress and improve overall well-being.</p>
           </a>
          </div>
        </div>
        </>
      );
};

export default EducationalCards;
