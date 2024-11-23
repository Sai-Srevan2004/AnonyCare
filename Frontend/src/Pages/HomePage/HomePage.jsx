import React from 'react'
import './HomePage.css'
import LandingPage from '../../Components/PageComps/LandingPage';
import MissionSection from '../../Components/PageComps/MissionSection';
import Features from '../../Components/PageComps/Features';
import EducationalContent from '../../Components/PageComps/EducationalContent';

const HomePage = () => {
   return (
    <>
    <LandingPage/>
     <MissionSection/>
     <Features/>
     <EducationalContent/>
    </>
  );
}

export default HomePage
