# 🚀 クイックスタートガイド

このガイドでは、**ドメイン設定**と**お問い合わせフォーム設定**を最短で完了させる手順を説明します。

---

## 📋 必要なもの

- [ ] お名前.comアカウント（uservalue.jp取得済み）
- [ ] Vercelアカウント（デプロイ済み）
- [ ] Formspreeアカウント（無料で作成可能）

---

## ⚡ 設定の流れ（所要時間: 約15分）

### ステップ1: Vercelでドメイン追加（5分）

1. **Vercelにログイン**: https://vercel.com/dashboard
2. **プロジェクトを選択** → **Settings** → **Domains**
3. **ドメインを追加**:
   ```
   uservalue.jp
   www.uservalue.jp
   ```
4. **DNS情報をメモ**（例）:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

### ステップ2: お名前.comでDNS設定（5分）

1. **お名前.comにログイン**: https://www.onamae.com/navi/login/
2. **ドメイン設定** → **DNS設定/転送設定** → **uservalue.jp**
3. **DNSレコードを追加**:
   
   **レコード1（ルートドメイン）**:
   ```
   ホスト名: （空欄）
   TYPE: A
   VALUE: 76.76.21.21
   TTL: 3600
   ```
   
   **レコード2（www）**:
   ```
   ホスト名: www
   TYPE: CNAME
   VALUE: cname.vercel-dns.com
   TTL: 3600
   ```

4. **保存して完了**

### ステップ3: お問い合わせフォーム設定（5分）

1. **Formspreeアカウント作成**: https://formspree.io/
   - 「Get Started」をクリック
   - メールアドレスとパスワードで登録

2. **新しいフォームを作成**:
   - 「+ New Form」をクリック
   - フォーム名: `User Value Inc. Contact Form`
   - 通知先メールアドレスを入力
   - 「Create Form」をクリック

3. **フォームIDを取得**:
   - 「Integration」タブを選択
   - エンドポイントURLをコピー
   - 例: `https://formspree.io/f/xyzabc123`
   - `xyzabc123` の部分がフォームID

4. **コードに適用**:
   - `pages/Contact.tsx` の32行目を編集:
   ```typescript
   // 変更前
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   
   // 変更後（xyzabc123を実際のIDに置き換える）
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzabc123';
   ```

5. **変更をコミット&プッシュ**:
   ```bash
   git add pages/Contact.tsx
   git commit -m "Update Formspree endpoint"
   git push
   ```

6. **Vercelが自動デプロイ**（1〜2分で完了）

---

## ✅ 動作確認

### ドメインの確認（DNS伝播後）

1. **DNSチェッカーで確認**: https://dnschecker.org/
   - ドメイン: `uservalue.jp`
   - タイプ: `A`
   - 緑のチェックが増えてきたらOK

2. **ブラウザで確認**:
   - https://uservalue.jp にアクセス
   - サイトが表示されればOK
   - 🔒マークが表示されればSSLもOK

### お問い合わせフォームの確認

1. **テスト送信**:
   - https://uservalue.jp/contact にアクセス
   - フォームに情報を入力して送信
   - 「送信完了」メッセージが表示されればOK

2. **Formspreeで確認**:
   - Formspreeダッシュボードで送信履歴を確認
   - 登録したメールアドレスに通知が届くことを確認

---

## 🎯 チェックリスト

### ドメイン設定
- [ ] Vercelでドメインを追加した
- [ ] お名前.comでDNSレコードを設定した
- [ ] https://uservalue.jp でサイトが表示される
- [ ] SSL証明書が有効（🔒マーク表示）

### お問い合わせフォーム
- [ ] Formspreeアカウントを作成した
- [ ] フォームIDを取得した
- [ ] `Contact.tsx` を更新した
- [ ] 変更をプッシュしてデプロイした
- [ ] テスト送信が成功した
- [ ] 通知メールが届いた

---

## 📚 詳細ガイド

より詳しい情報が必要な場合は、以下のガイドを参照してください：

- **ドメイン設定**: [DOMAIN_SETUP.md](./DOMAIN_SETUP.md)
- **お問い合わせフォーム**: [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md)

---

## 🆘 トラブルシューティング

### ドメインが表示されない
- DNS伝播には最大48時間かかる場合があります（通常は数時間）
- ブラウザのキャッシュをクリアしてみてください
- シークレットモードで試してみてください

### フォームが送信できない
- ブラウザのコンソール（F12）でエラーを確認
- Formspree IDが正しいか確認
- Vercelのデプロイが完了しているか確認

### メールが届かない
- 迷惑メールフォルダを確認
- Formspreeのダッシュボードで送信履歴を確認
- 通知先メールアドレスが正しいか確認

---

## 💡 次のステップ

設定が完了したら、以下を検討してください：

1. **Google Analytics設定** - アクセス解析
2. **Google Search Console** - SEO対策
3. **メールアドレス設定** - info@uservalue.jp など
4. **SNS連携** - OGP画像の設定など

---

## 🎉 完了！

お疲れ様でした！これで以下が完了しました：

✅ uservalue.jp でWebサイトが公開されました  
✅ お問い合わせフォームが機能しています  
✅ SSL証明書で安全な通信が確保されています

あなたのWebサイトは世界中からアクセス可能になりました！🚀
