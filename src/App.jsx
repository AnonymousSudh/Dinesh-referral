import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReviewsPage from './pages/ReviewsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ProofPage from './pages/ProofPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/proof" element={<ProofPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
