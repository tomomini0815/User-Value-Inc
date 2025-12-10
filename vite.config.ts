import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, '.', '');
  // Vercelでは base: '/' を使用
  // GitHub Pagesでは '/User-Value-Inc/' を使用 (ビルド時のみ)
  // ローカル開発 (serve) では '/' を使用して画像を正しく表示
  const isProdBuild = command === 'build';
  const isVercel = process.env.VERCEL;

  const base = isProdBuild && !isVercel ? '/User-Value-Inc/' : '/';

  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
