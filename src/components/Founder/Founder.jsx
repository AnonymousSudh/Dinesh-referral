import React from 'react';
import { MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { business, openWhatsApp } from '../../config/business';
import dineshImg from '../../assets/Dinesh.jpeg';
import styles from './Founder.module.css';

export const Founder = () => {
  const corePillars = [
    "Clear Communication",
    "Genuine Connections",
    "Complete Transparency",
    "Uncompromising Trust"
  ];

  return (
    <section className={styles.founderSection}>
      <div className="section-container">
        <div className={styles.founderCard}>
          <div className={styles.grid}>
            {/* Left Photo & Profile Column */}
            <div className={styles.photoCol}>
              <div className={styles.avatarWrapper}>
                <div className={styles.photoFrame}>
                  <img
                    src={dineshImg}
                    alt={business.founder}
                    className={styles.founderPhoto}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Biography Column */}
            <div className={styles.bioCol}>
              <span className={styles.tag}>
                Founder Spotlight
              </span>
              <h2 className={styles.founderName}>Meet {business.founder}</h2>
              <p className={styles.founderTitle}>
                Founder — {business.name} ({business.brand})
              </p>

              <p className={styles.bioText}>
                {business.name} was created to help job candidates understand and access professional referral opportunities through a trusted network.
              </p>

              <div className={styles.focusBox}>
                <h4 className={styles.focusHeader}>Our Core Philosophy:</h4>
                <div className={styles.pillarsGrid}>
                  {corePillars.map((pillar, idx) => (
                    <div key={idx} className={styles.pillarItem}>
                      <Check size={16} className={styles.checkIcon} />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.ctaWrapper}>
                <button
                  className={styles.whatsappBtn}
                  onClick={() => openWhatsApp(`Hello ${business.founder}, I found your profile on website and would like guidance on referrals.`)}
                >
                  <MessageSquare size={20} />
                  <span>Talk to Dinesh on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
