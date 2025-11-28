import { Layers, Smartphone, Monitor, Code, Zap, Globe, Cpu, Search } from 'lucide-react';
import { CompanyInfo, ServiceItem, NavItem, ProjectItem } from './types';

export const COMPANY_INFO: CompanyInfo & { email: string } = {
  name: "株式会社ユーザーバリュー",
  nameEn: "User Value Inc.",
  establishment: "2021年2月",
  capital: "500万円",
  location: "Kanagawa, JP",
  phone: "044-400-2258",
  representative: "恵良 友美",
  email: "uservalue2021@gmail.com"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: "Web App Development",
    description: "React, Next.js, Vue.jsなどのモダンフレームワークを駆使し、ビジネスの加速装置となるWebアプリケーションを構築。堅牢性と拡張性を兼ね備えたアーキテクチャで、長期的な価値を提供します。",
    icon: Monitor,
    // Abstract 3D shape / Code flow
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop", 
    tags: ["React", "Next.js", "TypeScript", "Vercel"]
  },
  {
    id: 's2',
    title: "Mobile App Production",
    description: "ユーザーの手のひらで最高の体験を。iOS / Androidネイティブ開発から、Flutterを用いたクロスプラットフォーム開発まで。直感的で中毒性のあるUI/UXを実現します。",
    icon: Smartphone,
    // Dark sleek glassmorphism
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop", 
    tags: ["iOS", "Android", "Flutter", "React Native"]
  },
  {
    id: 's3',
    title: "UI/UX Design & Audit",
    description: "データと感性の融合。ヒートマップ分析やユーザーインタビューに基づき、離脱率を改善。ブランドの世界観を体現する美しいインターフェースデザインを提供します。",
    icon: Layers,
    // Abstract fluid art, digital aesthetics
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tags: ["Figma", "User Research", "Design Systems"]
  },
  {
    id: 's4',
    title: "SaaS Product Design",
    description: "複雑な業務フローをシンプルに。B2B SaaS特有の課題解決に向けたプロダクトデザイン。MVP開発からPMF後のグロースフェーズまで、デザインパートナーとして伴走します。",
    icon: Code,
    // Minimalist geometry
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    tags: ["SaaS", "Dashboard", "Information Arch"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: "Journify",
    description: "AI Travel Journal Platform",
    longDescription: "旅の記憶を、美しい物語へ。位置情報と写真をAIが解析し、あなたの旅程を自動でスタイリッシュなジャーナルとして記録・生成する次世代トラベルプラットフォーム。",
    // Travel/Map UI concept
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop", 
    url: "https://tomomini0815.github.io/Journify-v1",
    tags: ["Travel Tech", "AI Generation", "Map Integration"]
  },
  {
    id: 'p2',
    title: "Ainance",
    description: "AI Financial Dashboard",
    longDescription: "金融の未来を可視化する。AIによる市場予測と資産管理を一元化した、プロフェッショナル向けフィンテックダッシュボード。複雑なデータを直感的なUIで解き明かします。",
    // Dark fintech dashboard concept
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2670&auto=format&fit=crop",
    url: "https://tomomini0815.github.io/ainance-v2",
    tags: ["Fintech", "Predictive AI", "Data Viz"]
  }
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: "Top", href: "/" },
  { id: 'services', label: "Services", href: "/services" },
  { id: 'about', label: "About", href: "/about" },
  { id: 'contact', label: "Contact", href: "/contact" },
];