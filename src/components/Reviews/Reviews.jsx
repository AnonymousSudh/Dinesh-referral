import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { reviews } from '../../data/reviews';
import VerifiedCustomerBadge from '../VerifiedCustomerBadge/VerifiedCustomerBadge';
import styles from './Reviews.module.css';

export const Reviews = () => {
  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Candidate Feedback</span>
          <h2 className="section-heading">Real Candidate Reviews</h2>
          <p className="section-subtitle">
            See what candidates say about their experience with Dinesh Career Guidance and our transparent referral process.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className={styles.grid}>
          {reviews.map((rev) => (
            <div key={rev.id} className={styles.reviewCard}>
              <div className={styles.cardHeader}>
                <div className={styles.avatarCol}>
                  <div
                    className={styles.avatarCircle}
                    style={{ backgroundColor: rev.color || '#1D4ED8' }}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h3 className={styles.name}>{rev.name}</h3>
                    <p className={styles.role}>{rev.role}</p>
                    <span className={styles.location}>
                      <MapPin size={12} /> {rev.location}
                    </span>
                  </div>
                </div>

                {rev.verified && <VerifiedCustomerBadge text="Verified Candidate" size="small" />}
              </div>

              <div className={styles.ratingRow}>
                <div className={styles.stars}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span className={styles.date}>{rev.date}</span>
              </div>

              <div className={styles.reviewBody}>
                <Quote size={20} className={styles.quoteIcon} />
                <p className={styles.reviewText}>"{rev.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
