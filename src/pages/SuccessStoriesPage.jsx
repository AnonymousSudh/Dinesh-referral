import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import SuccessStories from '../components/SuccessStories/SuccessStories';
import WhatsAppCTA from '../components/WhatsAppCTA/WhatsAppCTA';
import Footer from '../components/Footer/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';
import MobileBottomCTA from '../components/MobileBottomCTA/MobileBottomCTA';

export const SuccessStoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '20px' }}>
        <SuccessStories />
        <WhatsAppCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomCTA />
    </div>
  );
};

export default SuccessStoriesPage;
