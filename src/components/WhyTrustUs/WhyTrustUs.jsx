import React from 'react';
import { Users, ShieldCheck, MessageSquare, Eye, Share2, AlertCircle } from 'lucide-react';
import styles from './WhyTrustUs.module.css';

export const WhyTrustUs = () => {
  const trustReasons = [
    {
      icon: Users,
      title: "Real People",
      description: "See actual candidate profiles, names, and genuine experiences shared directly by candidates."
    },
    {
      icon: Eye,
      title: "Real Proof",
      description: "We show referral experiences, screenshots, testimonials, and portal updates instead of asking you to trust claims blindly."
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Communicate directly with founder Dinesh Singh through WhatsApp without middleman delays."
    },
    {
      icon: ShieldCheck,
      title: "Transparent Process",
      description: "We clearly explain what an employee referral can and cannot do upfront."
    },
    {
      icon: Share2,
      title: "Professional Network",
      description: "Our network includes professionals working across various companies and roles."
    },
    {
      icon: AlertCircle,
      title: "No False Job Guarantee",
      description: "Selection depends entirely on the hiring process of the respective company. We never sell fake promises."
    }
  ];

  return (
    <section className={styles.whySection}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Core Principles</span>
          <h2 className="section-heading">Why Candidates Trust Us</h2>
          <p className="section-subtitle">
            Built on honesty, transparency, and authentic customer experiences from day one.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className={styles.grid}>
          {trustReasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={styles.trustCard}>
                <div className={styles.iconCircle}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
