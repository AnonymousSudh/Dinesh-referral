import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';
import MobileBottomCTA from '../components/MobileBottomCTA/MobileBottomCTA';

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '20px' }}>
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomCTA />
    </div>
  );
};

export default ContactPage;
