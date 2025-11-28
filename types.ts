export interface CompanyInfo {
  name: string;
  nameEn: string;
  establishment: string;
  capital: string;
  location: string;
  phone: string;
  representative: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  url: string;
  tags: string[];
}

export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}