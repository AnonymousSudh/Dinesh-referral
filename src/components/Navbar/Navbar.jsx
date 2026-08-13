import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { business, openWhatsApp } from '../../config/business';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Proof', path: '/proof' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand Logo Placeholder */}
        <Link to="/" className={styles.brand} onClick={handleLinkClick}>
          <div className={styles.logoBadge}>
            <span className={styles.logoText}>DR</span>
          </div>
          <div className={styles.brandDetails}>
            <span className={styles.businessName}>{business.name}</span>
            <span className={styles.brandTagline}>
              <ShieldCheck size={12} className={styles.shieldIcon} />
              {business.brand}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div className={styles.rightAction}>
          <button
            className={styles.whatsappBtn}
            onClick={() => openWhatsApp()}
            aria-label="Contact on WhatsApp"
          >
            <MessageSquare size={18} />
            <span>WhatsApp Us</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? `${styles.mobileNavLink} ${styles.activeMobileNavLink}` : styles.mobileNavLink
                  }
                  onClick={handleLinkClick}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className={styles.mobileCtaLi}>
              <button
                className={styles.mobileWhatsappBtn}
                onClick={() => {
                  openWhatsApp();
                  setMobileMenuOpen(false);
                }}
              >
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
