import React from 'react'
import './HomePage.css'
import LandingPage from '../../Components/PageComps/LandingPage';
import MissionSection from '../../Components/PageComps/MissionSection';
import Features from '../../Components/PageComps/Features';
import EducationalContent from '../../Components/PageComps/EducationalContent';
import HowItWorks from '../../Components/PageComps/HowItWorks';
import ShareExperience from '../../Components/PageComps/ShareExperience';
import Footer from '../../Components/Footer'

const HomePage = () => {
   return (
    <>
    <LandingPage/>
     <MissionSection/>
     <Features/>
     <EducationalContent/>
     <HowItWorks/>
     <ShareExperience/>
     <Footer></Footer>
    </>
  );
}

export default HomePage
