import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { openWhatsApp } from '../../config/business';
import styles from './FloatingWhatsApp.module.css';

export const FloatingWhatsApp = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className={styles.floatingContainer}>
      {/* Floating Button */}
      <button
        className={styles.floatingBtn}
        onClick={() => openWhatsApp()}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={24} className={styles.waIcon} />
        <span className={styles.desktopText}>Chat on WhatsApp</span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
