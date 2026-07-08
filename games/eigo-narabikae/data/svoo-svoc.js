UNITS.push({
  id: "svoo-svoc",
  name: "文型（give型・call型）",
  description: "「主語+動詞+人+もの」「主語+動詞+目的語+補語」の文",
  questions: [
    {
      id: "svoo-svoc-001",
      bank: ["i'll","give","you","some","cookies","."],
      answer: ["i'll","give","you","some","cookies","."],
      explanation: "give型（SVOO）の文です。並び順は「主語→動詞→目的語(人)→目的語(もの)」です。",
      alwaysCapitalize: []
    },
    {
      id: "svoo-svoc-002",
      bank: ["she","gave","me","some","good","advice","."],
      answer: ["she","gave","me","some","good","advice","."],
      explanation: "giveの過去形はgaveという不規則変化です。並び順は「主語→動詞(過去形)→目的語(人)→目的語(もの)」です。",
      alwaysCapitalize: []
    },
    {
      id: "svoo-svoc-003",
      bank: ["we","call","him","mike","."],
      answer: ["we","call","him","mike","."],
      explanation: "call型（SVOC）の文で、目的語=補語の関係になります。並び順は「主語→動詞→目的語→補語」です。",
      alwaysCapitalize: []
    },
    {
      id: "svoo-svoc-004",
      bank: ["music","makes","me","happy","."],
      answer: ["music","makes","me","happy","."],
      explanation: "makeを使ったcall型（SVOC）の文で、「〜を…にする」という意味です。並び順は「主語→動詞→目的語→補語」です。",
      alwaysCapitalize: []
    },
    {
      id: "svoo-svoc-005",
      bank: ["her","smiles","keep","me","positive","."],
      answer: ["her","smiles","keep","me","positive","."],
      explanation: "keepを使ったcall型（SVOC）の文で、「〜を…のままにする」という意味です。並び順は「主語→動詞→目的語→補語」です。",
      alwaysCapitalize: []
    }
  ]
});
