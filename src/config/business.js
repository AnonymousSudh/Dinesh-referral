// Centralized Business Configuration for Dinesh Career Guidance
// All business details, contact information, and WhatsApp helpers live here.

export const business = {
  name: "Dinesh Career Guidance",
  brand: "Direct Referral",
  founder: "Dinesh Singh",

  // Raw phone number for calls (tel: URI)
  phone: "+91 8864822102",
  rawPhone: "918864822102",

  // WhatsApp configuration - Country code without +, spaces or hyphens
  whatsappNumber: "918864822102",

  // Default prefilled message
  whatsappMessage:
    "Hello Dinesh Career Guidance, I found you through your website and I would like to know about available referral opportunities.",

  // Instagram handle/link
  instagramUrl: "https://instagram.com/dinesh_career_guidance",
  instagramHandle: "@dinesh_career_guidance",

  // LinkedIn link
  linkedinUrl: "https://www.linkedin.com/in/dinesh-singh-aa75bb360/",

  // Quick stats configuration (Neutral, clean, non-fabricated)
  trustMetrics: [
    { label: "Candidates Connected", value: "100+" },
    { label: "Industry Professionals", value: "50+" },
    { label: "Verified Reviews", value: "4.9 ★" },
    { label: "Direct Support", value: "100%" }
  ]
};

/**
 * Generates official WhatsApp deep link URL with custom encoded message
 * @param {string} [customMessage] - Optional custom message string
 * @returns {string} Fully formatted wa.me URL
 */
export const getWhatsAppUrl = (customMessage) => {
  const text = customMessage || business.whatsappMessage;
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

/**
 * Opens WhatsApp in a new tab
 * @param {string} [customMessage]
 */
export const openWhatsApp = (customMessage) => {
  const url = getWhatsAppUrl(customMessage);
  window.open(url, "_blank", "noopener,noreferrer");
};
