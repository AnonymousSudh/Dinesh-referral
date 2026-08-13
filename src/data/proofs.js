// Proof Gallery Data - Categorized by Content Type, Size, and Orientation
// Categories: emailScreenshot (Portrait/Tall), websiteScreenshot (Landscape/Wide), video (Video Player)

export const proofCategories = [
  { id: "all", label: "All Proofs" },
  { id: "emailScreenshot", label: "Email Screenshots" },
  { id: "websiteScreenshot", label: "Website Portals" },
  { id: "video", label: "Video Proofs" }
];

export const proofs = [
  // 1. Email Screenshots (Portrait / Tall Aspect Ratio 3:4)
  {
    id: "e1",
    title: "Official Employee Referral Confirmation Email",
    category: "emailScreenshot",
    type: "email",
    orientation: "portrait",
    aspectRatio: "3 / 4",
    date: "August 2026",
    sender: "Corporate HR Referral Portal <referrals@company.com>",
    subject: "Candidate Application Referred Successfully - Ref #9842",
    description: "Official automated email notification sent to the internal referrer confirming the candidate's resume was submitted into the recruitment system.",
    privacyMasked: true,
    details: "Candidate ID: [MASKED-9842] | Position: Senior Software Engineer",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=1000",
    badge: "Email Screenshot"
  },
  {
    id: "e2",
    title: "HR Interview Invitation Email Update",
    category: "emailScreenshot",
    type: "email",
    orientation: "portrait",
    aspectRatio: "3 / 4",
    date: "July 2026",
    sender: "Talent Acquisition Team <hr@techfirm.com>",
    subject: "Invitation to Technical Interview Round 1",
    description: "Direct email update received by candidate after initial referral profile screening.",
    privacyMasked: true,
    details: "Candidate Email: c*******@gmail.com | Status: Round 1 Scheduled",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=1000",
    badge: "Email Screenshot"
  },
  {
    id: "e3",
    title: "Official Offer Letter Acknowledgment Email",
    category: "emailScreenshot",
    type: "email",
    orientation: "portrait",
    aspectRatio: "3 / 4",
    date: "June 2026",
    sender: "HR Operations <onboarding@enterprise.com>",
    subject: "Formal Employment Offer Letter & Joining Details",
    description: "Offer rollout confirmation email snippet shared by candidate with Dinesh Career Guidance.",
    privacyMasked: true,
    details: "Offer Ref: OL-2026-XXXX | Position: Backend Tech Lead",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=1000",
    badge: "Email Screenshot"
  },

  // 2. Website Screenshots (Landscape / Wide Aspect Ratio 16:9)
  {
    id: "w1",
    title: "Internal Referral Portal Dashboard",
    category: "websiteScreenshot",
    type: "website",
    orientation: "landscape",
    aspectRatio: "16 / 9",
    date: "August 2026",
    portalUrl: "https://internal-referrals.company-portal.com/dashboard",
    description: "Wide desktop browser screenshot showing active referral status 'Profile In Screening' inside the corporate employee portal.",
    privacyMasked: true,
    details: "Ref ID: #REF-2026-781 | Internal Referrer Verified",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=800",
    badge: "Website Screenshot"
  },
  {
    id: "w2",
    title: "Candidate Application Tracking Status Page",
    category: "websiteScreenshot",
    type: "website",
    orientation: "landscape",
    aspectRatio: "16 / 9",
    date: "July 2026",
    portalUrl: "https://careers.globaltech.com/my-applications/status",
    description: "Full portal status page screenshot displaying 'Referred by Employee - Interview In Progress'.",
    privacyMasked: true,
    details: "Application Ref: APP-88219 | Verified Portal Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=800",
    badge: "Website Screenshot"
  },

  // 3. Video Proofs (Video Player 16:9)
  {
    id: "v1",
    title: "Candidate Video Testimonial & Process Feedback",
    category: "video",
    type: "video",
    orientation: "landscape",
    aspectRatio: "16 / 9",
    date: "August 2026",
    duration: "1:15",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=800",
    description: "Real candidate video feedback sharing their experience connecting with Dinesh Career Guidance on WhatsApp.",
    privacyMasked: false,
    details: "Verified Video Testimonial | Software Professional",
    badge: "Video Proof"
  },
  {
    id: "v2",
    title: "Referral Success Journey & Offer Experience Video",
    category: "video",
    type: "video",
    orientation: "landscape",
    aspectRatio: "16 / 9",
    date: "July 2026",
    duration: "0:58",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=800",
    description: "Java Backend Developer sharing how direct referral enabled her profile to reach hiring teams.",
    privacyMasked: false,
    details: "Verified Video Testimonial | FinTech Specialist",
    badge: "Video Proof"
  }
];
