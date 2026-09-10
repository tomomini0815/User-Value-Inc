import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, '.', '');
  // Vercelでは base: '/' を使用
  // GitHub Pagesでは '/User-Value-Inc/' を使用 (ビルド時のみ)
  // ローカル開発 (serve) では '/' を使用して画像を正しく表示
  // カスタムドメイン https://uservalue.jp/ を使用するため base は常に '/'
  const base = '/';

  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      {
        name: 'generate-spa-404',
        closeBundle() {
          const distPath = path.resolve(__dirname, 'dist');
          const indexPath = path.join(distPath, 'index.html');
          const notFoundPath = path.join(distPath, '404.html');
          try {
            if (fs.existsSync(indexPath)) {
              fs.copyFileSync(indexPath, notFoundPath);
              console.log('[SPA Routing] Successfully copied index.html to 404.html for GitHub Pages support.');
            }
          } catch (err) {
            console.error('[SPA Routing] Failed to copy index.html to 404.html:', err);
          }
        }
      },
      {
        name: 'mock-contact-api',
        configureServer(server) {
          server.middlewares.use('/api/contact', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', () => {
                console.log('[Dev Contact API received]:', body);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Inquiry received in dev mode' }));
              });
            } else {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ status: 'ok' }));
            }
          });
        }
      }
    ],
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
