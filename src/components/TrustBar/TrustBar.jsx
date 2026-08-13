import React from 'react';
import { Users, Video, ShieldAlert, MessageCircle, Star } from 'lucide-react';
import { business } from '../../config/business';
import styles from './TrustBar.module.css';

export const TrustBar = () => {
  const trustHighlights = [
    { icon: Users, label: "Real Customers" },
    { icon: Video, label: "Video Testimonials" },
    { icon: ShieldAlert, label: "Referral Proof" },
    { icon: MessageCircle, label: "Direct Communication" }
  ];

  return (
    <section className={styles.trustBarSection}>
      <div className={styles.container}>
        {/* Horizontal Trust Badges Ribbon */}
        <div className={styles.ribbonGrid}>
          {trustHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={idx}>
                <div className={styles.ribbonItem}>
                  <Icon size={18} className={styles.ribbonIcon} />
                  <span className={styles.ribbonLabel}>{item.label}</span>
                </div>
                {idx < trustHighlights.length - 1 && (
                  <span className={styles.dotSeparator}>•</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Statistical Metrics Grid (Configured from data) */}
        <div className={styles.statsGrid}>
          {business.trustMetrics.map((metric, idx) => (
            <div key={idx} className={styles.statCard}>
              <span className={styles.statValue}>
                {metric.value.includes('★') ? (
                  <>
                    {metric.value.replace('★', '')} <Star size={20} className={styles.starIcon} fill="#F59E0B" />
                  </>
                ) : (
                  metric.value
                )}
              </span>
              <span className={styles.statLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
