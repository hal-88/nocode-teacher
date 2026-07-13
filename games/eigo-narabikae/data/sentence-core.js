UNITS.push({
  id: "sentence-core",
  name: "文の骨格",
  description: "主語・動詞・補語など文の基本の組み立て",
  questions: [
    {
      id: "sentence-core-001",
      level: 1,
      jp: "私は卓球を練習します。",
      bank: ["i","practice","table","tennis","."],
      answer: ["i","practice","table","tennis","."],
      explanation: "practiceは「~を練習する」という意味の一般動詞です。並び順は「主語→動詞→目的語」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-002",
      level: 1,
      jp: "私のサッカーボールは祖母からです。",
      bank: ["my","soccer ball","is","from","my","grandmother","."],
      answer: ["my","soccer ball","is","from","my","grandmother","."],
      explanation: "主語が単数（my soccer ball）のとき、be動詞は is を使います。「主語→be動詞→from+人」の順で出どころを表します。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-003",
      level: 1,
      jp: "私は5時に帰宅します。",
      bank: ["i","get","home","at","five","."],
      answer: ["i","get","home","at","five","."],
      explanation: "get home で「帰宅する」という意味を表します。「主語→動詞→home→at+時刻」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-004",
      level: 1,
      jp: "そのネコはとてもかわいい。",
      bank: ["that","cat","is","so","cute","."],
      answer: ["that","cat","is","so","cute","."],
      explanation: "主語が単数（that cat）なので be動詞は is になります。「主語→be動詞→so+形容詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-005",
      level: 1,
      jp: "私は新しい自転車がほしい。",
      bank: ["i","want","a","new","bike","."],
      answer: ["i","want","a","new","bike","."],
      explanation: "wantは「~がほしい」という意味の一般動詞です。並び順は「主語→動詞→目的語(冠詞＋形容詞＋名詞)」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-006",
      level: 1,
      jp: "私たちの体育祭は９月にありました。",
      bank: ["our","sports day","was","in","september","."],
      answer: ["our","sports day","was","in","september","."],
      explanation: "過去のことを言うときは be動詞を was（単数）にします。「主語→be動詞(was)→in+月」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-007",
      level: 1,
      jp: "今日は晴れです。",
      bank: ["it","is","sunny","today","."],
      answer: ["it","is","sunny","today","."],
      explanation: "天気を表す文では、主語に it を使います。「it→be動詞→形容詞→today」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-008",
      level: 1,
      jp: "日本はアジアにある。",
      bank: ["japan","is","in","asia","."],
      answer: ["japan","is","in","asia","."],
      explanation: "in は「〜(の中)に」という位置関係を表す前置詞です。「主語→be動詞→in→場所」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-009",
      level: 1,
      jp: "彼女はバイオリンを弾く。",
      bank: ["she","plays","the","violin","."],
      answer: ["she","plays","the","violin","."],
      explanation: "主語が3人称単数（she）のとき、一般動詞には s がつきます。並び順は「主語→動詞→the+楽器名」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-010",
      level: 1,
      jp: "私たちは彼をマイクと呼ぶ。",
      bank: ["we","call","him","mike","."],
      answer: ["we","call","him","mike","."],
      explanation: "call型（SVOC）の文で、目的語=補語の関係になります。並び順は「主語→動詞→目的語→補語」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-011",
      level: 1,
      jp: "彼は私たちに数学を教えます。",
      bank: ["he","teaches","us","math","."],
      answer: ["he","teaches","us","math","."],
      explanation: "主語が3人称単数（he）のとき、一般動詞teachにはesがつきます。並び順は「主語→動詞→人→もの」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-012",
      level: 1,
      jp: "父は家族にぎょうざを作ります。",
      bank: ["my father","makes","gyoza","for","my family","."],
      answer: ["my father","makes","gyoza","for","my family","."],
      explanation: "主語が3人称単数（my father）のとき、一般動詞makeにはsがつきます。並び順は「主語→動詞→目的語→for+人」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-013",
      level: 1,
      jp: "私は母を尊敬しています。",
      bank: ["i","respect","my","mother","."],
      answer: ["i","respect","my","mother","."],
      explanation: "respectは「~を尊敬する」という意味の一般動詞です。並び順は「主語→動詞→所有格＋名詞」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-014",
      level: 1,
      jp: "おじいちゃんは若く見える。",
      bank: ["my","grandfather","looks","young","."],
      answer: ["my","grandfather","looks","young","."],
      explanation: "look（3人称単数で looks）は be動詞のように「〜に見える」を表す動詞です。「主語→looks→形容詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-015",
      level: 1,
      jp: "彼の言葉は彼女を怒らせた。",
      bank: ["his","words","made","her","angry","."],
      answer: ["his","words","made","her","angry","."],
      explanation: "make + 目的語 + 形容詞 で「~を…にする」という意味のSVOCの文です。「主語→made→目的語→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-016",
      level: 1,
      jp: "彼女の笑顔は私を前向きにさせます。",
      bank: ["her","smiles","keep","me","positive","."],
      answer: ["her","smiles","keep","me","positive","."],
      explanation: "keepを使ったcall型（SVOC）の文で、「〜を…のままにする」という意味です。並び順は「主語→動詞→目的語→補語」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-017",
      level: 1,
      jp: "コップにはあまり水がありません。",
      bank: ["there","isn't","much","water","in","the","glass","."],
      answer: ["there","isn't","much","water","in","the","glass","."],
      explanation: "「there isn't + 数えられない名詞」で「〜がほとんどない」を表す否定文です。「there→be動詞→名詞→場所を表す語句」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-018",
      level: 1,
      jp: "彼女はよい助言をくれました。",
      bank: ["she","gave","me","some","good","advice","."],
      answer: ["she","gave","me","some","good","advice","."],
      explanation: "giveの過去形はgaveという不規則変化です。並び順は「主語→動詞(過去形)→目的語(人)→目的語(もの)」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-019",
      level: 1,
      jp: "私のペンは机の上にあります。",
      bank: ["my","pen","is","on","the","desk","."],
      answer: ["my","pen","is","on","the","desk","."],
      explanation: "on は「〜の上に」という位置関係を表す前置詞です。「主語→be動詞→on→場所」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-020",
      level: 1,
      jp: "私のかばんの中には３冊本があります。",
      bank: ["there","are","three","books","in","my","bag","."],
      answer: ["there","are","three","books","in","my","bag","."],
      explanation: "「there are + 複数名詞」で「〜がある」を表します。「there→be動詞→名詞→場所を表す語句」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-021",
      level: 1,
      jp: "これらの考えはみんなにとって役に立ちます。",
      bank: ["these","ideas","are","helpful","for","everyone","."],
      answer: ["these","ideas","are","helpful","for","everyone","."],
      explanation: "for は「〜にとって」という対象を表す前置詞です。「主語→be動詞→補語→for→対象」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-022",
      level: 1,
      jp: "この本は私の生活を変えました。",
      bank: ["this","book","changed","my","life","."],
      answer: ["this","book","changed","my","life","."],
      explanation: "changeの過去形はchangedで、過去のできごとを表します。並び順は「主語→動詞(過去形)→目的語」です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-023",
      level: 1,
      jp: "彼女の夢は宇宙旅行をすることだ。",
      bank: ["her","dream","is","to","travel","in space","."],
      answer: ["her","dream","is","to","travel","in space","."],
      explanation: "「to+動詞の原形」が be動詞の補語になり「~することだ」という意味を表します。「主語→is→to→動詞の原形」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-024",
      level: 1,
      jp: "地球温暖化は大きな問題です。",
      bank: ["global","warming","is","a","big","problem","."],
      answer: ["global","warming","is","a","big","problem","."],
      explanation: "「主語＝補語」の関係を be動詞でつなぐSVCの文です。「主語→be動詞→a+形容詞+名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-025",
      level: 1,
      jp: "それは難しそうだ。",
      bank: ["it","sounds","difficult","."],
      answer: ["it","sounds","difficult","."],
      explanation: "sound（3人称単数で sounds）は be動詞のように「〜に聞こえる」を表す動詞です。「主語→sounds→形容詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-026",
      level: 1,
      jp: "彼は賢くてかっこいい。",
      bank: ["he","is","smart","and","cool","."],
      answer: ["he","is","smart","and","cool","."],
      explanation: "主語が3人称単数（he）のとき、be動詞は is を使います。2つの形容詞は and でつなぎます。「主語→be動詞→形容詞→and→形容詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-027",
      level: 2,
      jp: "京都には訪れるのによい場所がたくさんあります。",
      bank: ["there","are","many","good","places","to","visit","in kyoto","."],
      answer: ["there","are","many","good","places","to","visit","in kyoto","."],
      explanation: "「to+動詞の原形」が名詞を後ろから修飾し「~するための」という意味を表します。「there→are→places→to→動詞の原形」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-028",
      level: 1,
      jp: "その男の人はそんなに背が高くない。",
      bank: ["the","man","is","not","so","tall","."],
      answer: ["the","man","is","not","so","tall","."],
      explanation: "be動詞の否定文は、be動詞のすぐあとに not を置きます。「主語→be動詞→not→形容詞」の順になります。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-029",
      level: 2,
      jp: "私の夢はいつかイタリアを訪れることです。",
      bank: ["my dream","is","to","visit","italy","someday","."],
      answer: ["my dream","is","to","visit","italy","someday","."],
      explanation: "「to+動詞の原形」が be動詞の補語になり「~することだ」という意味を表します。「主語→is→to→visit→italy」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-030",
      level: 2,
      jp: "その公園はみどり公園と呼ばれています。",
      bank: ["that","park","is","called","midori park","."],
      answer: ["that","park","is","called","midori park","."],
      explanation: "動作をする人が示されない受け身の文です。「主語→be動詞→過去分詞→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-031",
      level: 2,
      jp: "この本は世界中の多くの人々に読まれています。",
      bank: ["this","book","is","read","by","many","people","around","the world","."],
      answer: ["this","book","is","read","by","many","people","around","the world","."],
      explanation: "受け身は「be動詞+過去分詞+by~」の形。「主語→be動詞→過去分詞→by→動作をする人」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-032",
      level: 3,
      jp: "部屋を掃除するのを手伝ってください。",
      bank: ["please","help","me","clean","the","room","."],
      answer: ["please","help","me","clean","the","room","."],
      explanation: "help + 人 + 動詞の原形 で「(人)が~するのを手伝う」という意味になります。「please→help→人→動詞の原形」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-033",
      level: 3,
      jp: "恵子はマイクが日本語の本を読むのを助けた。",
      bank: ["keiko","helped","mike","read","japanese","books","."],
      answer: ["keiko","helped","mike","read","japanese","books","."],
      explanation: "help + 人 + 動詞の原形 で「(人)が~するのを手伝う」という意味になります。「主語→helped→人→動詞の原形」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-034",
      level: 1,
      jp: "こちらは私の兄の武史です。",
      bank: ["this","is","my","brother","takeshi","."],
      answer: ["this","is","my","brother","takeshi","."],
      explanation: "人を紹介するときは This is ~. を使います。「this→is→my brother→名前」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-035",
      level: 1,
      jp: "AIは私たちの生活を便利にします。",
      bank: ["ai","makes","our","lives","convenient","."],
      answer: ["ai","makes","our","lives","convenient","."],
      explanation: "make + 目的語 + 形容詞 で「~を…にする」というSVOCの文です。「主語→makes→目的語→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-036",
      level: 1,
      jp: "たくさんの宿題は私を疲れさせます。",
      bank: ["a lot of","homework","makes","me","tired","."],
      answer: ["a lot of","homework","makes","me","tired","."],
      explanation: "homeworkは数えられない名詞で3人称単数扱いなので、makeに s がつきます。「主語→makes→目的語→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-037",
      level: 2,
      jp: "ランドセルはとても丈夫なので、長い間使うことができます。",
      bank: ["school backpacks","are","very","strong",",","so","we","can","use","them","for a long time","."],
      answer: ["school backpacks","are","very","strong",",","so","we","can","use","them","for a long time","."],
      explanation: "「~なので…」は so で2つの文をつなぎます。「主語→be動詞→形容詞→, so→主語→can+動詞の原形」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-038",
      level: 3,
      jp: "電車やバスがもっとあれば、多くの場所を訪れるのがもっと簡単になるでしょう。",
      bank: ["if","we","had","more","trains and buses",",","it","would","be","easier","to","visit","many places","."],
      answer: ["if","we","had","more","trains and buses",",","it","would","be","easier","to","visit","many places","."],
      explanation: "現実と違う想像は仮定法「if+主語+過去形, 主語+would+動詞の原形」で表します。「if節→主語→would→be→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "sentence-core-039",
      level: 2,
      jp: "自転車は環境にいいです。",
      bank: ["bicycles","are","good","for","the","environment","."],
      answer: ["bicycles","are","good","for","the","environment","."],
      explanation: "主語が複数（bicycles）なので be動詞は are を使います。「主語→be動詞→good→for→対象」の順です。",
      alwaysCapitalize: []
    }
  ]
});
