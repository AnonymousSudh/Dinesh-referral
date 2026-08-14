import React, { useState, useEffect } from 'react';
import { Play, Star, X, Volume2 } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import VerifiedCustomerBadge from '../VerifiedCustomerBadge/VerifiedCustomerBadge';
import styles from './VideoTestimonials.module.css';

export const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="video-testimonials" className={styles.section}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Video Experience</span>
          <h2 className="section-heading">Hear Directly From Candidates</h2>
          <p className="section-subtitle">
            Real candidates sharing their experience with Dinesh Career Guidance and how direct referral helped them.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.id} className={styles.videoCard}>
              {/* Thumbnail Container with Play Overlay */}
              <div
                className={styles.thumbnailWrapper}
                onClick={() => setActiveVideo(item)}
                role="button"
                tabIndex={0}
                aria-label={`Play video testimonial of ${item.name}`}
              >
                <video
                  src={`${item.videoUrl}#t=0.001`}
                  className={styles.posterImage}
                  preload="metadata"
                  muted
                  playsInline
                />
                <div className={styles.overlayGradient} />
                
                <div className={styles.playButtonCircle}>
                  <Play size={24} fill="#ffffff" color="#ffffff" className={styles.playIcon} />
                </div>

                <div className={styles.durationBadge}>
                  <Volume2 size={12} />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className={styles.cardBody}>
                <div className={styles.headerRow}>
                  <div>
                    <h3 className={styles.candidateName}>{item.name}</h3>
                    <p className={styles.candidateRole}>{item.role}</p>
                  </div>
                  <VerifiedCustomerBadge text="Verified Experience" size="small" />
                </div>

                <div className={styles.ratingStars}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <p className={styles.quoteText}>"{item.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal / Lightbox Player */}
      {activeVideo && (
        <div className={styles.modalBackdrop} onClick={() => setActiveVideo(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalMeta}>
                <h4>{activeVideo.name} — Video Testimonial</h4>
                <p>{activeVideo.role}</p>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setActiveVideo(null)}
                aria-label="Close Video Modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className={styles.videoPlayerContainer}>
              <video
                src={activeVideo.videoUrl}
                poster={activeVideo.thumbnail}
                controls
                autoPlay
                className={styles.videoElement}
              >
                Your browser does not support HTML video playback.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
