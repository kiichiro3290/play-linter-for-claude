# Next.js リンター設定プロジェクト

これは[Next.js](https://nextjs.org)プロジェクトで、ESLintとoxlintの設定およびプラグインの統合を検証するためのプロジェクトです。

## プロジェクト概要

Feature-Sliced Design (FSD)アーキテクチャを採用したNext.js 15.3.3のダッシュボードアプリケーションです。TypeScriptとTailwind CSS v4を使用してモダンなReact開発環境を構築しています。

## リンター設定の作業履歴

### 1. oxlintとESLintの統合設定
- oxlintとESLintの同時実行環境を構築
- `.oxlintrc.json`ファイルを作成してoxlintの設定を管理
- `eslint.config.mjs`でoxlintとESLintの統合設定を実装

### 2. eslint-plugin-unicornの導入
oxlintがまだ対応していないESLintプラグインの検証として、`eslint-plugin-unicorn`を導入しました。

**参考**: [oxc-project/oxc#481](https://github.com/oxc-project/oxc/issues/481)

このイシューでは、oxlintが対応予定のESLintプラグイン一覧が記載されており、以下のプラグインが今後対応される予定です：
- eslint-plugin-import
- eslint-plugin-jsdoc  
- eslint-plugin-jsx-a11y
- eslint-plugin-jest
- eslint-plugin-unicorn ← **今回導入したプラグイン**
- eslint-plugin-react
- eslint-plugin-next
- その他多数

### 3. 導入したunicornルール
```javascript
rules: {
  "unicorn/filename-case": "error",        // ファイル名をkebab-caseに強制
  "unicorn/no-null": "off",               // nullの使用を制限（無効化）
  "unicorn/no-useless-undefined": "off",   // 不要なundefinedを制限（無効化）
  "unicorn/prefer-node-protocol": "error", // node:プロトコルの使用を強制
  "unicorn/prefer-module": "error",        // ESモジュールの使用を推奨
  "unicorn/prefer-top-level-await": "error" // トップレベルawaitの使用を推奨
}
```

### 4. 修正した内容

#### Node.jsプロトコルの修正
```javascript
// 修正前
import { dirname } from "path";
import { fileURLToPath } from "url";

// 修正後
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
```

#### ファイル名のkebab-case対応
以下のコンポーネントファイルをkebab-caseにリネーム：

| 修正前 | 修正後 |
|--------|--------|
| `DashboardPage.tsx` | `dashboard-page.tsx` |
| `Button.tsx` | `button.tsx` |
| `Card.tsx` | `card.tsx` |
| `Chart.tsx` | `chart.tsx` |
| `AnalyticsWidget.tsx` | `analytics-widget.tsx` |
| `SalesWidget.tsx` | `sales-widget.tsx` |
| `TaskWidget.tsx` | `task-widget.tsx` |
| `UserProfileWidget.tsx` | `user-profile-widget.tsx` |

#### インポート文の更新
ファイル名変更に伴い、対応するindex.tsファイルのインポート文を全て更新しました。

### 5. 最終結果
```bash
> pnpm lint
> oxlint && eslint

Found 0 warnings and 0 errors.
Finished in 46ms on 28 files using 10 threads.
```

**リンターエラー: 0件、警告: 0件** で完全にクリーンな状態を達成しました。

## 開発環境の起動

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# リンターの実行
pnpm lint

# プロダクションビルド
pnpm build
```

## 技術スタック
- **フレームワーク**: Next.js 15.3.3 (App Router)
- **言語**: TypeScript 5+
- **UI**: React 19
- **スタイリング**: Tailwind CSS v4
- **リンター**: oxlint + ESLint + eslint-plugin-unicorn
- **パッケージマネージャー**: pnpm
- **アーキテクチャ**: Feature-Sliced Design (FSD)

## 学習ポイント
1. **oxlintとESLintの併用**: 高速なoxlintと豊富なプラグインエコシステムを持つESLintの両方の利点を活用
2. **プラグイン互換性**: oxlintが対応していないプラグインでもESLint側で補完可能
3. **コード品質向上**: unicornプラグインによる厳格なコーディング規約の適用
4. **ファイル命名規則**: kebab-caseによる一貫したファイル命名の重要性
