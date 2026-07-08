# 英文法 ならびかえトレーニング（単元別版）

中学英文法の並び替え学習アプリ。最初に学びかたを選ぶ：

1. **単元ごとに学ぶ** — 文法テーマ（20単元）から1つ選び、その単元の問題プールからランダムに数問（最大5問）出題される。
2. **レベルごとにランダム** — レベル1〜3（やさしい／ふつう／むずかしい）から1つ選び、単元をまたいで全問題からランダムに数問出題される。
3. **苦手問題を復習する** — これまでの全モードで間違えた問題が自動的に貯まる「苦手問題バンク」（`localStorage`永続化）から出題。正解すると苦手問題バンクから除外される。1問もなければこの選択肢は表示されない。

## 遊び方

`index.html` はこれ1枚だけで動く単一ファイル（全データ埋め込み済み）。ダブルクリックしてブラウザで開くだけでよい（メール添付・USBコピーなど、`data/`フォルダを別途持ち歩く必要はない）。GitHub Pages等の静的ホスティングでも同じように動く。○×判定→解説→（間違えた問題があれば）その場での復習、の流れは全モード共通。

## 構成

```
index.html            配布・プレイ用の単一ファイル（build.jsで生成、data/*.jsを埋め込み済み）
template.html          開発用テンプレート（data/*.jsを<script src>で読み込む版。編集はここで行う）
build.js               template.html + data/*.js から index.html を再生成するビルドスクリプト
data/
  proper-nouns.js      共通の固有名詞→表示用大文字表記マップ（PROPER_NOUNS）
  general-verb-basic.js    一般動詞の文（基本）（6問）
  be-verb.js               be動詞の文（25問）
  general-verb-advanced.js 一般動詞の文（応用）（25問）
  svoo-svoc.js             文型（give型・call型）（5問）
  can-will.js              can・willの文（6問）
  negative.js              否定文（3問）
  there-is-are.js          There is/areの文（3問）
  preposition.js           前置詞を使った文（27問）
  modal-frequency.js       助動詞・頻度の文（19問）
  comparative.js           比較の文（15問）
  infinitive.js            不定詞の文（31問）
  gerund.js                動名詞の文（9問）
  passive.js               受け身の文（6問）
  present-perfect.js       現在完了の文（10問）
  participle.js            分詞の後置修飾（9問）
  relative-pronoun.js      関係代名詞の文（9問）
  idiom.js                 熟語表現の文（10問）
  conjunction.js           接続詞を使った文（13問）
  subjunctive.js           仮定法の文（11問）
  indirect-question.js     間接疑問文（3問）
docs/data-schema.md   データ設計方針（フォーマット・大文字化ルール・抽出ロジック・単元一覧の決定事項）
qa/validate.js        bank/answerの整合性・重複・件数を機械チェックするNode.jsスクリプト
```

単元ごとに問題数が異なる（3問〜31問、合計245問）。1回の出題数は `Math.min(5, その単元の問題数)` で自動的に決まるため、3問しかない単元は3問とも出題される。

## データの読み込み方式

編集用の元データは `data/<unit-id>.js` に単元ごと分割されていて、`UNITS.push({...})` という形でグローバル配列 `UNITS` に自己登録する形式（`fetch`は使わない）。配布・プレイ用の `index.html` は、`node build.js` を実行するとこれらのファイルの中身がすべて1つの `<script>` タグに埋め込まれ、外部ファイルへの依存が一切ない単一HTMLとして再生成される。データを編集した後は必ず `node build.js` を実行して `index.html` を更新すること。詳細は [docs/data-schema.md](docs/data-schema.md) を参照。

**注意**：`index.html` はビルド生成物なので直接編集しない。画面ロジックやCSSを変更する場合は `template.html` を編集してから `node build.js` を実行する。

## QA

```
node qa/validate.js
```

全単元・全問題について、bank/answerが同じ語の集合になっているか、単元内に重複文がないか、explanationが空でないか、全単元合計が245問あるか、を機械チェックする。エラーがあれば該当ファイルを修正してから再実行する。

## 単元を追加する手順

1. `data/<new-unit-id>.js` を新規作成し、`docs/data-schema.md` のフォーマットに従って `UNITS.push({ id, name, description, questions: [...] })` を書く。
2. `build.js` の `unitFiles` 配列に新しいファイル名を追加する（表示順はこの配列の順番）。
3. `node qa/validate.js` を実行して整合性を確認する。
4. `node build.js` を実行して `index.html` を再生成する。

固有名詞を使う場合は `data/proper-nouns.js` の `PROPER_NOUNS` に無いものだけ、各問題の `alwaysCapitalize` にトークン（小文字）を追加すればよい（文頭に来る固有名詞は自動で大文字化されるため登録不要）。

## データの出典

現行の245問は教員から提供されたCSVを変換したもの。元CSVの23個のグループ番号を、内容から判断して20単元に再編している（詳細は [docs/data-schema.md](docs/data-schema.md) 5節・7節）。

## 今後の拡張候補

過去進行形、未来形の別パターン、話法（直接・間接話法）など、CSVに含まれていない文法項目。
