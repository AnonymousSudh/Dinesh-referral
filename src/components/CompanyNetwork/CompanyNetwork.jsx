import React from 'react';
import { Code, TrendingUp, Briefcase, Layers, Users, Info } from 'lucide-react';
import { industries, disclaimerText } from '../../data/companies';
import styles from './CompanyNetwork.module.css';

const iconMap = {
  Code,
  TrendingUp,
  Briefcase,
  Layers
};

export const CompanyNetwork = () => {
  return (
    <section className={styles.networkSection}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Industry Connections</span>
          <h2 className="section-heading">Our Referral Network</h2>
          <p className="section-subtitle">
            Our network includes professionals working across different companies and industries.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className={styles.grid}>
          {industries.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Users;
            return (
              <div key={ind.id} className={styles.card}>
                <div className={styles.iconBox}>
                  <IconComponent size={28} />
                </div>
                <h3 className={styles.industryName}>{ind.name}</h3>
                <p className={styles.industryDesc}>{ind.description}</p>

                <div className={styles.examplesList}>
                  {ind.examples.map((item, i) => (
                    <span key={i} className={styles.examplePill}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <Users size={14} className={styles.userIcon} />
                  <span>{ind.count}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Truthful Network Statement */}
        <div className={styles.networkStatement}>
          <Info size={18} className={styles.infoIcon} />
          <p className={styles.statementText}>
            <strong>Transparent Communication:</strong> {disclaimerText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyNetwork;
