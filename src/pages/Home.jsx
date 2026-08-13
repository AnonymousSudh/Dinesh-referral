import React, { useEffect } from 'react';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page">
      <ComingSoon />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
