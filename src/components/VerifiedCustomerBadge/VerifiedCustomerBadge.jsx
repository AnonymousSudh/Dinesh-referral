import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './VerifiedCustomerBadge.module.css';

/**
 * Reusable Verified Customer Badge
 * Applies a trustworthy badge style only for confirmed candidate experiences
 */
export const VerifiedCustomerBadge = ({ text = "Verified Customer", size = "normal" }) => {
  return (
    <span className={`${styles.badge} ${size === 'small' ? styles.small : ''}`}>
      <CheckCircle2 size={14} className={styles.icon} />
      <span>{text}</span>
    </span>
  );
};

export default VerifiedCustomerBadge;
