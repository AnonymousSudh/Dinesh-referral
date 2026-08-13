import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustBar from '../components/TrustBar/TrustBar';
import CompanyNetwork from '../components/CompanyNetwork/CompanyNetwork';
import VideoTestimonials from '../components/VideoTestimonials/VideoTestimonials';
import WhyTrustUs from '../components/WhyTrustUs/WhyTrustUs';
import Founder from '../components/Founder/Founder';
import WhatsAppCTA from '../components/WhatsAppCTA/WhatsAppCTA';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';
import MobileBottomCTA from '../components/MobileBottomCTA/MobileBottomCTA';
import Footer from '../components/Footer/Footer';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <CompanyNetwork />
        <VideoTestimonials />
        <WhyTrustUs />
        <Founder />
        <WhatsAppCTA />
      </main>
      <Footer />
      
      {/* Floating & Fixed Mobile Widgets */}
      <FloatingWhatsApp />
      <MobileBottomCTA />
    </div>
  );
};

export default Home;
