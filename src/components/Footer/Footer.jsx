import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageSquare, Phone, Heart } from 'lucide-react';
import { business, openWhatsApp } from '../../config/business';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="section-container">
        <div className={styles.topGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <div className={styles.logoBadge}>DR</div>
              <div>
                <h3 className={styles.businessName}>{business.name}</h3>
                <span className={styles.brandTagline}>{business.brand}</span>
              </div>
            </div>

            <p className={styles.brandDesc}>
              Connecting ambitious candidates with professional referral opportunities across top organizations.
            </p>

            <div className={styles.socialRow}>
              <button
                className={styles.socialBtn}
                onClick={() => openWhatsApp()}
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </button>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={`tel:${business.rawPhone}`}
                className={styles.socialBtn}
                aria-label="Direct Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/reviews">Candidate Reviews</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
              <li><Link to="/proof">Referral Proof</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business Info */}
          <div className={styles.infoCol}>
            <h4 className={styles.colTitle}>Business Details</h4>
            <p className={styles.infoLine}><strong>Founder:</strong> {business.founder}</p>
            <p className={styles.infoLine}><strong>Brand:</strong> {business.brand}</p>
            <p className={styles.infoLine}><strong>Primary Contact:</strong> WhatsApp Direct</p>
            <p className={styles.infoLine}><strong>Phone:</strong> {business.phone}</p>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className={styles.disclaimerBox}>
          <div className={styles.disclaimerHeader}>
            <ShieldCheck size={16} className={styles.shieldIcon} />
            <span>Legal Disclaimer</span>
          </div>
          <p className={styles.disclaimerText}>
            Dinesh Career Guidance provides referral assistance through its professional network. A referral does not guarantee an interview, offer, or employment. Recruitment and hiring decisions are made solely by the respective companies. Dinesh Career Guidance is not an official representative of any company unless explicitly stated.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Built for candidate trust & transparency <Heart size={14} className={styles.heartIcon} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
