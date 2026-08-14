import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';
import MobileBottomCTA from '../components/MobileBottomCTA/MobileBottomCTA';

export const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="content-container" style={{ padding: '120px 20px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', color: '#1e293b' }}>Privacy Policy</h1>
        <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Privacy Policy content will be updated here soon...
          </p>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomCTA />
    </div>
  );
};

export default PrivacyPolicyPage;
