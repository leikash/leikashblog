# Blog Design

ブログサイトを作るため、簡単な設計を行う

## 1. 要件をリストアップ
- [ ] かっこよくて見やすい
- [ ] やってみたいことができる
    - プロジェクトマネジメントのノウハウ
    - 公開フロントエンド技術の勉強
    - データ分析の勉強
- [ ] 収益化する

## 2. 記事の設計
参考:  
- [microCMSブログをオープンソース化しました](https://blog.microcms.io/open-source-the-blog/)
- [ブログをおしゃれにする方法！デザインルール19個を解説します！](https://www.tsuzukiblog.org/blog-design/)  
- [サルカワ](https://saruwakakun.com/)

### 2-1. 記事の要素をリストアップする
#### 記事リストの要素
記事の一覧に記載してある項目
- ヘッダー(全ページ共通)
- パンくず(全ページ共通)
- 全体のタイトル
- 全体を表すイラスト
- 全体の概要
- 記事一覧
  - 章番号
  - サムネイル画像
  - タイトル
  - 更新日
- サイトインデックス(全ページ共通)
- 自己紹介(全ページ共通)
- 検索窓(全ページ共通)
- SNSリンク
- フッター(全ページ共通)

#### 記事の要素
- ヘッダー
- パンくず
- タイトル
- タグ
- 更新日
- トップ写真
- 関連リンク
- 記事
  - 目次
  - 広告
  - 見出し
  - 写真
  - 文章
  - 吹き出し
- 記事一覧　抜粋
- 広告
- SNSリンク(全記事共通)
- サイトインデックス
- 自己紹介
- 検索窓
- 記事の目次（スクロール後固定）

### 2-2. 記事のAPIを決める

#### 共通(ヘッダー)
- ヘッダー
- パンくず

#### 記事固有

**制限: 使えるAPIは3つまで**
1. プロフィール
2. ブログ
3. SEO(仮、ブログに埋め込む可能性あり)

■ ブログAPI
| フィールドID | 表示名 | 種類 |
| --- | --- | --- |
| summary | リード文 | リッチテキスト |
| title | タイトル | テキストフィールド |
| mainVisual | メインビジュアル | 画像 |
| body | 本文 | リッチエディタ |

summaryを使うか後で決める。bodyの先頭から取れる形にするかも。

- タイトル
- タグ⇒ドロップ
- 更新日⇒CMSから取る(取れないときはAPIに追加)
- 関連リンク⇒必要になったら後で追加
- メインビジュアル
- 記事
  - 目次
  - 広告
  - 見出し
  - 写真⇒記事ごとに追加する方法を考える
    - Onedrive参照にする
    - 画像APIを追加する
  - 文章
  - 吹き出し

#### 共通(サイドバー(右側))
- サイトインデックス
- 自己紹介⇒プロフィールから取る
- 検索窓
- 記事の目次（スクロール後固定）⇒後で必要になったら追加する

#### 共通(フッター)

- 記事一覧　抜粋
- 広告
- SNSリンク(全記事共通)

### 2-3. 記事のレイアウトを決める

### 気づき
- 外部リンクは別タブで開くようにする