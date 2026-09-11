/**
 * User Value Inc. - Contact Form Worker API
 * Cloudflare Workers 上で動作する自社専用のお問い合わせ送受信API
 */

export interface Env {
  RESEND_API_KEY: string;
  ADMIN_EMAIL?: string;
  SENDER_EMAIL?: string;
}

const ALLOWED_ORIGINS = [
  'https://uservalue.jp',
  'https://www.uservalue.jp',
  'http://localhost:3000',
  'http://localhost:5173',
];

function getCorsHeaders(origin: string | null) {
  const isAllowed = origin && ALLOWED_ORIGINS.some(allowed => origin === allowed || origin.endsWith('.uservalue.jp'));
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : 'https://uservalue.jp',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin');
    const corsHeaders = getCorsHeaders(origin);

    // OPTIONS（プリフライトリクエスト）の処理
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // POST以外は拒否
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const body = await request.json() as {
        inquiryTypes?: string;
        company?: string;
        name?: string;
        email?: string;
        phone?: string;
        message?: string;
      };

      const { inquiryTypes, company, name, email, phone, message } = body;

      // 入力値バリデーション
      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: '必須項目（お名前・メールアドレス・内容）を入力してください。' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(JSON.stringify({ error: '有効なメールアドレスを入力してください。' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const resendApiKey = env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error('RESEND_API_KEY is not configured in Worker environment.');
        return new Response(JSON.stringify({ error: 'メール送信設定が未完了です。管理者にお問い合わせください。' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const adminEmail = env.ADMIN_EMAIL || 'info@uservalue.jp';
      const senderEmail = env.SENDER_EMAIL || 'User Value Inc. <noreply@uservalue.jp>';

      const nowTokyo = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

      // 1. 管理者宛ての通知メール本文
      const adminEmailContent = `
【User Value Inc. 公式サイトお問い合わせ】

Webサイトより新しいお問い合わせを受信しました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お客様情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
・お名前: ${name} 様
・貴社名: ${company || '（未入力）'}
・メールアドレス: ${email}
・お電話番号: ${phone || '（未入力）'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ種別
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${inquiryTypes || '未選択'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
・受信日時: ${nowTokyo}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
※ このメールにお客様のメールアドレス（${email}）が返信先として設定されています。直接ご返信いただけます。
`.trim();

      // Resend API を呼び出して管理者へ送信
      const adminMailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [adminEmail],
          reply_to: email,
          subject: `【お問い合わせ】${company ? company + ' ' : ''}${name} 様`,
          text: adminEmailContent,
        }),
      });

      if (!adminMailRes.ok) {
        const errText = await adminMailRes.text();
        console.error('Resend API Error (Admin):', errText);
        return new Response(JSON.stringify({ error: 'メール送信に失敗しました。時間をおいて再送してください。' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // 2. お客様への自動受付メール本文
      const userAutoReplyContent = `
${name} 様

この度はお問い合わせいただき、誠にありがとうございます。
株式会社User Value（User Value Inc.）でございます。

下記の内容でお問い合わせを受け付けいたしました。
内容を確認の上、担当者より1〜2営業日以内にご連絡差し上げます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容の控え
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
・お名前: ${name} 様
・貴社名: ${company || '（未入力）'}
・メールアドレス: ${email}
・お電話番号: ${phone || '（未入力）'}
・お問い合わせ種別: ${inquiryTypes || '未選択'}

【内容】
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
・受付日時: ${nowTokyo}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

──────────────────────────────────
株式会社User Value (User Value Inc.)
Web & アプリ開発 / UI/UXデザイン
URL: https://uservalue.jp
──────────────────────────────────
`.trim();

      // お客様への自動返信（失敗しても管理者通知が届いていればOKとするためtry-catch）
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: senderEmail,
            to: [email],
            subject: '【User Value Inc.】お問い合わせありがとうございます（自動返信）',
            text: userAutoReplyContent,
          }),
        });
      } catch (autoReplyErr) {
        console.warn('Auto-reply failed, but admin email was sent:', autoReplyErr);
      }

      return new Response(JSON.stringify({ success: true, message: 'お問い合わせを正常に受け付けました。' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } catch (err: any) {
      console.error('Worker Handler Error:', err);
      return new Response(JSON.stringify({ error: 'サーバーエラーが発生しました。' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
