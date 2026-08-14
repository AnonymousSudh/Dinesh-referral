import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ShieldCheck, CheckCircle2, Star, ArrowRight, Eye, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { business, openWhatsApp } from '../../config/business';
import { reviews } from '../../data/reviews';
import VerifiedCustomerBadge from '../VerifiedCustomerBadge/VerifiedCustomerBadge';
import styles from './Hero.module.css';

export const Hero = () => {
  const trustPoints = [
    "Real Candidate Reviews",
    "Verified Customer Experiences",
    "Direct WhatsApp Support",
    "Transparent Referral Process"
  ];

  // Animated Review Carousel state
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextReview();
    }, 4500);
    return () => clearInterval(timer);
  }, [currentReviewIndex]);

  const handleNextReview = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
      setIsFading(false);
    }, 250);
  };

  const handlePrevReview = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsFading(false);
    }, 250);
  };

  const activeReview = reviews[currentReviewIndex];

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Left Text Column */}
          <div className={styles.contentCol}>
            <div className={styles.badgeGroup}>
              <span className={styles.trustBadge}>
                <ShieldCheck size={16} />
                <span>Professional Referral Network</span>
              </span>
              <span className={styles.founderTag}>By {business.founder}</span>
            </div>

            <h1 className={styles.mainTitle}>
              Looking for a <span className={styles.highlight}>Referral?</span>
            </h1>
            <h2 className={styles.subTitle}>
              Connect Through Our Professional Network.
            </h2>

            <p className={styles.description}>
              We help candidates connect with referral opportunities through our network of professionals working across different companies.
            </p>

            <p className={styles.trustNote}>
              Before you contact us, explore real candidate reviews, referral experiences, video testimonials, and proof from candidates who have already connected with us.
            </p>

            {/* Primary Action Buttons */}
            <div className={styles.ctaGroup}>
              <button
                className={styles.primaryWhatsappBtn}
                onClick={() => openWhatsApp()}
              >
                <MessageSquare size={20} />
                <span>Get Referral Help on WhatsApp</span>
                <ArrowRight size={18} />
              </button>

              <Link to="/reviews" className={styles.secondaryReviewBtn}>
                <Eye size={18} />
                <span>See Real Reviews</span>
              </Link>
            </div>

            {/* Small Trust Bullet Points */}
            <div className={styles.trustBulletsGrid}>
              {trustPoints.map((point, index) => (
                <div key={index} className={styles.bulletItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Customer Review Card Slider */}
          <div className={styles.visualCol}>
            <div className={styles.reviewSliderCard}>
              <div className={styles.sliderHeader}>
                <div className={styles.headerTag}>
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <span>Live Candidate Review</span>
                </div>
                <div className={styles.navControls}>
                  <button
                    onClick={handlePrevReview}
                    className={styles.sliderNavBtn}
                    aria-label="Previous Review"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextReview}
                    className={styles.sliderNavBtn}
                    aria-label="Next Review"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Animated Review Body */}
              <div className={`${styles.animatedReviewContent} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
                <div className={styles.reviewerMeta}>
                  <div
                    className={styles.reviewerAvatar}
                    style={activeReview.image ? {} : { backgroundColor: activeReview.color || '#1D4ED8' }}
                  >
                    {activeReview.image ? (
                      <img src={activeReview.image} alt={activeReview.name} className={styles.reviewerImage} />
                    ) : (
                      activeReview.initials
                    )}
                  </div>
                  <div>
                    <h3 className={styles.reviewerName}>{activeReview.name}</h3>
                    <p className={styles.reviewerRole}>{activeReview.role} • {activeReview.location}</p>
                  </div>
                </div>

                <div className={styles.ratingBadgeRow}>
                  <div className={styles.starsRow}>
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <VerifiedCustomerBadge text="Verified Review" size="small" />
                </div>

                <div className={styles.quoteWrapper}>
                  <Quote size={20} className={styles.quoteIcon} />
                  <p className={styles.reviewQuote}>"{activeReview.review}"</p>
                </div>
              </div>

              {/* Slider Dots */}
              <div className={styles.dotsRow}>
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${idx === currentReviewIndex ? styles.activeDot : ''}`}
                    onClick={() => {
                      setIsFading(true);
                      setTimeout(() => {
                        setCurrentReviewIndex(idx);
                        setIsFading(false);
                      }, 200);
                    }}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <div className={styles.cardFooterLink}>
                <Link to="/reviews" className={styles.viewAllReviewsLink}>
                  <span>Explore all candidate reviews</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
