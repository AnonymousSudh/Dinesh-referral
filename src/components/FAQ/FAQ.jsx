import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqList } from '../../data/faq';
import styles from './FAQ.module.css';

export const FAQ = () => {
  const [openId, setOpenId] = useState(1); // Default open first item

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Clarity & Transparency</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get clear answers regarding job referrals, candidate expectations, and direct communication.
          </p>
        </div>

        {/* Accordion List */}
        <div className={styles.accordionContainer}>
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.accordionItem} ${isOpen ? styles.activeItem : ''}`}
              >
                <button
                  className={styles.questionBtn}
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.questionLeft}>
                    <HelpCircle size={20} className={styles.helpIcon} />
                    <span className={styles.questionText}>{item.question}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className={styles.answerBox}>
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
