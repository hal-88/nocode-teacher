# データ設計方針（architect決定事項）

このドキュメントは `eigo-narabikae` 単元別拡張の設計決定をまとめたものです。以降のcontent/QA/integrationエージェントはこれに従ってください。

## 1. ファイル分割方針

**単元ごとに別ファイルに分ける。** 理由：あとから単元を追加・レビューしやすい（1単元1PR/1エージェント担当にできる）、既存単元を壊さずに増やせる。

**フォーマットはJSONではなくJSファイル（グローバル配列にpushする形）を採用する。**

理由：本アプリは `file://` で直接開いても動く一枚HTMLとして運用されてきた（`nocode-teacher/games/*` は他のゲームも単一HTMLファイル）。`fetch()` でJSONを読み込む方式は `file://` プロトコルではCORSエラーになりブラウザ直開きができなくなる。`<script src="...">` で読み込むJSファイルなら、GitHub Pagesでも `file://` 直開きでも同じように動く。

配置場所：`data/<unit-id>.js`

各ファイルの中身：

```js
UNITS.push({
  id: "general-verb",
  name: "一般動詞",
  description: "3人称単数のsなど",
  questions: [
    {
      id: "general-verb-001",
      bank: ["plays", "soccer", "every", "he", "day", "."],
      answer: ["he", "plays", "soccer", "every", "day", "."],
      explanation: "主語が3人称単数（he）のとき、一般動詞には s がつきます。並び順は「主語→動詞→目的語→頻度を表す語句」です。",
      alwaysCapitalize: []
    }
    // ... 全30問
  ]
});
```

`index.html` 側で `<script>const UNITS = [];</script>` を各unitスクリプトより前に置き、その後に `data/general-verb.js` など10ファイルを `<script>` タグで読み込む。読み込み順が単元一覧の表示順になる。

## 2. 大文字化ルール（`i`/`english`ハードコード問題の解消）

現状は `tileLabel()` 内で `i`→`I`、`english`→`English` のみ個別ハードコードされている。単元が増えると `Japan`・`Monday`・`Ms. Smith` のような固有名詞が増えるため、以下の二段構えにする。

1. **共通の固有名詞リスト**（`data/proper-nouns.js`）に、複数単元で繰り返し使う可能性が高い語をあらかじめ登録しておく。

```js
const PROPER_NOUNS = {
  "i": "I",
  "english": "English",
  "japan": "Japan",
  "japanese": "Japanese",
  "tokyo": "Tokyo",
  "america": "America",
  "american": "American",
  "monday": "Monday", "tuesday": "Tuesday", "wednesday": "Wednesday",
  "thursday": "Thursday", "friday": "Friday", "saturday": "Saturday", "sunday": "Sunday",
  "ms.": "Ms.", "mr.": "Mr.", "mrs.": "Mrs."
};
```

2. **各questionの `alwaysCapitalize` 配列**に、その問題内だけで使う固有名詞（人名など）をトークンそのままの形（bank/answer内の表記と完全一致する文字列）で列挙する。例：`alwaysCapitalize: ["ken", "mika"]` のように bank 内のトークン（小文字）を指定すると、表示時にその語の先頭が大文字化される。

`tileLabel(token, question)` は次の優先順位で表示ラベルを決める：
1. `question.alwaysCapitalize` にトークン（小文字比較）が含まれる → 元のトークンの先頭を大文字化
2. `PROPER_NOUNS` に一致するキーがある → 登録済みの表記を使う
3. どちらでもない → トークンをそのまま表示（文頭の大文字化は別途 `formatDisplay` の1語目処理で行う）

固有名詞をbank/answerに使う場合、**トークン自体は小文字**で統一する（例: `"japan"` であって `"Japan"` ではない）。これにより bank/answer の集合比較（大文字小文字を無視しない単純な文字列比較）が崩れない。

## 3. bank/answer 制約の機械チェック

`bank` と `answer` は同じ語の多重集合（並び替えれば一致）でなければならない。QAエージェントは以下のロジックで全問題を検証する（Node.jsスクリプト、`qa/validate.js`）：

```js
function sameMultiset(a, b) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}
```

不一致が1件でもあれば、該当unit・question idを列挙してQAエージェントが content エージェントに差し戻す。

## 4. ランダム5問抽出ロジックの責務分担

- **データ側の責務**：各単元30問という「プールの用意」のみ。抽出ロジックへの関与なし。
- **UI/ロジック側の責務**：
  - 単元選択時、その単元の30問プールから重複なく5問をランダム抽出する（Fisher-Yatesシャッフル→先頭5件）。
  - 直近に出題した問題IDを `localStorage`（キー例：`eigo-narabikae-recent-<unitId>`）に保存し、次回抽出時はプール30問のうち「直近セットに含まれていた問題」を除いた25問を優先的にシャッフル対象にする（25問すべてが直近セットと重複するような小さいプールでは通常の30問シャッフルにフォールバック）。
  - 復習ラウンド（間違えた問題の再出題）は既存仕様のまま、`recent` 除外ロジックの対象外とする。

## 5. 単元一覧・ID一覧（第1フェーズ）

| 順序 | id | 単元名 |
|---|---|---|
| 1 | general-verb | 一般動詞 |
| 2 | be-negative | be動詞の否定文 |
| 3 | question-words | 疑問詞 |
| 4 | present-progressive | 現在進行形 |
| 5 | past-tense | 過去形 |
| 6 | can | canの文 |
| 7 | comparative | 比較級 |
| 8 | infinitive-purpose | 不定詞〈目的〉 |
| 9 | have-to | have to |
| 10 | passive | 受け身 |

第2フェーズ（未来形・助動詞・動名詞・接続詞・現在完了・関係代名詞など）を追加する際は、`data/<new-unit-id>.js` を1ファイル追加し、`index.html` の `<script>` 読み込みリストに1行追加するだけで拡張できる。

## 6. 問題作成ガイドライン（contentエージェント向け）

- 対象レベル：中1〜中2の教科書レベル。単語・語彙は中学生が読んで意味がわかるもの。
- 1問のbank語数：6〜9語程度（記号「.」「?」を含む）。既存10問を参考にする。
- 同一単元内で30問すべての英文（answerの並び）が異なること。同じ文型パターンの繰り返しは可だが、単語・主語・状況を変えてバリエーションを作る。
- explanationは2文程度、40〜80字目安。「なぜその語順になるか」という文法ルールの説明＋「主語→◯◯→◯◯」のような語順パターンを明記する（既存10問のスタイルを踏襲）。
- 固有名詞を使う場合は本ドキュメント2節のルールに従い、bank/answerのトークンは小文字で統一し、必要なら `alwaysCapitalize` に列挙する。
- 提出前セルフチェック：担当unit内で (a) 全30問のbank/answerが同じ語集合になっているか、(b) 30問の英文がすべて異なるか、を目視・機械的に確認する。

## 7. 既存10問の扱い

既存の `eigo_narabikae.html` 内 `DATA` 配列の10問は、各単元の1問目（`<unit-id>-001`）としてそのまま採用する（下記「参考例」）。contentエージェントは自分の担当単元の001番をこの内容で作成し、002〜030を新規作成する。

- general-verb-001: bank `['plays','soccer','every','he','day','.']` / answer `['he','plays','soccer','every','day','.']`
- be-negative-001: bank `['question','this','is','not','difficult','.']` / answer `['this','question','is','not','difficult','.']`
- question-words-001: bank `['do','you','sports','like','what','?']` / answer `['what','sports','do','you','like','?']`
- present-progressive-001: bank `['is','studying','she','english','now','.']` / answer `['she','is','studying','english','now','.']`
- past-tense-001: bank `['went','to','school','yesterday','i','.']` / answer `['i','went','to','school','yesterday','.']`
- can-001: bank `['can','swim','very','fast','he','.']` / answer `['he','can','swim','very','fast','.']`
- comparative-001: bank `['than','am','taller','my','brother','i','.']` / answer `['i','am','taller','than','my','brother','.']`
- infinitive-purpose-001: bank `['went','to','the','library','study','she','to','.']` / answer `['she','went','to','the','library','to','study','.']`
- have-to-001: bank `['have','to','do','my','homework','i','.']` / answer `['i','have','to','do','my','homework','.']`
- passive-001: bank `['is','written','by','this','letter','her','.']` / answer `['this','letter','is','written','by','her','.']`
