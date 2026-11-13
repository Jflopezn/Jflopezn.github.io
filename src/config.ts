/**
 * Site Configuration
 *
 * Customize this file to personalize your portfolio.
 */

export const SITE_CONFIG = {
  // Basic site information
  title: "Julian López",
  description: "Portfolio personal de Julian López",
  author: "Julian López",
  email: "jflopezn@unbosque.edu.co",

  // Social media links
  // Escribe solamente tu usuario, no la URL completa.
  socialLinks: {
    github: "Jflopezn",
    twitter: "",
    linkedin: "TU_USUARIO_LINKEDIN",
    youtube: "",
  },

  // Analytics
  googleAnalyticsId: "",

  // Locale settings
  language: "es",
  locale: "es-CO",

  // Site URL
  siteUrl: "https://github.com/Jflopezn/Jflopezn.github.io",

  // Default meta image for social sharing
  defaultOgImage: "/stock/default-og-image.jpg",

  // Posts per page for blog pagination
  postsPerPage: 10,

  // Enable/disable features
  features: {
    darkMode: true,
    analytics: true,
    sitemap: true,
  },
};

// Author information for structured data
export const AUTHOR_INFO = {
  name: SITE_CONFIG.author,
  email: SITE_CONFIG.email,
  url: SITE_CONFIG.siteUrl,
  jobTitle: "Systems Engineering Student",
  organization: "",
};

// Navigation menu items
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  {
    label: "PRESENTACIÓN",
    href: "/#presentacion"
  },
  {
    label: "EVIDENCIAS",
    href: "/evidencias"
  }
];