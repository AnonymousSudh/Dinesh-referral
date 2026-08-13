import React from 'react';
import { MessageSquare, UserCheck, Share2, BellRing, AlertTriangle } from 'lucide-react';
import styles from './ReferralProcess.module.css';

export const ReferralProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Send your profile/resume and requirement through WhatsApp.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Profile Understanding",
      description: "We understand your experience, skills, preferred role, and suitable opportunities.",
      icon: UserCheck,
    },
    {
      number: "03",
      title: "Referral Network",
      description: "When an appropriate opportunity is available within our professional network, we help connect your profile for referral consideration.",
      icon: Share2,
    },
    {
      number: "04",
      title: "Stay Updated",
      description: "We communicate directly with you regarding the referral process and available information.",
      icon: BellRing,
    },
  ];

  return (
    <section id="how-it-works" className={styles.processSection}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Transparent Flow</span>
          <h2 className="section-heading">How Does Direct Referral Work?</h2>
          <p className="section-subtitle">
            A simple, 4-step professional network process to help your profile reach internal referral portals.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.cardTop}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <div className={styles.iconCircle}>
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Clear Disclaimer Banner */}
        <div className={styles.disclaimerBox}>
          <div className={styles.disclaimerHeader}>
            <AlertTriangle size={22} className={styles.warningIcon} />
            <h4 className={styles.disclaimerTitle}>Important Disclaimer</h4>
          </div>
          <p className={styles.disclaimerText}>
            A referral can help your profile reach the relevant hiring process but does <strong>NOT guarantee selection, interview, or employment</strong>. Final hiring decisions are made entirely by the respective company based on their recruitment policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReferralProcess;
