/*
 * template.html（data/*.js を <script src> で読み込む開発用テンプレート）から、
 * 全データを1枚に埋め込んだ配布・プレイ用の単一HTML index.html を生成するビルドスクリプト。
 *
 * 使い方: 単元データ(data/*.js)やtemplate.htmlの画面ロジックを編集したら、
 *   node build.js
 * を実行して index.html を再生成する（何度でも再実行可能。template.htmlは書き換わらない）。
 * index.html はこのままメールで送ったりUSBに入れたりしても
 * 単体で動く（外部ファイルへの依存なし）。
 */
const fs = require('fs');
const path = require('path');

const root = __dirname;
const templatePath = path.join(root, 'template.html');
const htmlPath = path.join(root, 'index.html');

const unitFiles = [
  'proper-nouns.js',
  'general-verb-basic.js',
  'be-verb.js',
  'general-verb-advanced.js',
  'svoo-svoc.js',
  'can-will.js',
  'negative.js',
  'there-is-are.js',
  'preposition.js',
  'modal-frequency.js',
  'comparative.js',
  'infinitive.js',
  'gerund.js',
  'passive.js',
  'present-perfect.js',
  'participle.js',
  'relative-pronoun.js',
  'idiom.js',
  'conjunction.js',
  'subjunctive.js',
  'indirect-question.js'
];

let html = fs.readFileSync(templatePath, 'utf8');

const startMarker = '<!-- ============ DATA (unit files) ============ -->';
const endMarkerPattern = /<script src="data\/indirect-question\.js"><\/script>\s*/;

const startIdx = html.indexOf(startMarker);
const endMatch = html.match(endMarkerPattern);

if (startIdx === -1 || !endMatch) {
  console.error('template.html 内にマーカーが見つかりません。template.htmlの構造が変わっていないか確認してください。');
  process.exit(1);
}

const endIdx = endMatch.index + endMatch[0].length;

const inlinedData = unitFiles
  .map(f => fs.readFileSync(path.join(root, 'data', f), 'utf8').trim())
  .join('\n\n');

const replacement = startMarker + '\n' +
  '<script>\n' +
  'const UNITS = [];\n\n' +
  inlinedData + '\n' +
  '</script>\n';

html = html.slice(0, startIdx) + replacement + html.slice(endIdx);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('index.html を template.html + data/*.js から再生成しました（' + unitFiles.length + 'ファイル分のデータを埋め込み）。');
