/* QA: bank/answer整合性・重複・件数チェック（docs/data-schema.md 3節） */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const unitFiles = [
  'general-verb.js', 'be-negative.js', 'question-words.js',
  'present-progressive.js', 'past-tense.js', 'can.js', 'comparative.js',
  'infinitive-purpose.js', 'have-to.js', 'passive.js'
];

const UNITS = [];
global.UNITS = UNITS;

let hadLoadError = false;
unitFiles.forEach(f => {
  const full = path.join(dataDir, f);
  if (!fs.existsSync(full)) {
    console.error('MISSING FILE: ' + f);
    hadLoadError = true;
    return;
  }
  try {
    const code = fs.readFileSync(full, 'utf8');
    // eslint-disable-next-line no-new-func
    new Function('UNITS', code)(UNITS);
  } catch (e) {
    console.error('PARSE ERROR in ' + f + ': ' + e.message);
    hadLoadError = true;
  }
});

if (hadLoadError) {
  console.error('\nAborting further checks due to load errors.');
  process.exit(1);
}

function sameMultiset(a, b) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

let errors = [];
let totalQuestions = 0;

if (UNITS.length !== unitFiles.length) {
  errors.push('Expected ' + unitFiles.length + ' units, found ' + UNITS.length);
}

const seenUnitIds = new Set();

UNITS.forEach(unit => {
  if (seenUnitIds.has(unit.id)) errors.push('Duplicate unit id: ' + unit.id);
  seenUnitIds.add(unit.id);

  const qs = unit.questions || [];
  totalQuestions += qs.length;

  if (qs.length !== 30) {
    errors.push('[' + unit.id + '] expected 30 questions, found ' + qs.length);
  }

  const seenSentences = new Set();
  const seenIds = new Set();
  qs.forEach((q, i) => {
    const label = unit.id + '#' + (i + 1) + ' (' + q.id + ')';

    if (seenIds.has(q.id)) errors.push(label + ': duplicate question id');
    seenIds.add(q.id);

    if (!q.bank || !q.answer) {
      errors.push(label + ': missing bank/answer');
      return;
    }
    if (!sameMultiset(q.bank, q.answer)) {
      errors.push(label + ': bank/answer token multiset mismatch — bank=[' + q.bank.join(',') + '] answer=[' + q.answer.join(',') + ']');
    }
    if (q.bank.length < 6 || q.bank.length > 9) {
      errors.push(label + ': bank length ' + q.bank.length + ' outside 6-9 range');
    }
    // lowercase check (tokens should be lowercase; punctuation-only tokens exempt)
    q.bank.forEach(t => {
      if (/[a-z]/i.test(t) && t !== t.toLowerCase()) {
        errors.push(label + ': token "' + t + '" is not lowercase');
      }
    });

    const sentence = q.answer.join(' ');
    if (seenSentences.has(sentence)) {
      errors.push(label + ': duplicate sentence within unit — "' + sentence + '"');
    }
    seenSentences.add(sentence);

    if (!q.explanation || q.explanation.length < 20) {
      errors.push(label + ': explanation missing or too short');
    }
  });
});

console.log('Units loaded: ' + UNITS.length);
console.log('Total questions: ' + totalQuestions);
console.log('Errors: ' + errors.length);
if (errors.length > 0) {
  console.log('\n--- ERROR DETAIL ---');
  errors.forEach(e => console.log(' - ' + e));
  process.exit(1);
} else {
  console.log('\nAll checks passed.');
}
