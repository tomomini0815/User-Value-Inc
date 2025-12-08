# Resend セットアップガイド

このガイドでは、Vercel内で完結するお問い合わせフォームを実装するために、Resendを使ったメール送信機能のセットアップ方法を説明します。

---

## 🎯 Resendとは

- **無料プラン**: 月3,000通まで送信可能
- **簡単な設定**: APIキー1つで使える
- **高い到達率**: メールが確実に届く
- **公式ドキュメント**: https://resend.com/

---

## 📋 セットアップ手順

### ステップ1: Resendアカウント作成（5分）

1. **Resendにアクセス**: https://resend.com/
2. **「Sign Up」をクリック**してアカウント作成
3. **メールアドレスを入力**してサインアップ
4. **メール認証**を完了

### ステップ2: APIキーの取得（2分）

1. Resendダッシュボードにログイン
2. 左サイドバーから **「API Keys」** を選択
3. **「Create API Key」** をクリック
4. 名前を入力（例: `User Value Inc. Contact Form`）
5. **「Add」** をクリック
6. **APIキーをコピー**（例: `re_123456789abcdefghijklmnop`）
   - ⚠️ **重要**: このAPIキーは一度しか表示されません！必ずコピーして保存してください

### ステップ3: ドメイン認証（オプション・推奨）

独自ドメイン（uservalue.jp）からメールを送信する場合：

1. Resendダッシュボードで **「Domains」** を選択
2. **「Add Domain」** をクリック
3. **uservalue.jp** を入力
4. 表示されるDNSレコードをお名前.comに追加：
   ```
   Type: TXT
   Name: _resend
   Value: （Resendが表示する値）
   ```
5. 認証が完了するまで待つ（数分〜数時間）

**注意**: ドメイン認証をしない場合は、`onboarding@resend.dev` から送信されます（無料プランでも使用可能）。

### ステップ4: Vercelに環境変数を設定（3分）

1. **Vercelダッシュボード**にアクセス: https://vercel.com/dashboard
2. プロジェクトを選択
3. **Settings** → **Environment Variables** を選択
4. 以下の環境変数を追加：

   **変数1: RESEND_API_KEY**
   ```
   Name: RESEND_API_KEY
   Value: re_123456789abcdefghijklmnop（先ほどコピーしたAPIキー）
   Environment: Production, Preview, Development（すべて選択）
   ```

   **変数2: CONTACT_EMAIL**
   ```
   Name: CONTACT_EMAIL
   Value: あなたのメールアドレス（お問い合わせを受信したいアドレス）
   Environment: Production, Preview, Development（すべて選択）
   ```

5. **「Save」** をクリック

### ステップ5: ローカル環境に環境変数を設定（2分）

プロジェクトのルートディレクトリに `.env.local` ファイルを作成：

```bash
# .env.local
RESEND_API_KEY=re_123456789abcdefghijklmnop
CONTACT_EMAIL=your-email@example.com
```

⚠️ **重要**: `.env.local` は `.gitignore` に含まれているため、Gitにコミットされません。

---

## ✅ 確認事項

設定が完了したら、以下を確認してください：

- [ ] Resendアカウントを作成した
- [ ] APIキーを取得してコピーした
- [ ] Vercelに環境変数を設定した（RESEND_API_KEY、CONTACT_EMAIL）
- [ ] ローカルに `.env.local` ファイルを作成した
- [ ] （オプション）ドメイン認証を完了した

---

## 🔧 トラブルシューティング

### メールが送信されない

1. **APIキーを確認**
   - Resendダッシュボードで有効なAPIキーか確認
   - 環境変数に正しく設定されているか確認

2. **環境変数を確認**
   - Vercelで環境変数が保存されているか確認
   - デプロイ後に環境変数を追加した場合は、再デプロイが必要

3. **ドメイン認証を確認**
   - 独自ドメインを使用している場合、認証が完了しているか確認

### メールが届かない

1. **迷惑メールフォルダを確認**
2. **Resendダッシュボードでログを確認**
   - 「Emails」タブで送信履歴を確認
   - エラーメッセージがないか確認

---

## 📚 次のステップ

Resendの設定が完了したら、以下のファイルが自動的に作成されています：

- `api/contact.ts` - Vercel Serverless Function（メール送信API）
- `pages/Contact.tsx` - 更新されたフロントエンド

これらのファイルをGitにコミットしてVercelにプッシュすれば、お問い合わせフォームが動作します！

---

## 💡 ヒント

### 送信元メールアドレス

- **ドメイン認証済み**: `noreply@uservalue.jp` などの独自ドメインから送信可能
- **未認証**: `onboarding@resend.dev` から送信（無料プランでも使用可能）

### テンプレートのカスタマイズ

`api/contact.ts` ファイルでメールの内容をカスタマイズできます：
- 件名
- 本文のフォーマット
- 送信元アドレス
- 返信先アドレス

---

## 🎉 完了！

Resendの設定が完了すれば、Vercel内で完結するお問い合わせフォームが動作します！
