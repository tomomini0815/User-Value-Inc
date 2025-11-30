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
    longDescription: "旅の記憶を、美しい物語へ。AIが位置情報と写真を解析し、あなたの旅程を自動でスタイリッシュなジャーナルに変換。思い出を整理する手間なく、感動的なトラベルストーリーが完成します。地図上で旅の軌跡を可視化し、大切な瞬間を永遠に刻む次世代プラットフォーム。",
    // Travel app interface with map
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    url: "https://tomomini0815.github.io/Journify-v1",
    tags: ["Travel Tech", "AI Generation", "Map Integration"]
  },
  {
    id: 'p2',
    title: "Ainance",
    description: "AI Financial Dashboard",
    longDescription: "お金の未来を、もっとスマートに。AIが市場動向を予測し、あなたの資産状況を一目で把握できるインテリジェントな金融ダッシュボード。複雑な財務データを美しいビジュアルで整理し、賢い意思決定をサポート。個人から企業まで、誰もが使える次世代フィンテックツール。",
    // Financial charts and accounting interface
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
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

export interface ServiceFlowStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetailData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  flow: ServiceFlowStep[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'service_web': {
    id: 'service_web',
    title: "Web App Development",
    subtitle: "ビジネスを加速させる、堅牢でモダンなWebアプリケーション",
    description: "単なるWebサイト制作ではなく、業務システムやSaaSプロダクトなど、複雑な機能を持つWebアプリケーションの開発を得意としています。ReactやNext.jsなどの最新技術を用い、高速で拡張性の高いシステムを構築します。",
    flow: [
      {
        step: "01",
        title: "ヒアリング・要件定義",
        description: "プロジェクトの目的、ターゲット、解決したい課題を深く理解します。機能要件だけでなく、非機能要件（パフォーマンス、セキュリティ等）も含めた詳細な要件定義を行います。"
      },
      {
        step: "02",
        title: "設計・プロトタイピング",
        description: "システムアーキテクチャの設計と、UI/UXデザインを行います。必要に応じてプロトタイプを作成し、開発前に完成イメージを共有・すり合わせを行います。"
      },
      {
        step: "03",
        title: "アジャイル開発",
        description: "機能ごとに優先順位をつけ、スプリント単位で開発を進めます。定期的に成果物を確認いただきながら進めることで、認識のズレを防ぎます。"
      },
      {
        step: "04",
        title: "テスト・品質保証",
        description: "単体テスト、結合テスト、E2Eテストを実施し、バグの少ない高品質なコードを保証します。セキュリティ診断やパフォーマンステストも実施可能です。"
      },
      {
        step: "05",
        title: "リリース・運用保守",
        description: "本番環境へのデプロイを安全に行います。リリース後も、監視、障害対応、機能追加などの継続的なサポートを提供し、サービスの成長を支えます。"
      }
    ]
  },
  'service_app': {
    id: 'service_app',
    title: "Mobile App Production",
    subtitle: "ユーザーの手のひらで最高の体験を届けるネイティブアプリ",
    description: "iOS / Androidアプリの企画から開発、ストア申請までワンストップで対応します。Swift/Kotlinによるネイティブ開発はもちろん、Flutterを用いた効率的なクロスプラットフォーム開発も可能です。",
    flow: [
      {
        step: "01",
        title: "企画・コンセプト策定",
        description: "アプリのコアとなる価値（バリュー）を明確にし、ターゲットユーザーに響くコンセプトを策定します。競合調査や市場分析も行います。"
      },
      {
        step: "02",
        title: "UI/UXデザイン",
        description: "モバイル特有の操作性を考慮した、直感的で使いやすいUIを設計します。ユーザーの体験フロー（UX）を詳細に描き、デザインに落とし込みます。"
      },
      {
        step: "03",
        title: "アプリ開発",
        description: "iOS/Androidそれぞれのプラットフォームに最適化された実装を行います。Flutterを採用することで、両OS同時開発による工数削減も可能です。"
      },
      {
        step: "04",
        title: "テスト・実機検証",
        description: "様々な端末サイズやOSバージョンでの動作検証を入念に行います。クラッシュや表示崩れがないか、徹底的にチェックします。"
      },
      {
        step: "05",
        title: "ストア申請・リリース",
        description: "App Store / Google Playへの申請手続きを代行・サポートします。審査リジェクト時の対応もお任せください。"
      }
    ]
  },
  'service_uiux': {
    id: 'service_uiux',
    title: "UI/UX Design & Audit",
    description: "ユーザーの心を掴み、ビジネス成果に繋げるデザイン戦略",
    subtitle: "見た目の美しさだけでなく、使いやすさとビジネスゴールを両立させるデザインを提供します。既存サービスのUI/UX診断や改善提案も行っています。",
    flow: [
      {
        step: "01",
        title: "リサーチ・現状分析",
        description: "ユーザーインタビュー、ヒートマップ分析、競合調査などを通じて、現状の課題やユーザーのニーズを客観的なデータに基づいて洗い出します。"
      },
      {
        step: "02",
        title: "情報設計・ワイヤーフレーム",
        description: "ユーザーが迷わず目的を達成できるよう、画面遷移や情報構造を整理します。ワイヤーフレームを作成し、骨組みを固めます。"
      },
      {
        step: "03",
        title: "ビジュアルデザイン",
        description: "ブランドの世界観を体現するトーン＆マナーを策定し、高品質なUIデザインを作成します。配色、タイポグラフィ、アイコンなどを細部まで作り込みます。"
      },
      {
        step: "04",
        title: "プロトタイピング・検証",
        description: "実際のアプリのように動くプロトタイプを作成し、操作感を検証します。ユーザーテストを実施し、フィードバックを元に改善を繰り返します。"
      },
      {
        step: "05",
        title: "ガイドライン作成・納品",
        description: "デザインデータと共に、デザインシステムやスタイルガイドを作成・納品します。開発チームへの引き継ぎや、将来的な運用もスムーズに行えます。"
      }
    ]
  },
  'service_saas': {
    id: 'service_saas',
    title: "SaaS Product Design",
    subtitle: "複雑な業務をシンプルに。選ばれ続けるSaaSプロダクトへ",
    description: "B2B SaaS特有の複雑な業務フローを整理し、誰でも直感的に使えるプロダクトデザインを実現します。MVP開発からPMF後のグロースまで、フェーズに合わせた支援を行います。",
    flow: [
      {
        step: "01",
        title: "業務理解・課題抽出",
        description: "対象となる業界や業務フローを深く理解することから始めます。ユーザーが抱えるペインポイント（悩み）を特定し、解決策を模索します。"
      },
      {
        step: "02",
        title: "MVP要件定義",
        description: "最初から多機能にするのではなく、コアとなる価値を提供するために必要な最小限の機能（MVP）を定義し、素早い市場投入を目指します。"
      },
      {
        step: "03",
        title: "UI設計・開発",
        description: "管理画面やダッシュボードなど、情報量の多い画面でも見やすく、操作しやすいUIを設計・開発します。拡張性を考慮したコンポーネント設計を行います。"
      },
      {
        step: "04",
        title: "オンボーディング設計",
        description: "ユーザーが迷わず使い始められるよう、チュートリアルやヘルプなどのオンボーディング体験を設計します。定着率（リテンション）向上に寄与します。"
      },
      {
        step: "05",
        title: "ユーザーテスト・改善サイクル",
        description: "リリース後もユーザーの利用状況を分析し、UI/UXの改善を継続的に行います。機能追加や改修を繰り返し、プロダクトを成長させます。"
      }
    ]
  }
};