import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Resendクライアントの初期化
const resend = new Resend(process.env.RESEND_API_KEY);

// CORS設定
const allowedOrigins = [
    'https://uservalue.jp',
    'https://www.uservalue.jp',
    'http://localhost:5173',
    'http://localhost:3000',
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORSヘッダーの設定
    const origin = req.headers.origin as string;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // OPTIONSリクエスト（プリフライト）への対応
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // POSTメソッドのみ許可
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // リクエストボディの取得
        const { inquiryTypes, company, name, email, phone, message } = req.body;

        // バリデーション
        if (!inquiryTypes || !company || !name || !email || !message) {
            return res.status(400).json({ error: '必須項目が入力されていません。' });
        }

        // メールアドレスの簡易バリデーション
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: '有効なメールアドレスを入力してください。' });
        }

        // 受信先メールアドレス（環境変数から取得）
        const contactEmail = process.env.CONTACT_EMAIL || 'info@uservalue.jp';

        // メール本文の作成
        const emailContent = `
【User Value Inc. お問い合わせフォーム】

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ種別
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${inquiryTypes}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お客様情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

        // Resendでメール送信
        const data = await resend.emails.send({
            from: 'User Value Inc. <onboarding@resend.dev>', // ドメイン認証後は 'noreply@uservalue.jp' に変更可能
            to: [contactEmail],
            replyTo: email, // お客様のメールアドレスを返信先に設定
            subject: `【お問い合わせ】${company} ${name}様`,
            text: emailContent,
        });

        // 成功レスポンス
        return res.status(200).json({
            success: true,
            message: 'お問い合わせを受け付けました。',
            id: data.data?.id,
        });

    } catch (error) {
        console.error('Contact form error:', error);

        // エラーレスポンス
        return res.status(500).json({
            error: 'メール送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。',
            details: process.env.NODE_ENV === 'development' ? error : undefined,
        });
    }
}
