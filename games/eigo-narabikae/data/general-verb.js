UNITS.push({
  id: "general-verb",
  name: "一般動詞",
  description: "3人称単数のsなど",
  questions: [
    {
      id: "general-verb-001",
      bank: ["plays","soccer","every","he","day","."],
      answer: ["he","plays","soccer","every","day","."],
      explanation: "主語が3人称単数（he）のとき、一般動詞には s がつきます。並び順は「主語→動詞→目的語→頻度を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-002",
      bank: ["a","reads","she","book","every","night","."],
      answer: ["she","reads","a","book","every","night","."],
      explanation: "主語が3人称単数（she）のとき、動詞readにsがつきます。並び順は「主語→動詞→目的語→時を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-003",
      bank: ["watches","tv","after","she","dinner","."],
      answer: ["she","watches","tv","after","dinner","."],
      explanation: "watchのように語尾がchで終わる動詞は、3人称単数でesをつけます。並び順は「主語→動詞→目的語→時を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-004",
      bank: ["ken","music","likes","very","much","."],
      answer: ["ken","likes","music","very","much","."],
      explanation: "主語が人名（3人称単数）のとき、動詞likeにsがつきます。並び順は「主語→動詞→目的語→強調の語句」です。",
      alwaysCapitalize: ["ken"]
    },
    {
      id: "general-verb-005",
      bank: ["mika","cat","has","a","cute","."],
      answer: ["mika","has","a","cute","cat","."],
      explanation: "haveは3人称単数でhasに形が変わる特別な動詞です。並び順は「主語→動詞→目的語（冠詞＋形容詞＋名詞）」です。",
      alwaysCapitalize: ["mika"]
    },
    {
      id: "general-verb-006",
      bank: ["goes","he","school","to","bike","by","."],
      answer: ["he","goes","to","school","by","bike","."],
      explanation: "goは3人称単数でgoesになります。並び順は「主語→動詞→場所→手段を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-007",
      bank: ["studies","hard","she","math","every","day","."],
      answer: ["she","studies","math","hard","every","day","."],
      explanation: "語尾が子音字+yで終わる動詞studyは、3人称単数でyをiに変えてesをつけます。並び順は「主語→動詞→目的語→様態→頻度を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-008",
      bank: ["play","we","tennis","every","weekend","."],
      answer: ["we","play","tennis","every","weekend","."],
      explanation: "主語がwe（複数）のとき、一般動詞にsはつきません。並び順は「主語→動詞→目的語→頻度を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-009",
      bank: ["do","any","sports","you","like","?"],
      answer: ["do","you","like","any","sports","?"],
      explanation: "主語がyouの一般動詞の疑問文はdoを文頭に置きます。並び順は「do→主語→動詞→目的語」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-010",
      bank: ["does","play","tom","tennis","well","?"],
      answer: ["does","tom","play","tennis","well","?"],
      explanation: "主語が3人称単数の疑問文はdoesを使い、動詞は原形に戻します。並び順は「does→主語→動詞→目的語→様態を表す語句」です。",
      alwaysCapitalize: ["tom"]
    },
    {
      id: "general-verb-011",
      bank: ["does","not","play","he","soccer","."],
      answer: ["he","does","not","play","soccer","."],
      explanation: "3人称単数の否定文はdoes notを動詞の前に置き、動詞は原形になります。並び順は「主語→does not→動詞→目的語」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-012",
      bank: ["like","i","japanese","food","very","much","."],
      answer: ["i","like","japanese","food","very","much","."],
      explanation: "主語がI（1人称）のとき、一般動詞にsはつきません。並び順は「主語→動詞→目的語→強調の語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-013",
      bank: ["speaks","english","well","she","very","."],
      answer: ["she","speaks","english","very","well","."],
      explanation: "主語が3人称単数（she）のとき、動詞speakにsがつきます。並び順は「主語→動詞→目的語→様態を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-014",
      bank: ["teaches","math","mr.","smith","us","."],
      answer: ["mr.","smith","teaches","us","math","."],
      explanation: "teachのように語尾がchで終わる動詞は、3人称単数でesをつけます。並び順は「主語→動詞→目的語（人）→目的語（もの）」です。",
      alwaysCapitalize: ["smith"]
    },
    {
      id: "general-verb-015",
      bank: ["do","not","we","homework","our","do","."],
      answer: ["we","do","not","do","our","homework","."],
      explanation: "主語weの否定文はdo notを動詞の前に置きます。並び順は「主語→do not→動詞→目的語」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-016",
      bank: ["runs","fast","he","very","park","in","the","."],
      answer: ["he","runs","very","fast","in","the","park","."],
      explanation: "主語が3人称単数（he）のとき、動詞runにsがつきます。並び順は「主語→動詞→様態→場所を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-017",
      bank: ["it","rains","a","lot","japan","in","."],
      answer: ["it","rains","a","lot","in","japan","."],
      explanation: "天候を表すitは3人称単数扱いなので、動詞rainにsがつきます。並び順は「主語→動詞→程度→場所を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-018",
      bank: ["you","and","play","i","games","."],
      answer: ["you","and","i","play","games","."],
      explanation: "youとIをandで結んだ主語は複数扱いになるので、動詞にsはつきません。並び順は「主語→動詞→目的語」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-019",
      bank: ["washes","dog","her","every","she","week","."],
      answer: ["she","washes","her","dog","every","week","."],
      explanation: "washのように語尾がshで終わる動詞は、3人称単数でesをつけます。並び順は「主語→動詞→目的語→頻度を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-020",
      bank: ["they","breakfast","eat","every","morning","early","."],
      answer: ["they","eat","breakfast","early","every","morning","."],
      explanation: "主語がthey（複数）のとき、一般動詞にsはつきません。並び順は「主語→動詞→目的語→様態→頻度を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-021",
      bank: ["comes","tokyo","from","she","japan","in","."],
      answer: ["she","comes","from","tokyo","in","japan","."],
      explanation: "主語が3人称単数（she）のとき、動詞comeにsがつきます。並び順は「主語→動詞→場所を表す語句（詳しい場所→広い場所）」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-022",
      bank: ["does","tom","what","study","school","after","?"],
      answer: ["what","does","tom","study","after","school","?"],
      explanation: "疑問詞whatを使う3人称単数の疑問文は、whatを文頭に置きdoesを続けます。並び順は「what→does→主語→動詞→時を表す語句」です。",
      alwaysCapitalize: ["tom"]
    },
    {
      id: "general-verb-023",
      bank: ["does","not","like","she","tea","."],
      answer: ["she","does","not","like","tea","."],
      explanation: "3人称単数の否定文はdoes notを動詞の前に置き、動詞は原形になります。並び順は「主語→does not→動詞→目的語」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-024",
      bank: ["cooks","dinner","father","my","every","sunday","."],
      answer: ["my","father","cooks","dinner","every","sunday","."],
      explanation: "my fatherは3人称単数扱いなので、動詞cookにsがつきます。並び順は「主語→動詞→目的語→頻度を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-025",
      bank: ["study","we","english","hard","classroom","in","the","."],
      answer: ["we","study","english","hard","in","the","classroom","."],
      explanation: "主語がwe（複数）のとき、動詞にsはつきません。並び順は「主語→動詞→目的語→様態→場所を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-026",
      bank: ["has","she","lot","of","books","a","."],
      answer: ["she","has","a","lot","of","books","."],
      explanation: "haveは3人称単数でhasに変わります。並び順は「主語→動詞→目的語（数量表現＋名詞）」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-027",
      bank: ["do","play","when","you","tennis","?"],
      answer: ["when","do","you","play","tennis","?"],
      explanation: "疑問詞whenを使う疑問文は、whenを文頭に置きdoを続けます。並び順は「when→do→主語→動詞→目的語」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-028",
      bank: ["brother","my","piano","the","plays","well","."],
      answer: ["my","brother","plays","the","piano","well","."],
      explanation: "my brotherは3人称単数扱いなので、動詞playにsがつきます。並び順は「主語→動詞→目的語→様態を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "general-verb-029",
      bank: ["ms.","green","science","us","teaches","."],
      answer: ["ms.","green","teaches","us","science","."],
      explanation: "teachのように語尾がchで終わる動詞は、3人称単数でesをつけます。並び順は「主語→動詞→目的語（人）→目的語（もの）」です。",
      alwaysCapitalize: ["green"]
    },
    {
      id: "general-verb-030",
      bank: ["do","not","play","they","video","games","."],
      answer: ["they","do","not","play","video","games","."],
      explanation: "主語theyの否定文はdo notを動詞の前に置きます。並び順は「主語→do not→動詞→目的語」です。",
      alwaysCapitalize: []
    }
  ]
});
