# データ設計方針（architect決定事項）

このドキュメントは `eigo-narabikae` のデータ設計の決定事項をまとめたものです。単元を追加・編集する際はこれに従ってください。

**2026-07-08更新**：問題データを教員から提供されたCSV（`単語並び替えゲームデータ.csv`、245文）に全面差し替え。単元数・構成・出題ロジックが変更されています（詳細は5節・6節）。

## 1. ファイル分割方針

**単元ごとに別ファイルに分ける。** 理由：あとから単元を追加・レビューしやすい、既存単元を壊さずに増やせる。

**フォーマットはJSONではなくJSファイル（グローバル配列にpushする形）を採用する。**

理由：`fetch()` でJSONを読み込む方式は `file://` プロトコルではCORSエラーになる。`<script src="...">` で読み込むJSファイルなら、GitHub Pagesでも `file://` 直開きでも同じように動く。ただし配布用の `index.html` は `build.js` によって全データを1枚に埋め込んだ単一ファイルとして生成される（6節参照）。

配置場所：`data/<unit-id>.js`

各ファイルの中身：

```js
UNITS.push({
  id: "general-verb-basic",
  name: "一般動詞の文（基本）",
  description: "現在形・過去形の基本文",
  questions: [
    {
      id: "general-verb-basic-001",
      level: 1,
      bank: ["plays", "soccer", "every", "he", "day", "."],
      answer: ["he", "plays", "soccer", "every", "day", "."],
      explanation: "主語が3人称単数（he）のとき、一般動詞には s がつきます。並び順は「主語→動詞→目的語→頻度を表す語句」です。",
      alwaysCapitalize: []
    }
    // ...
  ]
});
```

`template.html` 側で `<script>const UNITS = [];</script>` を各unitスクリプトより前に置き、その後に `data/*.js` を `<script>` タグで読み込む。読み込み順が単元一覧の表示順になる（`build.js` の `unitFiles` 配列で管理）。

## 2. 大文字化ルール

固有名詞の大文字化は以下の二段構えで解決する。

1. **共通の固有名詞リスト**（`data/proper-nouns.js`）に、複数単元で使う固有名詞（人名・地名・月名・曜日・RPGのような略語など）を登録しておく。CSVデータ変換時に自動検出したものも含め、現在35語ほど登録済み。
2. **各questionの `alwaysCapitalize` 配列**に、その問題内だけで使う固有名詞をトークンそのままの形（小文字）で列挙する。

`tileLabel(token, question)` は次の優先順位で表示ラベルを決める：
1. `question.alwaysCapitalize` にトークン（小文字比較）が含まれる → 先頭を大文字化
2. `PROPER_NOUNS` に一致するキーがある → 登録済みの表記を使う（"rpg games"→"RPG games" のような全体置換にも対応）
3. どちらでもない → トークンをそのまま表示（文頭の大文字化は `formatDisplay` の1語目処理で別途行う）

固有名詞をbank/answerに使う場合、**トークン自体は小文字**で統一する。文頭に来る固有名詞（例：Okinawa, Keiko）はPROPER_NOUNSに登録しなくても文頭大文字化ロジックで自動的に正しく表示されるため、登録は「文中に出現しうる語」だけで足りる。

## 3. bank/answer 制約の機械チェック

`bank` と `answer` は同じ語の多重集合（並び替えれば一致）でなければならない。`qa/validate.js` が全問題を検証する：

```js
function sameMultiset(a, b) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}
```

あわせて以下もチェックする：単元内の文重複なし、`answer` が `.` か `?` で終わる、`alwaysCapitalize` のトークンが実際に `bank` に存在する、`explanation` が空でなくTODOマーカーが残っていない、全単元合計の問題数が期待値と一致する。

## 4. ランダム抽出ロジックの責務分担

- **データ側の責務**：各単元の問題プールの用意のみ（単元ごとに問題数は異なってよい）。
- **UI/ロジック側の責務**：
  - 単元選択時、`Math.min(MAX_QUESTIONS_PER_ROUND, unit.questions.length)` 問（`MAX_QUESTIONS_PER_ROUND = 5`）をランダム抽出する。問題数がそれ未満の単元は保有する全問を出題する。
  - 直近に出題した問題IDを `localStorage`（キー：`eigo-narabikae-recent-<unitId>`）に保存し、次回抽出時は直近セットに含まれていた問題を除いたプールを優先的にシャッフル対象にする（除外後のプールが必要数未満なら通常の全プールシャッフルにフォールバック）。
  - 復習ラウンド（間違えた問題の再出題）は `recent` 除外ロジックの対象外。

## 5. 単元一覧（2026-07-08 CSV差し替え後）

CSV（245文、元は23個の「LEVEL/グループ番号」に分類）を、内容から判断した20単元に再編した（一部グループは問題数が少なかったため近い文法テーマへ統合）。表示順は `build.js` の `unitFiles` 配列の順。

| id | 単元名 | 問題数 | 元CSVグループ番号 |
|---|---|---|---|
| general-verb-basic | 一般動詞の文（基本） | 6 | 1 |
| be-verb | be動詞の文 | 25 | 2 |
| general-verb-advanced | 一般動詞の文（応用） | 25 | 3 |
| svoo-svoc | 文型（give型・call型） | 5 | 4+5 |
| can-will | can・willの文 | 6 | 6 |
| negative | 否定文 | 3 | 7 |
| there-is-are | There is/areの文 | 3 | 8 |
| preposition | 前置詞を使った文 | 27 | 11 |
| modal-frequency | 助動詞・頻度の文 | 19 | 12 |
| comparative | 比較の文 | 15 | 13 |
| infinitive | 不定詞の文 | 31 | 14+25 |
| gerund | 動名詞の文 | 9 | 15 |
| passive | 受け身の文 | 6 | 16 |
| present-perfect | 現在完了の文 | 10 | 17+71 |
| participle | 分詞の後置修飾 | 9 | 18 |
| relative-pronoun | 関係代名詞の文 | 9 | 19 |
| idiom | 熟語表現の文 | 10 | 21 |
| conjunction | 接続詞を使った文 | 13 | 22 |
| subjunctive | 仮定法の文 | 11 | 23 |
| indirect-question | 間接疑問文 | 3 | 26 |

合計245問。

新しい単元を追加する場合は `data/<new-unit-id>.js` を1ファイル追加し、`build.js` の `unitFiles` 配列に1行追加すればよい（3節のQAスクリプトが自動で整合性を検証する）。

## 6. ビルド方式（単一ファイル配布）

`template.html`（開発用、`<script src="data/*.js">` で読み込む）を編集し、`node build.js` を実行すると、全データを埋め込んだ配布・プレイ用の単一ファイル `index.html` が再生成される。`index.html` は直接編集しない（ビルド生成物のため）。詳細は [README.md](../README.md) を参照。

## 7. 問題データの出典

現行の245問は教員から提供されたCSV（`単語並び替えゲームデータ - シート1 (1).csv`）を変換したもの。変換時の自動処理内容：
- 各セルの前後空白除去、末尾の終端記号（`.`/`?`）欠落を補完
- 明らかなスペルミスの修正（例："MIdori Juior High School"→"Midori Junior High School"、"socccer"→"soccer" など）
- 文頭以外に出現する大文字始まりトークンを固有名詞として自動検出し `PROPER_NOUNS` に登録
- `bank`は`answer`をそのままコピーして生成（表示時にシャッフルするため、CSV側の並び順は保持不要）
- `explanation`（文法解説）は単元ごとにcontentエージェントが執筆
- CSV側の「LEVEL」列（1〜3）を各questionの `level` フィールドとして保持（8節参照）。異常値（1〜3の範囲外のもの、元データに2件だけ混入していた `6`）は `1` に正規化した

## 8. 学習モード（単元／レベル／苦手復習）と `level` フィールド

トップ画面で3つのモードを選べる（`state.mode`: `'unit' | 'level' | 'weak'`）。

- **単元モード**：`data/<unit-id>.js` の1単元から出題（従来通り）。
- **レベルモード**：各questionの `level`（1〜3の数値、必須フィールド）でALL_QUESTIONS（全単元を1つにまとめたフラット配列）をフィルタし、単元をまたいでランダム抽出する。出題中のタグ表示は、そのquestionが元々どの単元に属するか（`QUESTION_UNIT_MAP`で逆引き）を使う。
- **苦手復習モード**：`localStorage`（キー `eigo-narabikae-wrong-bank`）に貯まった「これまで間違えた問題のid一覧」から出題する。モードを問わず、`submitAnswer()` で不正解になった問題は自動でこのバンクに追加される。苦手復習モード中に正解するとバンクから取り除かれる（＝そのモードでの正解だけが「苦手卒業」の判定に使われる）。バンクが空のときはトップ画面に苦手復習の選択肢自体を出さない。

新しい単元を追加する際は、各questionに `level: 1`〜`3` の数値フィールドを必ず含めること（`qa/validate.js` がこれを検証する）。
