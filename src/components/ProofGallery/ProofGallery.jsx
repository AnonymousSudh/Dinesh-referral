import React, { useState, useEffect } from 'react';
import { Eye, ShieldCheck, X, ChevronLeft, ChevronRight, Lock, Mail, Globe, Play, Volume2 } from 'lucide-react';
import { proofCategories, proofs } from '../../data/proofs';
import styles from './ProofGallery.module.css';

export const ProofGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const filteredProofs = selectedCategory === 'all'
    ? proofs
    : proofs.filter((p) => p.category === selectedCategory);

  // Keyboard navigation inside lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') {
        setActiveModalIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, filteredProofs]);

  const handleNext = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => (prev + 1) % filteredProofs.length);
    }
  };

  const handlePrev = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => (prev - 1 + filteredProofs.length) % filteredProofs.length);
    }
  };

  const currentProof = activeModalIndex !== null ? filteredProofs[activeModalIndex] : null;

  return (
    <section id="proof-gallery" className={styles.gallerySection}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Authentic Evidence</span>
          <h2 className="section-heading">See The Proof Yourself</h2>
          <p className="section-subtitle">
            Real emails, website portal confirmations, and video testimonials formatted according to their exact size and orientation.
          </p>
        </div>

        {/* Category Filters */}
        <div className={styles.filterBar}>
          {proofCategories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${selectedCategory === cat.id ? styles.activeFilter : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Proof Grid - Size & Orientation Aware */}
        <div className={styles.grid}>
          {filteredProofs.map((item, index) => {
            const isEmail = item.type === 'email';
            const isWebsite = item.type === 'website';
            const isVideo = item.type === 'video';

            return (
              <div
                key={item.id}
                className={`${styles.proofCard} ${isEmail ? styles.tallCard : styles.wideCard}`}
                onClick={() => setActiveModalIndex(index)}
              >
                {/* 1. Website Browser Window Mock Header */}
                {isWebsite && (
                  <div className={styles.browserHeader}>
                    <div className={styles.browserDots}>
                      <span className={styles.dotRed} />
                      <span className={styles.dotYellow} />
                      <span className={styles.dotGreen} />
                    </div>
                    <div className={styles.browserUrlBar}>
                      <Globe size={12} className={styles.globeIcon} />
                      <span>{item.portalUrl}</span>
                    </div>
                  </div>
                )}

                {/* 2. Email Header Bar */}
                {isEmail && (
                  <div className={styles.emailHeader}>
                    <div className={styles.emailSenderRow}>
                      <Mail size={14} className={styles.emailIcon} />
                      <span className={styles.emailSender}>{item.sender}</span>
                    </div>
                    <p className={styles.emailSubject}>{item.subject}</p>
                  </div>
                )}

                {/* Main Media Frame Container */}
                <div
                  className={styles.imageContainer}
                  style={{ aspectRatio: item.aspectRatio || (isEmail ? '3/4' : '16/9') }}
                >
                  {isVideo ? (
                    <video
                      src={`${item.videoUrl}#t=0.001`}
                      poster={item.poster}
                      className={styles.proofImage}
                      preload="metadata"
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.proofImage}
                      loading="lazy"
                    />
                  )}

                  {/* Overlay Hover State */}
                  <div className={styles.imageOverlay}>
                    <div className={styles.viewBadge}>
                      {isVideo ? <Play size={18} fill="#fff" /> : <Eye size={18} />}
                      <span>{isVideo ? 'Play Video Proof' : 'View Full Proof'}</span>
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className={styles.privacyBadge}>
                    <Lock size={12} />
                    <span>{item.privacyMasked ? 'Privacy Masked' : 'Verified'}</span>
                  </div>

                  <span className={styles.typeBadge}>{item.badge}</span>

                  {/* Video Play Indicator */}
                  {isVideo && (
                    <>
                      <div className={styles.videoPlayBtnCircle}>
                        <Play size={24} fill="#ffffff" color="#ffffff" />
                      </div>
                      <div className={styles.videoDurationBadge}>
                        <Volume2 size={12} />
                        <span>{item.duration}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Content Footer */}
                <div className={styles.cardContent}>
                  <span className={styles.dateLabel}>{item.date}</span>
                  <h3 className={styles.proofTitle}>{item.title}</h3>
                  <p className={styles.proofDesc}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal Player */}
      {currentProof && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModalIndex(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalCategoryTag}>{currentProof.badge}</span>
                <h3 className={styles.modalTitle}>{currentProof.title}</h3>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setActiveModalIndex(null)}
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>
            </div>

            <div className={styles.modalBody}>
              {/* If Video, render Video Player */}
              {currentProof.type === 'video' ? (
                <div className={styles.videoPlayerContainer}>
                  <video
                    src={currentProof.videoUrl}
                    poster={currentProof.poster}
                    controls
                    autoPlay
                    className={styles.videoElement}
                  >
                    Your browser does not support HTML video playback.
                  </video>
                </div>
              ) : (
                /* Else render Image Screenshot Viewer with orientation awareness */
                <div
                  className={`${styles.lightboxImageWrapper} ${currentProof.orientation === 'portrait' ? styles.portraitWrapper : styles.landscapeWrapper}`}
                >
                  <img
                    src={currentProof.image}
                    alt={currentProof.title}
                    className={styles.lightboxImage}
                  />
                </div>
              )}

              <div className={styles.lightboxMeta}>
                <div className={styles.privacyNotice}>
                  <ShieldCheck size={16} className={styles.privacyIcon} />
                  <span>{currentProof.details}</span>
                </div>
                <p className={styles.modalDesc}>{currentProof.description}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={handlePrev}
              aria-label="Previous Proof"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={handleNext}
              aria-label="Next Proof"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProofGallery;
