# Vercel完結型お問い合わせフォーム - セットアップ完了ガイド

このガイドでは、Vercel内で完結するお問い合わせフォームの最終セットアップ手順を説明します。

---

## ✅ 完了した作業

以下のファイルが作成・更新されました：

- ✅ `api/contact.ts` - Vercel Serverless Function（メール送信API）
- ✅ `pages/Contact.tsx` - フロントエンド（APIエンドポイントに更新）
- ✅ `vercel.json` - APIルーティング設定
- ✅ `.env.example` - 環境変数のテンプレート
- ✅ `RESEND_SETUP.md` - Resendセットアップガイド
- ✅ 必要なパッケージのインストール（`resend`, `@vercel/node`）

---

## 🚀 次に行うこと（所要時間: 約10分）

### ステップ1: Resendアカウント作成とAPIキー取得（5分）

1. **Resendにアクセス**: https://resend.com/
2. **「Sign Up」をクリック**してアカウント作成
3. メールアドレスで登録してメール認証を完了
4. ダッシュボードで **「API Keys」** → **「Create API Key」**
5. 名前を入力（例: `User Value Inc. Contact Form`）
6. **APIキーをコピー**（例: `re_123456789...`）
   - ⚠️ **重要**: 一度しか表示されないので必ずコピーしてください！

### ステップ2: ローカル環境変数を設定（2分）

1. `.env.example` をコピーして `.env.local` を作成:
   ```bash
   cp .env.example .env.local
   ```

2. `.env.local` を編集して実際の値を設定:
   ```bash
   # Resend API Key
   RESEND_API_KEY=re_あなたのAPIキー
   
   # お問い合わせ受信用メールアドレス
   CONTACT_EMAIL=あなたのメールアドレス@example.com
   ```

### ステップ3: Vercelに環境変数を設定（3分）

1. **Vercelダッシュボード**にアクセス: https://vercel.com/dashboard
2. プロジェクトを選択
3. **Settings** → **Environment Variables**
4. 以下の2つの環境変数を追加:

   **変数1:**
   ```
   Name: RESEND_API_KEY
   Value: re_あなたのAPIキー
   Environment: Production, Preview, Development（すべて選択）
   ```

   **変数2:**
   ```
   Name: CONTACT_EMAIL
   Value: あなたのメールアドレス@example.com
   Environment: Production, Preview, Development（すべて選択）
   ```

5. **「Save」**をクリック

### ステップ4: コードをコミット&プッシュ（1分）

```bash
# 変更をステージング
git add .

# コミット
git commit -m "Add Vercel serverless contact form with Resend"

# プッシュ
git push
```

Vercelが自動的にデプロイを開始します（1〜2分で完了）。

---

## 🧪 テスト方法

### ローカルでのテスト

⚠️ **注意**: Vercel Serverless Functionsはローカルでは動作しません。ローカルテストには `vercel dev` が必要です。

```bash
# Vercel CLIをインストール（初回のみ）
npm install -g vercel

# ローカル開発サーバーを起動
vercel dev
```

その後、`http://localhost:3000/contact` でフォームをテストできます。

### 本番環境でのテスト

1. Vercelのデプロイが完了したら、デプロイURLにアクセス
2. `/contact` ページに移動
3. フォームに情報を入力して送信
4. 「送信完了」メッセージが表示されることを確認
5. 設定したメールアドレスに通知が届くことを確認

---

## 🔧 トラブルシューティング

### ローカルで「404 Not Found」エラー

**原因**: Vercel Serverless Functionsは通常の開発サーバーでは動作しません。

**解決策**: `vercel dev` を使用してください。

```bash
vercel dev
```

### メールが送信されない

1. **Vercelの環境変数を確認**
   - Settings → Environment Variables で設定されているか確認
   - 環境変数を追加した後は再デプロイが必要

2. **Resend APIキーを確認**
   - Resendダッシュボードで有効なAPIキーか確認
   - APIキーが正しくコピーされているか確認

3. **ブラウザのコンソールを確認**
   - F12キーで開発者ツールを開く
   - Consoleタブでエラーメッセージを確認
   - Networkタブで `/api/contact` のレスポンスを確認

### メールが届かない

1. **迷惑メールフォルダを確認**
2. **Resendダッシュボードでログを確認**
   - 「Emails」タブで送信履歴を確認
   - エラーメッセージがないか確認

---

## 🎨 カスタマイズ

### 送信元メールアドレスの変更

`api/contact.ts` の82行目を編集:

```typescript
// デフォルト（ドメイン認証不要）
from: 'User Value Inc. <onboarding@resend.dev>',

// ドメイン認証後（uservalue.jpのDNS設定が必要）
from: 'User Value Inc. <noreply@uservalue.jp>',
```

### メールテンプレートのカスタマイズ

`api/contact.ts` の50〜72行目でメール本文をカスタマイズできます。

### 自動返信メールの追加

お客様に自動返信メールを送りたい場合は、`api/contact.ts` に以下を追加:

```typescript
// お客様への自動返信メール
await resend.emails.send({
  from: 'User Value Inc. <noreply@uservalue.jp>',
  to: [email], // お客様のメールアドレス
  subject: 'お問い合わせを受け付けました - User Value Inc.',
  text: `
${name} 様

この度はUser Value Inc.にお問い合わせいただき、誠にありがとうございます。

お問い合わせ内容を確認の上、2営業日以内にご連絡させていただきます。
今しばらくお待ちくださいませ。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
User Value Inc.
https://uservalue.jp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim(),
});
```

---

## 📊 料金プラン

### Resend無料プラン
- **月3,000通まで無料**
- ほとんどの小〜中規模サイトで十分
- クレジットカード登録不要

### Vercel無料プラン
- **Serverless Functions: 月100GB-時間まで無料**
- お問い合わせフォーム程度なら十分
- 超過した場合のみ課金

---

## 🎯 チェックリスト

設定完了の確認用チェックリスト：

- [ ] Resendアカウントを作成した
- [ ] ResendでAPIキーを取得した
- [ ] `.env.local` ファイルを作成した
- [ ] Vercelに環境変数を設定した（RESEND_API_KEY、CONTACT_EMAIL）
- [ ] コードをコミット&プッシュした
- [ ] Vercelのデプロイが完了した
- [ ] 本番環境でテスト送信した
- [ ] メールが届くことを確認した

---

## 🎉 完了！

お疲れ様でした！これでVercel内で完結するお問い合わせフォームが完成しました。

### 実現したこと

✅ Vercel Serverless Functionsでメール送信  
✅ 外部サービス（Formspree等）への依存なし  
✅ 無料で月3,000通まで送信可能  
✅ カスタマイズ自由  
✅ セキュアな通信（HTTPS）

次は [ドメイン設定](./DOMAIN_SETUP.md) を完了させて、`https://uservalue.jp` でサイトを公開しましょう！
