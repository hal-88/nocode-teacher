# 英文法 ならびかえトレーニング（単元別版）

中学英文法の並び替え学習アプリ。単元を選ぶと、その単元の問題プールからランダムに5問出題される。

## 遊び方

`index.html` はこれ1枚だけで動く単一ファイル（全データ埋め込み済み）。ダブルクリックしてブラウザで開くだけでよい（メール添付・USBコピーなど、`data/`フォルダを別途持ち歩く必要はない）。GitHub Pages等の静的ホスティングでも同じように動く。単元一覧から1つ選ぶと、その単元の30問プールからランダムに5問が出題される。○×判定→解説→（間違えた問題があれば）復習、の流れ。

## 構成

```
index.html            配布・プレイ用の単一ファイル（build.jsで生成、data/*.jsを埋め込み済み）
template.html          開発用テンプレート（data/*.jsを<script src>で読み込む版。編集はここで行う）
build.js               template.html + data/*.js から index.html を再生成するビルドスクリプト
data/
  proper-nouns.js     共通の固有名詞→表示用大文字表記マップ（PROPER_NOUNS）
  general-verb.js      一般動詞（30問）
  be-negative.js        be動詞の否定文（30問）
  question-words.js     疑問詞（30問）
  present-progressive.js 現在進行形（30問）
  past-tense.js          過去形（30問）
  can.js                 canの文（30問）
  comparative.js         比較級（30問）
  infinitive-purpose.js  不定詞〈目的〉（30問）
  have-to.js              have to（30問）
  passive.js              受け身（30問）
docs/data-schema.md   データ設計方針（フォーマット・大文字化ルール・抽出ロジックの決定事項）
qa/validate.js        bank/answerの整合性・重複・件数を機械チェックするNode.jsスクリプト
```

## データの読み込み方式

編集用の元データは `data/<unit-id>.js` に単元ごと分割されていて、`UNITS.push({...})` という形でグローバル配列 `UNITS` に自己登録する形式（`fetch`は使わない）。配布・プレイ用の `index.html` は、`node build.js` を実行するとこれら11ファイルの中身がすべて1つの `<script>` タグに埋め込まれ、外部ファイルへの依存が一切ない単一HTMLとして再生成される。データを編集した後は必ず `node build.js` を実行して `index.html` を更新すること。詳細は [docs/data-schema.md](docs/data-schema.md) を参照。

**注意**：`index.html` はビルド生成物なので直接編集しない。画面ロジックやCSSを変更する場合は `template.html` を編集してから `node build.js` を実行する。

## QA

```
node qa/validate.js
```

全単元・全問題について、bank/answerが同じ語の集合になっているか、単元内に重複文がないか、1単元30問あるか、を機械チェックする。エラーがあれば該当ファイルを修正してから再実行する。

## 単元を追加する手順（第2フェーズ以降）

1. `data/<new-unit-id>.js` を新規作成し、`docs/data-schema.md` のフォーマットに従って `UNITS.push({ id, name, description, questions: [...] })` を書く（30問目安）。
2. `build.js` の `unitFiles` 配列に新しいファイル名を追加する（表示順はこの配列の順番）。
3. `node qa/validate.js` を実行して整合性を確認する。
4. `node build.js` を実行して `index.html` を再生成する。

固有名詞を使う場合は `data/proper-nouns.js` の `PROPER_NOUNS` に無いものだけ、各問題の `alwaysCapitalize` にトークン（小文字）を追加すればよい。

## 今後の拡張候補（第2フェーズ）

過去進行形、未来形、助動詞、動名詞、接続詞、現在完了、関係代名詞など。
