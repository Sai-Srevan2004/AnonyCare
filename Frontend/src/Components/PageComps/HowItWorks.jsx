import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const HowItWorks = () => {
  const steps = [
    {
      title: "Join Anonymously",
      description:
        "Create an account without sharing personal details. Your privacy is our priority.",
      side: "left",
    },
    {
      title: "Connect with Others",
      description:
        "Chat with like-minded individuals who understand your struggles and experiences.",
      side: "right",
    },
    {
      title: "Access Resources",
      description:
        "Explore mental health guides, exercises, and professional advice tailored to your needs.",
      side: "left",
    },
    {
      title: "Share & Heal",
      description:
        "Tell your story or support others in a judgment-free environment.",
      side: "right",
    },
  ];

  return (
    <div style={{marginBottom:'20px'}}>
      {/* Heading */}
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', color: '#006680',marginBottom:'10px' }}>
        How It Works
      </h2>
      
      {/* Timeline */}
      <VerticalTimeline>
        {steps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ffffff7e', color: '#006680' }}  // Updated background color and text color
            contentArrowStyle={{ borderRight: '7px solid #006680' }}  // Updated arrow color
            date={step.title}
            iconStyle={{ background: '#006680', color: '#fff' }}  // Updated icon circle color
          >
            <h3 className="vertical-timeline-element-title">{step.title}</h3>
            <p>{step.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HowItWorks;
