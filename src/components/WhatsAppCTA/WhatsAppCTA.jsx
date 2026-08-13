import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { business, openWhatsApp } from '../../config/business';
import styles from './WhatsAppCTA.module.css';

export const WhatsAppCTA = () => {
  const templateMessage = `Hello Dinesh Career Guidance 👋

I found you through your website.
I am looking for a referral opportunity.

Name: 
Current Role: 
Experience: 
Preferred Role: 
Preferred Company/Industry: `;

  return (
    <section className={styles.ctaSection}>
      <div className="section-container">
        <div className={styles.ctaBox}>
          <div className={styles.contentCol}>
            <span className={styles.tag}>Direct WhatsApp Connect</span>
            <h2 className={styles.title}>Looking For A Referral Opportunity?</h2>
            <p className={styles.subtitle}>
              Tell us about your experience, skills and preferred role. We'll let you know if there is a relevant opportunity within our referral network.
            </p>

            {/* Large WhatsApp Action Button */}
            <div className={styles.actionGroup}>
              <button
                className={styles.largeWhatsappBtn}
                onClick={() => openWhatsApp(templateMessage)}
              >
                <MessageSquare size={24} />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={22} />
              </button>
              <span className={styles.subtext}>Usually the easiest way to contact us.</span>
            </div>

            <div className={styles.perksList}>
              <div className={styles.perk}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Direct Founder Response</span>
              </div>
              <div className={styles.perk}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>No Spam or Registration</span>
              </div>
              <div className={styles.perk}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Fast Profile Guidance</span>
              </div>
            </div>
          </div>

          {/* Pre-formatted Message Preview */}
          <div className={styles.previewCol}>
            <div className={styles.previewCard}>
              <div className={styles.previewHeader}>
                <MessageSquare size={16} />
                <span>WhatsApp Message Format</span>
              </div>
              <pre className={styles.previewCode}>{templateMessage}</pre>
              <div className={styles.previewFooter}>
                <span>Clicking 'Chat on WhatsApp' opens this template automatically</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
