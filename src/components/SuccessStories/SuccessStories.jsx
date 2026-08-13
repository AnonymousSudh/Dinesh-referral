import React from 'react';
import { Briefcase, Calendar, CheckCircle, Clock, Award, Send } from 'lucide-react';
import { successStories } from '../../data/successStories';
import styles from './SuccessStories.module.css';

export const SuccessStories = () => {
  // Helper to render transparent status badge
  const renderStatusBadge = (statusType, statusText) => {
    switch (statusType) {
      case 'offer':
        return (
          <span className={`${styles.statusBadge} ${styles.badgeOffer}`}>
            <Award size={14} /> {statusText}
          </span>
        );
      case 'joined':
        return (
          <span className={`${styles.statusBadge} ${styles.badgeJoined}`}>
            <CheckCircle size={14} /> {statusText}
          </span>
        );
      case 'interview':
        return (
          <span className={`${styles.statusBadge} ${styles.badgeInterview}`}>
            <Clock size={14} /> {statusText}
          </span>
        );
      case 'submitted':
      default:
        return (
          <span className={`${styles.statusBadge} ${styles.badgeSubmitted}`}>
            <Send size={14} /> {statusText}
          </span>
        );
    }
  };

  return (
    <section id="success-stories" className={styles.storiesSection}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Candidate Journeys</span>
          <h2 className="section-heading">Referral Success Stories</h2>
          <p className="section-subtitle">
            Transparent milestones demonstrating candidate journeys through our direct referral network.
          </p>
        </div>

        {/* Stories Grid */}
        <div className={styles.grid}>
          {successStories.map((story) => (
            <div key={story.id} className={story.statusType === 'joined' || story.statusType === 'offer' ? `${styles.storyCard} ${styles.featuredCard}` : styles.storyCard}>
              <div className={styles.cardHeader}>
                <div className={styles.candidateProfile}>
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className={styles.avatarImg}
                    loading="lazy"
                  />
                  <div>
                    <h3 className={styles.name}>{story.name}</h3>
                    <p className={styles.experience}>{story.experience}</p>
                  </div>
                </div>
                {renderStatusBadge(story.statusType, story.status)}
              </div>

              <div className={styles.detailsBox}>
                <div className={styles.detailRow}>
                  <Briefcase size={15} className={styles.detailIcon} />
                  <span><strong>Target Role:</strong> {story.targetRole}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.tagPill}>{story.industry}</span>
                  <span className={styles.dateLabel}>
                    <Calendar size={12} /> {story.date}
                  </span>
                </div>
              </div>

              <p className={styles.storyText}>{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
