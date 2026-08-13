import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Clock, ArrowUpRight } from 'lucide-react';
import { business } from '../../config/business';
import dineshImg from '../../assets/Dinesh.jpeg';
import styles from './ComingSoon.module.css';

export const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  // 24-Hour Countdown from today's 12:00 AM
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(0, 0, 0, 0);
      target.setDate(target.getDate() + 1);
      const diff = target.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          hours: Math.floor(diff / (1000 * 60 * 60)),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  // Interactive gradient follow cursor
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div
      className={styles.scene}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated mesh gradient background that follows cursor */}
      <div
        className={styles.meshGradient}
        style={{
          '--mx': `${mousePos.x}%`,
          '--my': `${mousePos.y}%`,
        }}
      />

      {/* Floating orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Grain texture overlay */}
      <div className={styles.grain} />

      {/* Top Navigation Bar */}
      <header className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.brand}>
            <div className={styles.logoMark}>
              <span>DR</span>
            </div>
            <div className={styles.brandText}>
              <h2 className={styles.brandName}>{business.name}</h2>
              <span className={styles.brandSub}>
                <ShieldCheck size={12} />
                {business.brand}
              </span>
            </div>
          </div>

          <div className={styles.founderChip}>
            <img src={dineshImg} alt={business.founder} className={styles.founderImg} />
            <div className={styles.founderMeta}>
              <span className={styles.founderName}>{business.founder}</span>
              <span className={styles.founderTitle}>Founder</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Status pill */}
        <div className={styles.statusPill}>
          <span className={styles.liveIndicator} />
          <Clock size={14} />
          <span>Launching Within 24 Hours</span>
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          <span className={styles.headlineRow}>Looking for a</span>
          <span className={styles.headlineAccent}>Referral?</span>
        </h1>

        <p className={styles.tagline}>
          Connect Through Our Professional Network
        </p>

        {/* Countdown Timer */}
        <div className={styles.countdown}>
          {[
            { value: timeLeft.hours, label: 'HRS' },
            { value: timeLeft.minutes, label: 'MIN' },
            { value: timeLeft.seconds, label: 'SEC' },
          ].map((unit, i) => (
            <React.Fragment key={unit.label}>
              {i > 0 && <span className={styles.separator}>:</span>}
              <div className={styles.timerCard}>
                <div className={styles.timerFlip}>
                  <span className={styles.timerDigit}>{pad(unit.value)}</span>
                </div>
                <span className={styles.timerLabel}>{unit.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        <p className={styles.bodyText}>
          We help candidates connect with referral opportunities through our
          network of professionals working across different companies.
        </p>

        {/* CTA Row */}
        <div className={styles.ctaRow}>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} {business.name}</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
