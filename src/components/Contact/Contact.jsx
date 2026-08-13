import React, { useState } from 'react';
import { Phone, MessageSquare, Send, User, Briefcase, Award, FileText, CheckCircle2 } from 'lucide-react';
import { business, openWhatsApp } from '../../config/business';
import styles from './Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    currentRole: '',
    experience: '',
    lookingFor: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    const formattedMessage = `Hello Dinesh Career Guidance,

I would like to enquire about a referral.

Full Name: ${formData.name}
Phone: ${formData.phone}
Current Role: ${formData.currentRole || 'N/A'}
Experience: ${formData.experience || 'N/A'}
Looking For: ${formData.lookingFor || 'Referral Opportunity'}

Message:
${formData.message || 'I am interested in available referral opportunities in your network.'}`;

    openWhatsApp(formattedMessage);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="section-container">
        <div className="section-title-group">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-heading">Contact Dinesh Career Guidance</h2>
          <p className="section-subtitle">
            The fastest way to reach us is through WhatsApp or direct call. Fill out the quick form below to launch your query directly in WhatsApp.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Business Details Card */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.logoBadge}>DR</div>
                <div>
                  <h3 className={styles.businessName}>{business.name}</h3>
                  <p className={styles.brandName}>{business.brand}</p>
                </div>
              </div>

              <div className={styles.infoDetailsList}>
                <div className={styles.infoRow}>
                  <User size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>Founder</span>
                    <p className={styles.infoValue}>{business.founder}</p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <Phone size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>Direct Phone</span>
                    <p className={styles.infoValue}>{business.phone}</p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <MessageSquare size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>WhatsApp Support</span>
                    <p className={styles.infoValue}>Direct chat assistance</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.infoActions}>
                <button
                  className={styles.whatsappPrimaryBtn}
                  onClick={() => openWhatsApp()}
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Now</span>
                </button>

                <a href={`tel:${business.rawPhone}`} className={styles.callSecondaryBtn}>
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>

              <div className={styles.fastResponseNote}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Fast responses via WhatsApp within business hours</span>
              </div>
            </div>
          </div>

          {/* Right Quick WhatsApp Form */}
          <div className={styles.formCol}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Send Enquiry via WhatsApp</h3>
              <p className={styles.formSubtitle}>
                Submitting this form redirects you directly to WhatsApp with your details prefilled.
              </p>

              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name *</label>
                <div className={styles.inputWrapper}>
                  <User size={16} className={styles.inputIcon} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                  <div className={styles.inputWrapper}>
                    <Phone size={16} className={styles.inputIcon} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="experience" className={styles.label}>Experience</label>
                  <div className={styles.inputWrapper}>
                    <Award size={16} className={styles.inputIcon} />
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      placeholder="e.g. 3 Years"
                      value={formData.experience}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="currentRole" className={styles.label}>Current Role</label>
                  <div className={styles.inputWrapper}>
                    <Briefcase size={16} className={styles.inputIcon} />
                    <input
                      type="text"
                      id="currentRole"
                      name="currentRole"
                      placeholder="e.g. React Developer"
                      value={formData.currentRole}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="lookingFor" className={styles.label}>Looking For</label>
                  <div className={styles.inputWrapper}>
                    <FileText size={16} className={styles.inputIcon} />
                    <input
                      type="text"
                      id="lookingFor"
                      name="lookingFor"
                      placeholder="e.g. Senior Frontend Referral"
                      value={formData.lookingFor}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message / Questions</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us any specific requirements or questions..."
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Send size={18} />
                <span>Continue on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
