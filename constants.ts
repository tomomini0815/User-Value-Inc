import { Layers, Smartphone, Monitor, Code, Zap, Globe, Cpu, Search } from 'lucide-react';
import { CompanyInfo, ServiceItem, NavItem, ProjectItem } from './types';
import { getImagePath } from './lib/utils';

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
    titleJa: "Webアプリ開発",
    description: "React, Next.js, Vue.jsなどのモダンフレームワークを駆使し、ビジネスの加速装置となるWebアプリケーションを構築。堅牢性と拡張性を兼ね備えたアーキテクチャで、長期的な価値を提供します。",
    icon: Monitor,
    // Abstract 3D shape / Code flow
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
    tags: ["React", "Next.js", "TypeScript", "Vercel"]
  },
  {
    id: 's2',
    title: "Mobile App Production",
    titleJa: "モバイルアプリ制作",
    description: "ユーザーの手のひらで最高の体験を。iOS / Androidネイティブ開発から、Flutterを用いたクロスプラットフォーム開発まで。直感的で中毒性のあるUI/UXを実現します。",
    icon: Smartphone,
    // Dark sleek glassmorphism
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    tags: ["iOS", "Android", "Flutter", "React Native"]
  },
  {
    id: 's3',
    title: "UI/UX Design & Audit",
    titleJa: "UI/UXデザイン・監査",
    description: "データと感性の融合。ヒートマップ分析やユーザーインタビューに基づき、離脱率を改善。ブランドの世界観を体現する美しいインターフェースデザインを提供します。",
    icon: Layers,
    // Abstract fluid art, digital aesthetics
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tags: ["Figma", "User Research", "Design Systems"]
  },
  {
    id: 's4',
    title: "SaaS Product Design",
    titleJa: "SaaSプロダクトデザイン",
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
    description: "自己管理Webアプリケーション",
    longDescription: "Journifyは、「書く」「振り返る」「達成する」を一つにつなげる次世代の自己管理Webアプリケーションです。\n\n日々の記録と目標管理を統合し、あなたの成長を可視化するパーソナルダッシュボード。ジャーナリング（日記）で思考を整理し、目標設定で方向性を定め、タスク管理で着実に前進し、プロジェクト管理で大きな成果を実現できます。",
    // Journify dashboard screenshot
    image: getImagePath("/images/journify-new-mockup.jpg"),
    imageClassName: "scale-110 object-center",
    url: "https://journify-v1.vercel.app/",
    tags: ["Travel Tech", "AI Generation", "Map Integration"]
  },
  {
    id: 'p2',
    title: "Ainance",
    description: "経理業務効率化Webアプリケーション",
    longDescription: "Ainanceは、個人事業主・フリーランス・小規模事業者のための経理業務効率化Webアプリケーションです。\n\nレシートのOCR自動読み取り、音声入力による取引記録、収支の可視化、確定申告サポートなど、日々の経理作業に欠かせない機能を一つのプラットフォームで提供。煩雑な会計業務をシンプルに、もっとスマートに管理できます。",
    // Ainance dashboard screenshot
    image: getImagePath("/images/ainance-mockup.png"),
    url: "https://ainance.jp",
    tags: ["Fintech", "Predictive AI", "Data Viz"]
  },
  {
    id: 'p3',
    title: "LifeBridge",
    description: "人生の転機に寄り添うAIパートナー",
    longDescription: "人生には、結婚、出産、転職、引越し、介護といった大きな転機が訪れます。これらのライフイベントには、想像以上に多くの行政手続きが必要で、複雑な申請フロー、厳しい期限、見逃しやすい給付金など、多くの課題が存在します。\n\nLifeBridgeは、こうした課題を解決するために開発された、次世代のライフイベント支援プラットフォームです。",
    // LifeBridge dashboard screenshot
    image: getImagePath("/images/lifebridge-mockup.png"),
    url: "https://life-bridge-lemon.vercel.app",
    tags: ["Life Event", "AI Assistant", "Gov Tech"]
  }
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: "Top", labelJa: "トップ", href: "/" },
  { id: 'services', label: "Services", labelJa: "サービス", href: "/services" },
  { id: 'pricing', label: "Pricing", labelJa: "料金", href: "/pricing" },
  { id: 'about', label: "About", labelJa: "会社概要", href: "/about" },
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
  },
  'service_ai_web': {
    id: 'service_ai_web',
    title: "AI Web App Development",
    subtitle: "AIツールを活用した効率的なWeb開発",
    description: "GitHub Copilot、Cursor、Claude等のAIツールを活用し、コーディング効率を大幅に向上。人間のエンジニアが品質を監修しながら、従来より短期間で高品質なWebアプリケーションを提供します。",
    flow: [
      {
        step: "01",
        title: "ヒアリング・要件整理",
        description: "お客様のご要望を丁寧にヒアリング。AIを活用して要件を素早くドキュメント化し、認識のズレを防ぎます。"
      },
      {
        step: "02",
        title: "設計・プロトタイプ作成",
        description: "AIデザインツールを活用し、ワイヤーフレームやUIデザインを効率的に作成。早期にイメージを共有します。"
      },
      {
        step: "03",
        title: "AIアシスト開発",
        description: "AIコーディングアシスタントを活用し、フロントエンド・バックエンドを効率的に実装。人間がレビュー・品質管理を行います。"
      },
      {
        step: "04",
        title: "テスト・デバッグ",
        description: "AIを活用してテストコードを生成し、バグの早期発見・修正を行います。最終確認は人間が実施します。"
      },
      {
        step: "05",
        title: "デプロイ・納品",
        description: "Vercel、AWS等のクラウドサービスにデプロイ。納品後のサポートもご相談に応じて対応します。"
      }
    ]
  },
  'service_ai_app': {
    id: 'service_ai_app',
    title: "AI Mobile App Production",
    subtitle: "AIを活用した効率的なモバイルアプリ開発",
    description: "React Native / Flutterでのクロスプラットフォーム開発にAIツールを組み合わせ、iOS/Android両対応アプリを効率的に開発。UI生成やコーディングをAIがサポートします。",
    flow: [
      {
        step: "01",
        title: "コンセプト・企画設計",
        description: "アプリの目的やターゲットユーザーを整理。AIを活用して競合調査や機能リストの作成を効率化します。"
      },
      {
        step: "02",
        title: "UI/UXデザイン",
        description: "Figma + AIプラグインを活用し、モバイルに最適化されたUIデザインを効率的に作成します。"
      },
      {
        step: "03",
        title: "アプリ開発",
        description: "Flutter / React NativeでAIコーディングアシスタントを活用しながら、iOS/Android両対応のアプリを開発します。"
      },
      {
        step: "04",
        title: "テスト・動作確認",
        description: "実機やシミュレーターで動作確認。AIを活用してテストケースを作成し、品質を担保します。"
      },
      {
        step: "05",
        title: "ストア申請サポート",
        description: "App Store / Google Playへの申請に必要な素材準備や申請手続きをサポートします。"
      }
    ]
  },
  'service_ai_saas': {
    id: 'service_ai_saas',
    title: "AI SaaS Product Design",
    subtitle: "AIを活用した効率的なSaaS・業務システム開発",
    description: "認証・決済等の共通機能はテンプレートを活用し、コア機能の開発にAIツールを最大限活用。短期間でMVPを構築し、素早く市場検証を行います。",
    flow: [
      {
        step: "01",
        title: "課題ヒアリング・要件定義",
        description: "解決したい課題や業務フローを丁寧にヒアリング。AIを活用して要件を整理し、優先順位を決定します。"
      },
      {
        step: "02",
        title: "システム設計",
        description: "データベース設計やAPI設計をAIの補助を受けながら効率的に行います。拡張性を考慮した設計を心がけます。"
      },
      {
        step: "03",
        title: "MVP開発",
        description: "認証・決済等の共通機能はテンプレートを活用し、コア機能をAIアシストで効率的に開発します。"
      },
      {
        step: "04",
        title: "テスト・フィードバック反映",
        description: "テストユーザーからのフィードバックを収集し、AIを活用して迅速に改善・機能追加を行います。"
      },
      {
        step: "05",
        title: "本番リリース・運用開始",
        description: "本番環境へのデプロイと運用開始。必要に応じて保守・機能追加のサポートも承ります。"
      }
    ]
  }
};

export const AI_SERVICES: ServiceItem[] = [
  {
    id: 'ai1',
    title: "AI Web App Development",
    titleJa: "AI Webアプリ開発",
    description: "AIコーディングアシスタントを活用し、従来より短期間で高品質なWebアプリケーションを開発。人間が品質を監修します。",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    tags: ["AI Assist", "React", "Next.js"]
  },
  {
    id: 'ai2',
    title: "AI Mobile App Production",
    titleJa: "AIモバイルアプリ制作",
    description: "Flutter / React NativeでのアプリをAIツールを活用して効率的に開発。iOS/Android両対応アプリをスピーディに納品します。",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1664575602554-208c7a77ee71?q=80&w=2667&auto=format&fit=crop",
    tags: ["Flutter", "React Native", "Cross-platform"]
  },
  {
    id: 'ai3',
    title: "AI SaaS Product Design",
    titleJa: "AI SaaSプロダクトデザイン",
    description: "テンプレートとAIツールを活用し、短期間でMVPを構築。素早く市場検証を行い、プロダクトの成長をサポートします。",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    tags: ["MVP", "SaaS", "Rapid Dev"]
  }
];