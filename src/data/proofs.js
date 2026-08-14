import eImg1 from './emailScreenShot/WhatsApp Image 2026-08-12 at 10.51.34 PM.jpeg';
import eImg2 from './emailScreenShot/WhatsApp Image 2026-08-12 at 10.51.50 PM.jpeg';
import eImg3 from './emailScreenShot/WhatsApp Image 2026-08-12 at 3.17.18 PM.jpeg';
import eImg4 from './emailScreenShot/WhatsApp Image 2026-08-12 at 3.17.34 PM.jpeg';
import eImg5 from './emailScreenShot/WhatsApp Image 2026-08-12 at 3.19.13 PM.jpeg';

import wImg1 from './websiteScreenshot/WhatsApp Image 2026-08-12 at 10.51.13 PM.jpeg';
import wImg2 from './websiteScreenshot/WhatsApp Image 2026-08-12 at 10.53.03 PM.jpeg';
import wImg3 from './websiteScreenshot/WhatsApp Image 2026-08-12 at 3.18.06 PM.jpeg';
import wImg4 from './websiteScreenshot/WhatsApp Image 2026-08-12 at 3.18.36 PM.jpeg';

import vVid1 from './video/WhatsApp Video 2026-08-12 at 10.52.40 PM.mp4';
import vVid2 from './video/WhatsApp Video 2026-08-12 at 3.16.05 PM.mp4';
import vVid3 from './video/WhatsApp Video 2026-08-12 at 3.16.18 PM.mp4';
import vVid4 from './video/WhatsApp Video 2026-08-12 at 3.16.32 PM.mp4';
import vVid5 from './video/WhatsApp Video 2026-08-12 at 3.16.45 PM.mp4';
import vVid6 from './video/WhatsApp Video 2026-08-12 at 3.17.02 PM.mp4';
import vVid7 from './video/WhatsApp Video 2026-08-12 at 3.18.58 PM.mp4';

// Proof Gallery Data - Categorized by Content Type, Size, and Orientation
// Categories: emailScreenshot (Portrait/Tall), websiteScreenshot (Landscape/Wide), video (Video Player)

export const proofCategories = [
  { id: "all", label: "All Proofs" },
  { id: "emailScreenshot", label: "Email Screenshots" },
  { id: "websiteScreenshot", label: "Website Portals" },
  { id: "video", label: "Video Proofs" }
];

export const proofs = [
  // 1. Email Screenshots
  {
    id: "e1",
    title: "Official Referral Email",
    category: "emailScreenshot",
    type: "email",
    orientation: "portrait",
    aspectRatio: "3 / 4",
    date: "Recent",
    description: "Official automated email notification confirming candidate referral.",
    privacyMasked: true,
    image: eImg1,
    badge: "Email Screenshot"
  },
  {
    id: "e2",
    title: "Referral Confirmation",
    category: "emailScreenshot",
    type: "email",
    orientation: "portrait",
    aspectRatio: "3 / 4",
    date: "Recent",
    description: "Confirmation of successful candidate submission.",
    privacyMasked: true,
    image: eImg2,
    badge: "Email Screenshot"
  },
  {
    id: "e3",
    title: "Application Status Update",
    category: "emailScreenshot",
    type: "email",
    orientation: "portrait",
    aspectRatio: "3 / 4",
    date: "Recent",
    description: "Direct email update showing referral status.",
    privacyMasked: true,
    image: eImg3,
    badge: "Email Screenshot"
  },
  {
    id: "e4",
    title: "Candidate Update",
    category: "emailScreenshot",
    type: "email",
    orientation: "portrait",
    aspectRatio: "3 / 4",
    date: "Recent",
    description: "Email communication detailing next steps.",
    privacyMasked: true,
    image: eImg4,
    badge: "Email Screenshot"
  },
  {
    id: "e5",
    title: "Offer & Registration",
    category: "emailScreenshot",
    type: "email",
    orientation: "portrait",
    aspectRatio: "3 / 4",
    date: "Recent",
    description: "Details concerning candidate profile registration and offer progression.",
    privacyMasked: true,
    image: eImg5,
    badge: "Email Screenshot"
  },

  // 2. Website Screenshots
  {
    id: "w1",
    title: "Internal Portal Dashboard",
    category: "websiteScreenshot",
    type: "website",
    orientation: "landscape",
    aspectRatio: "16 / 9",
    date: "Recent",
    description: "Screenshot showing active referral tracking within the portal.",
    privacyMasked: true,
    image: wImg1,
    badge: "Website Screenshot"
  },
  {
    id: "w2",
    title: "Referral Status Page",
    category: "websiteScreenshot",
    type: "website",
    orientation: "landscape",
    aspectRatio: "16 / 9",
    date: "Recent",
    description: "Application tracking snapshot demonstrating real referral progress.",
    privacyMasked: true,
    image: wImg2,
    badge: "Website Screenshot"
  },
  {
    id: "w3",
    title: "Candidate Profile System",
    category: "websiteScreenshot",
    type: "website",
    orientation: "landscape",
    aspectRatio: "16 / 9",
    date: "Recent",
    description: "View of the candidate's active profile in the employer system.",
    privacyMasked: true,
    image: wImg3,
    badge: "Website Screenshot"
  },
  {
    id: "w4",
    title: "Application Confirmation",
    category: "websiteScreenshot",
    type: "website",
    orientation: "landscape",
    aspectRatio: "16 / 9",
    date: "Recent",
    description: "Final confirmation screen indicating verified successful referral.",
    privacyMasked: true,
    image: wImg4,
    badge: "Website Screenshot"
  },

  // 3. Video Proofs
  {
    id: "v1",
    title: "Video Testimonial 1",
    category: "video",
    type: "video",
    orientation: "portrait",
    aspectRatio: "9 / 16",
    date: "Recent",
    videoUrl: vVid1,
    description: "Candidate video sharing their experience connecting with Dinesh Career Guidance.",
    privacyMasked: false,
    badge: "Video Proof"
  },
  {
    id: "v2",
    title: "Video Testimonial 2",
    category: "video",
    type: "video",
    orientation: "portrait",
    aspectRatio: "9 / 16",
    date: "Recent",
    videoUrl: vVid2,
    description: "A successful referral sharing their journey and offer details.",
    privacyMasked: false,
    badge: "Video Proof"
  },
  {
    id: "v3",
    title: "Video Testimonial 3",
    category: "video",
    type: "video",
    orientation: "portrait",
    aspectRatio: "9 / 16",
    date: "Recent",
    videoUrl: vVid3,
    description: "Feedback regarding the professional networking and referral system.",
    privacyMasked: false,
    badge: "Video Proof"
  },
  {
    id: "v4",
    title: "Video Testimonial 4",
    category: "video",
    type: "video",
    orientation: "portrait",
    aspectRatio: "9 / 16",
    date: "Recent",
    videoUrl: vVid4,
    description: "Real-time walkthrough or discussion of the job placement outcome.",
    privacyMasked: false,
    badge: "Video Proof"
  },
  {
    id: "v5",
    title: "Video Testimonial 5",
    category: "video",
    type: "video",
    orientation: "portrait",
    aspectRatio: "9 / 16",
    date: "Recent",
    videoUrl: vVid5,
    description: "Candidate reflecting on the value of direct employee referrals.",
    privacyMasked: false,
    badge: "Video Proof"
  },
  {
    id: "v6",
    title: "Video Testimonial 6",
    category: "video",
    type: "video",
    orientation: "portrait",
    aspectRatio: "9 / 16",
    date: "Recent",
    videoUrl: vVid6,
    description: "Success story from an applicant placed through the platform.",
    privacyMasked: false,
    badge: "Video Proof"
  },
  {
    id: "v7",
    title: "Video Testimonial 7",
    category: "video",
    type: "video",
    orientation: "portrait",
    aspectRatio: "9 / 16",
    date: "Recent",
    videoUrl: vVid7,
    description: "Direct feedback from a recently hired candidate.",
    privacyMasked: false,
    badge: "Video Proof"
  }
];
