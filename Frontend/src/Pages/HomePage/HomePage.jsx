import React from 'react'
import './HomePage.css'
import LandingPage from '../../Components/PageComps/LandingPage';
import MissionSection from '../../Components/PageComps/MissionSection';
import Features from '../../Components/PageComps/Features';
import EducationalContent from '../../Components/PageComps/EducationalContent';
import HowItWorks from '../../Components/PageComps/HowItWorks';
import ShareExperience from '../../Components/PageComps/ShareExperience';

const HomePage = () => {
   return (
    <>
    <LandingPage/>
     <MissionSection/>
     <Features/>
     <EducationalContent/>
     <HowItWorks/>
     <ShareExperience/>
    </>
  );
}

export default HomePage
