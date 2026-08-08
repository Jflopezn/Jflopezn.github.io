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
  email: "tu-correo@gmail.com",

  // Social media links
  // Escribe solamente tu usuario, no la URL completa.
  socialLinks: {
    github: "TU_USUARIO_GITHUB",
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
  siteUrl: "https://TU_USUARIO.github.io/TU_REPOSITORIO",

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
  { href: "/#presentacion", label: "Presentación" },
  { href: "/#evidencias", label: "Evidencias" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];