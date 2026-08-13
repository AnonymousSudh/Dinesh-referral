import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { business, openWhatsApp } from '../../config/business';
import styles from './MobileBottomCTA.module.css';

export const MobileBottomCTA = () => {
  return (
    <div className={styles.bottomBar}>
      <button
        className={styles.whatsappBtn}
        onClick={() => openWhatsApp()}
        aria-label="WhatsApp Us"
      >
        <MessageSquare size={18} />
        <span>WhatsApp Us</span>
      </button>

      <a
        href={`tel:${business.rawPhone}`}
        className={styles.callBtn}
        aria-label="Call Us"
      >
        <Phone size={18} />
        <span>Call Us</span>
      </a>
    </div>
  );
};

export default MobileBottomCTA;
