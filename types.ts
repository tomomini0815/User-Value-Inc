import React from 'react';

/**
 * Basic company information structure.
 * Used in Footer, About page, and Meta tags.
 */
export interface CompanyInfo {
  name: string;
  nameEn: string;
  establishment: string;
  capital: string;
  location: string;
  phone: string;
  representative: string;
}

/**
 * Service offering item.
 * Displayed in the Services section/page.
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string; // URL to the service abstract image
  tags: string[]; // Tech stack tags (e.g., 'React', 'Next.js')
}

/**
 * Proprietary Product/Project item.
 * Represents in-house SaaS or major case studies.
 */
export interface ProjectItem {
  id: string;
  title: string;
  description: string; // Short description for cards
  longDescription: string; // Longer description for details
  image: string; // URL to the product screenshot/mockup
  url: string; // External link to the live project/demo
  tags: string[]; // Key features or technologies
}

/**
 * Valid page identifiers for routing.
 */
export type PageId = 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'service_web' | 'service_app' | 'service_uiux' | 'service_saas' | 'service_ai_web' | 'service_ai_app' | 'service_ai_saas';

/**
 * Navigation item structure for Header/Menu.
 */
export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}