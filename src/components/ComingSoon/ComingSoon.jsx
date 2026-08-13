import React from 'react';
import { MessageSquare, ShieldCheck, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { business, openWhatsApp } from '../../config/business';
import dineshImg from '../../assets/Dinesh.jpeg';
import styles from './ComingSoon.module.css';

export const ComingSoon = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Background Decorator Gradients */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className={styles.contentWrapper}>
        {/* Top Brand Header */}
        <header className={styles.brandHeader}>
          <div className={styles.logoBadge}>DR</div>
          <div className={styles.brandMeta}>
            <h2 className={styles.businessName}>{business.name}</h2>
            <span className={styles.brandTagline}>
              <ShieldCheck size={13} className={styles.shieldIcon} />
              {business.brand}
            </span>
          </div>
        </header>

        {/* Coming Soon Pill Badge */}
        <div className={styles.comingSoonBadgeRow}>
          <div className={styles.comingSoonPill}>
            <span className={styles.pulseDot} />
            <Clock size={14} />
            <span>Portal Launching Soon</span>
          </div>
        </div>

        {/* Main Title & Hero Copy Requested by User */}
        <main className={styles.mainHero}>
          <h1 className={styles.mainTitle}>
            Looking for a <span className={styles.highlight}>Referral?</span>
          </h1>

          <h2 className={styles.subTitle}>
            Connect Through Our Professional Network.
          </h2>

          <p className={styles.description}>
            We help candidates connect with referral opportunities through our network of professionals working across different companies.
          </p>

          {/* Primary WhatsApp Action */}
          <div className={styles.ctaGroup}>
            <button
              className={styles.whatsappPrimaryBtn}
              onClick={() => openWhatsApp("Hello Dinesh Career Guidance 👋 I would like to inquire about referral opportunities.")}
            >
              <MessageSquare size={22} />
              <span>Connect on WhatsApp</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className={styles.trustNote}>
            <ShieldCheck size={16} className={styles.checkIcon} />
            <span>Direct WhatsApp assistance with founder {business.founder}</span>
          </div>
        </main>

        {/* Founder Card Footer */}
        <footer className={styles.founderFooter}>
          <div className={styles.founderCard}>
            <img
              src={dineshImg}
              alt={business.founder}
              className={styles.founderAvatar}
            />
            <div className={styles.founderDetails}>
              <h3 className={styles.founderName}>{business.founder}</h3>
              <p className={styles.founderRole}>Founder — {business.name}</p>
            </div>
            <div className={styles.verifiedTag}>
              <Sparkles size={14} />
              <span>Verified Founder</span>
            </div>
          </div>

          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ComingSoon;
