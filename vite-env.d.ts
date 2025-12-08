/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BASE_URL: string;
    // 他の環境変数もここに追加できます
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
