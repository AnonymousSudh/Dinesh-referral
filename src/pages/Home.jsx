import React, { useEffect } from 'react';
import ComingSoon from '../components/ComingSoon/ComingSoon';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page">
      <ComingSoon />
    </div>
  );
};

export default Home;
