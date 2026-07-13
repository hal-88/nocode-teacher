UNITS.push({
  id: "noun-chunk",
  name: "名詞のまとまり",
  description: "形容詞や前置詞句などで名詞をふくらませる",
  questions: [
    {
      id: "noun-chunk-001",
      level: 1,
      jp: "多くの小さな子どもたちがその博物館を訪れます。",
      bank: ["many","little","children","visit","the","museum","."],
      answer: ["many","little","children","visit","the","museum","."],
      explanation: "「数量(many)→形容詞→名詞」の順で名詞のまとまりを作ります。文全体は「主語→動詞→目的語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-002",
      level: 1,
      jp: "私はそこでたくさん写真を撮りました。",
      bank: ["i","took","a lot of","pictures","there","."],
      answer: ["i","took","a lot of","pictures","there","."],
      explanation: "過去の動作は動詞の過去形で表します。「主語→動詞の過去形→目的語→場所」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-003",
      level: 1,
      jp: "私は２冊の本を持っています。",
      bank: ["i","have","two","books","."],
      answer: ["i","have","two","books","."],
      explanation: "haveは「~を持っている」という意味の一般動詞です。並び順は「主語→動詞→数量＋名詞」です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-004",
      level: 1,
      jp: "私はこのイベントについての情報が必要です。",
      bank: ["i","need","some","information","about","this event","."],
      answer: ["i","need","some","information","about","this event","."],
      explanation: "about は「〜についての」という内容を表す前置詞です。「主語→動詞→information→about→話題」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-005",
      level: 1,
      jp: "私は今日、たくさんの宿題があります。",
      bank: ["i","have","a lot of","homework","today","."],
      answer: ["i","have","a lot of","homework","today","."],
      explanation: "a lot ofで「たくさんの」という意味になります。並び順は「主語→動詞→数量＋名詞→時を表す語句」です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-006",
      level: 1,
      jp: "彼らは朝食にパンを少し食べました。",
      bank: ["they","ate","some","bread","for","breakfast","."],
      answer: ["they","ate","some","bread","for","breakfast","."],
      explanation: "for は「〜に(用いる)」という用途を表す前置詞です。「主語→動詞→目的語→for→breakfast」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-007",
      level: 1,
      jp: "その二匹の猫はテーブルの下にいます。",
      bank: ["the","two","cats","are","under","the","table","."],
      answer: ["the","two","cats","are","under","the","table","."],
      explanation: "under は「〜の下に」という位置関係を表す前置詞です。「主語→be動詞→under→場所」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-008",
      level: 1,
      jp: "向こうにいるあの少年はケンです。",
      bank: ["that","boy","over there","is","ken","."],
      answer: ["that","boy","over there","is","ken","."],
      explanation: "「over there」で「向こうに」という場所を表し、boy を後ろから修飾します。「主語(that boy over there)→be動詞→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-009",
      level: 1,
      jp: "男の子が学校に行く途中で小さな犬を見つけました。",
      bank: ["a","boy","found","a","small","dog","on","his","way","to","school","."],
      answer: ["a","boy","found","a","small","dog","on","his","way","to","school","."],
      explanation: "「冠詞→形容詞→名詞」の順で名詞のまとまりを作ります。文全体は「主語→動詞→目的語→場所を表す語句」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-010",
      level: 1,
      jp: "その物語はアメリカの野球選手についてです。",
      bank: ["the","story","is","about","a","baseball","player","in","america","."],
      answer: ["the","story","is","about","a","baseball","player","in","america","."],
      explanation: "前置詞句 in America が baseball player を後ろから修飾します。「主語→be動詞→about→名詞→in+場所」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-011",
      level: 1,
      jp: "私の大好きな食べ物はスパゲッティです。",
      bank: ["my","favorite","food","is","spaghetti","."],
      answer: ["my","favorite","food","is","spaghetti","."],
      explanation: "主語が単数（my favorite food）のとき、be動詞は is を使います。「主語→be動詞→名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-012",
      level: 1,
      jp: "彼女の新しいタブレットはとてもよい。",
      bank: ["her","new","tablet","is","very","good","."],
      answer: ["her","new","tablet","is","very","good","."],
      explanation: "「所有格(her)→形容詞→名詞」の順で名詞のまとまりを作ります。文全体は「主語→be動詞→very+形容詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-013",
      level: 2,
      jp: "あなたといっしょに走ることは楽しい思い出でした。",
      bank: ["running","with","you","was","a","happy","memory","."],
      answer: ["running","with","you","was","a","happy","memory","."],
      explanation: "動詞のing形（動名詞）が主語になり「~することは」という意味を表します。「動名詞句→was→a+形容詞+名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-014",
      level: 2,
      jp: "自転車に乗ることはとても楽しい。",
      bank: ["to","ride","a","bike","is","a lot of","fun","."],
      answer: ["to","ride","a","bike","is","a lot of","fun","."],
      explanation: "「to+動詞の原形」が文の主語になり「~することは」という意味を表します。「to→動詞の原形→is→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-015",
      level: 1,
      jp: "彼女はブラスバンドの一員です。",
      bank: ["she","is","a","member","of","the","brass band","."],
      answer: ["she","is","a","member","of","the","brass band","."],
      explanation: "of は「〜の」という所属を表す前置詞です。「主語→be動詞→a member→of→所属先」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-016",
      level: 1,
      jp: "私は緑中学校の生徒です。",
      bank: ["i","am","a","student","at","midori junior high school","."],
      answer: ["i","am","a","student","at","midori junior high school","."],
      explanation: "at は「〜で」という所属先を表す前置詞です。「主語→be動詞→a student→at→所属先」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-017",
      level: 1,
      jp: "他の国の多くの若者が日本を訪れる。",
      bank: ["many","young","people","in","other","countries","visit","japan","."],
      answer: ["many","young","people","in","other","countries","visit","japan","."],
      explanation: "前置詞句 in other countries が many young people を後ろから修飾します。「主語のまとまり→動詞→目的語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-018",
      level: 1,
      jp: "メンバーはみなこの問題について異なる考えを持っている。",
      bank: ["every","member","has","different","ideas","about","this","problem","."],
      answer: ["every","member","has","different","ideas","about","this","problem","."],
      explanation: "about は「〜について」という内容を表す前置詞です。「主語→動詞→目的語→about→話題」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-019",
      level: 1,
      jp: "これはあなたへのプレゼントです。",
      bank: ["this","is","a","present","for","you","."],
      answer: ["this","is","a","present","for","you","."],
      explanation: "for は「〜への」という対象を表す前置詞です。「主語→be動詞→a present→for→対象」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-020",
      level: 1,
      jp: "これは私の友だちの写真です。",
      bank: ["this","is","a","picture","of","my","friend","."],
      answer: ["this","is","a","picture","of","my","friend","."],
      explanation: "of は「〜の」という所属・内容を表す前置詞です。「主語→be動詞→a picture→of→対象」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-021",
      level: 1,
      jp: "その木の下にいる女の子はクミです。",
      bank: ["the","girl","under","the","tree","is","kumi","."],
      answer: ["the","girl","under","the","tree","is","kumi","."],
      explanation: "under は「〜の下に」という位置関係を表し、girl を後ろから修飾します。「主語(the girl under the tree)→be動詞→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-022",
      level: 1,
      jp: "沖縄にはたくさんのすばらしいビーチがある。",
      bank: ["okinawa","has","many","wonderful","beaches","."],
      answer: ["okinawa","has","many","wonderful","beaches","."],
      explanation: "「many→形容詞→名詞」の順で「たくさんのすばらしい~」を表します。文全体は「主語→動詞→目的語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-023",
      level: 1,
      jp: "それはすばらしい古い家です。",
      bank: ["that","is","a","wonderful","old","house","."],
      answer: ["that","is","a","wonderful","old","house","."],
      explanation: "that を主語にすると be動詞は is です。形容詞が2つ続くときの語順に注意します。「主語→be動詞→a+形容詞+形容詞+名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-024",
      level: 1,
      jp: "私の町はそばで有名です。",
      bank: ["my","town","is","famous","for","soba","."],
      answer: ["my","town","is","famous","for","soba","."],
      explanation: "主語が単数（my town）のとき、be動詞は is を使います。「主語→be動詞→famous→for+名詞」の順で理由を表します。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-025",
      level: 1,
      jp: "多くの生徒たちは睡眠に問題を抱えています。",
      bank: ["a lot of","students","have","a","problem","with","sleeping","."],
      answer: ["a lot of","students","have","a","problem","with","sleeping","."],
      explanation: "with は「〜に関する」という関連を表す前置詞です。「主語→動詞→a problem→with→内容」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-026",
      level: 1,
      jp: "彼らのうちの何人かは日本語がわかりません。",
      bank: ["some","of","them","don't","understand","japanese","."],
      answer: ["some","of","them","don't","understand","japanese","."],
      explanation: "一般動詞の現在の否定文は do not(don't)/does not(doesn't) + 動詞の原形 で表します。「主語→don't→動詞の原形→目的語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-027",
      level: 3,
      jp: "私は英語の教師として働いている友だちがいます。",
      bank: ["i","have","a","friend","working","as","an english teacher","."],
      answer: ["i","have","a","friend","working","as","an english teacher","."],
      explanation: "as は「〜として」という立場を表す前置詞です。「主語→動詞→a friend→working as→職業」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-028",
      level: 2,
      jp: "彼らは眠るための十分な時間がありません。",
      bank: ["they","don't","have","enough","time","to","sleep","."],
      answer: ["they","don't","have","enough","time","to","sleep","."],
      explanation: "「to+動詞の原形」が名詞を後ろから修飾し「~するための」という意味を表します。「主語→have→enough time→to→動詞の原形」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-029",
      level: 3,
      jp: "私はそこで働いている人々にありがとうと言いました。",
      bank: ["i","said","thank you","to","the","people","working","there","."],
      answer: ["i","said","thank you","to","the","people","working","there","."],
      explanation: "動詞のing形（現在分詞）が名詞の後ろについて「~している◯◯」という意味を加えます。「the people→working→there」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-030",
      level: 3,
      jp: "私たちの歌を聞いている人々はとても幸せそうに見えました。",
      bank: ["people","listening to","our songs","looked","very","happy","."],
      answer: ["people","listening to","our songs","looked","very","happy","."],
      explanation: "現在分詞句が主語の名詞を後ろから修飾し、「~している◯◯」という意味になります。「people→listening to our songs→looked」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-031",
      level: 3,
      jp: "これは若い人たちに愛されている歌です。",
      bank: ["this","is","a","song","loved","by","young people","."],
      answer: ["this","is","a","song","loved","by","young people","."],
      explanation: "過去分詞句が名詞を後ろから修飾し「~される◯◯」という意味になります。「a song→loved→by→動作をする人」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-032",
      level: 1,
      jp: "そこのランチは本当にいい。",
      bank: ["the","lunch","there","is","really","good","."],
      answer: ["the","lunch","there","is","really","good","."],
      explanation: "there が「そこの」という意味で lunch を後ろから修飾します。「主語(the lunch there)→be動詞→really+形容詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-033",
      level: 2,
      jp: "勉強をすることは私たちにとってとても大切です。",
      bank: ["studying","is","very","important","for","us","."],
      answer: ["studying","is","very","important","for","us","."],
      explanation: "動詞のing形（動名詞）は「~すること」という意味の主語になります。「動名詞→be動詞→補語」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-034",
      level: 2,
      jp: "私の意見はいいと思いますか。",
      bank: ["do","you","think","my opinion","is","good","?"],
      answer: ["do","you","think","my opinion","is","good","?"],
      explanation: "that は「〜ということ」という意味で動詞の目的語となる節を導きます。「Do→主語→think→(that)→my opinion→is good」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-035",
      level: 2,
      jp: "私は、これがあなたの将来にとってよい経験になると確信しています。",
      bank: ["i'm","sure","this","will","be","a","good","experience","for","your future","."],
      answer: ["i'm","sure","this","will","be","a","good","experience","for","your future","."],
      explanation: "that は「〜ということ」という意味で確信の内容を導く節を作ります。「主語→am sure→(that)→this→will be a good experience」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-036",
      level: 2,
      jp: "いろいろな国の出身の多くの人々が私たちの市で生活しています。",
      bank: ["many people","from","different countries","are","living","in","our","city","."],
      answer: ["many people","from","different countries","are","living","in","our","city","."],
      explanation: "「be動詞+ing」の現在進行形で「~している」という今の状態を表します。「many people from different countries→are living→in our city」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-037",
      level: 2,
      jp: "バスの運転手はバスに乗る人々のために働いていた。",
      bank: ["the bus driver","was","working","for","the people","on the bus","."],
      answer: ["the bus driver","was","working","for","the people","on the bus","."],
      explanation: "「be動詞+ing」の過去進行形で「~していた」という過去のある時点の動作を表します。「the bus driver→was working→for the people」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-038",
      level: 3,
      jp: "私はバレーボールをしている生徒たちを見ていました。",
      bank: ["i","was","watching","students","playing","volleyball","."],
      answer: ["i","was","watching","students","playing","volleyball","."],
      explanation: "動詞のing形（現在分詞）が名詞の後ろについて「~している◯◯」という意味を加えます。「students→playing→volleyball」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-039",
      level: 2,
      jp: "バスケットボールは最もワクワクするスポーツです。",
      bank: ["basketball","is","the","most","exciting","sport","."],
      answer: ["basketball","is","the","most","exciting","sport","."],
      explanation: "「最も~だ」は「the+most+形容詞」で表します。「主語→be動詞→the most+形容詞→名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-040",
      level: 2,
      jp: "日本は世界で最も人気がある国の一つです。",
      bank: ["japan","is","one","of","the most popular","countries","in the world","."],
      answer: ["japan","is","one","of","the most popular","countries","in the world","."],
      explanation: "「最も~な…の一つ」は「one of the most+形容詞+複数名詞」で表します。「主語→be動詞→one of the most+形容詞→複数名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-041",
      level: 2,
      jp: "私の一番の思い出は修学旅行です。",
      bank: ["my","best","memory","is","our","school","trip","."],
      answer: ["my","best","memory","is","our","school","trip","."],
      explanation: "「一番の~」は最上級のbestで表します。「主語(my best memory)→be動詞→名詞(school trip)」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-042",
      level: 2,
      jp: "ハンバーガー２つはサンドイッチ２つより安い。",
      bank: ["two hamburgers","are","cheaper","than","two sandwiches","."],
      answer: ["two hamburgers","are","cheaper","than","two sandwiches","."],
      explanation: "「…より~だ」は「比較級(er)+than」で表します。「主語→be動詞→比較級(cheaper)→than→比べる相手」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-043",
      level: 2,
      jp: "これが私にとって一番重要なことです。",
      bank: ["this","is","the","most","important","thing","for","me","."],
      answer: ["this","is","the","most","important","thing","for","me","."],
      explanation: "「最も~だ」は「the+most+形容詞」で表します。「主語→be動詞→the most+形容詞→名詞→for me」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-044",
      level: 2,
      jp: "私は彼女の考えが私のより良いと思います。",
      bank: ["i","think","her idea","is","better","than","mine","."],
      answer: ["i","think","her idea","is","better","than","mine","."],
      explanation: "「…より良い」は比較級betterで表します。「主語→think→her idea→be動詞→better→than→mine」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-045",
      level: 2,
      jp: "理科は数学ほど難しくないと思います。",
      bank: ["i think","science","is","not","as","difficult","as","math","."],
      answer: ["i think","science","is","not","as","difficult","as","math","."],
      explanation: "not as ~ as で「…ほど~ではない」という同等比較の否定を表します。「主語→be動詞→not as→difficult→as→比べる相手」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-046",
      level: 2,
      jp: "私は私たちの学校があなたにとって一番良い学校だと思います。",
      bank: ["i","think","our school","is","the best school","for","you","."],
      answer: ["i","think","our school","is","the best school","for","you","."],
      explanation: "「最も~だ」は「the+最上級」で表します。「主語→think→our school→be動詞→the best school→for you」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-047",
      level: 2,
      jp: "理科を勉強することが私にとってずっとおもしろい。",
      bank: ["studying","science","is","much","more","interesting","for","me","."],
      answer: ["studying","science","is","much","more","interesting","for","me","."],
      explanation: "動名詞句(studying science)が主語で、much は比較級を強めて「ずっと」という意味です。「動名詞句→be動詞→much+比較級→for me」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-048",
      level: 3,
      jp: "私はやりたいことが一つあります。",
      bank: ["i","have","one","thing","i","want","to","do","."],
      answer: ["i","have","one","thing","i","want","to","do","."],
      explanation: "目的語の関係代名詞は省略できます。「先行詞(もの)→(that省略)→I→want to do」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-049",
      level: 3,
      jp: "これは私がこれまでに読んだ中で一番の絵本です。",
      bank: ["this","is","the","best","picture book","that","i","have","ever","read","."],
      answer: ["this","is","the","best","picture book","that","i","have","ever","read","."],
      explanation: "that はものを説明する関係代名詞です。「先行詞(もの)→that→I→have ever read」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-050",
      level: 3,
      jp: "私たちは私たちの市に住んでいる外国人にたずねました。",
      bank: ["we","asked","foreign people","who","live","in","our","city","."],
      answer: ["we","asked","foreign people","who","live","in","our","city","."],
      explanation: "who は人を説明する関係代名詞です。「先行詞(人)→who→live in our city」の順で後ろから説明を加えます。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-051",
      level: 3,
      jp: "あなたは日本では得られない経験をすることができる。",
      bank: ["you","can","have","experiences","you","can","never","get","in","japan","."],
      answer: ["you","can","have","experiences","you","can","never","get","in","japan","."],
      explanation: "目的語の関係代名詞は省略できます。「先行詞(もの)→(that省略)→you→can never get」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-052",
      level: 3,
      jp: "困っている人々を助けることができる十分な医者がいません。",
      bank: ["there","are","not","enough","doctors","to","help","people","in need","."],
      answer: ["there","are","not","enough","doctors","to","help","people","in need","."],
      explanation: "to不定詞の形容詞的用法で名詞を説明します。「先行詞(もの)→to help→people in need」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-053",
      level: 3,
      jp: "あなたはあなたのとは違う考えを学ぶことができる。",
      bank: ["you","can","learn","some ideas","which","are","different","from","yours","."],
      answer: ["you","can","learn","some ideas","which","are","different","from","yours","."],
      explanation: "which はものを説明する関係代名詞です。「先行詞(もの)→which→are different from yours」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-054",
      level: 3,
      jp: "私は福井で服を作る会社で働いています。",
      bank: ["i","am","working","for","a company","which","makes","clothes","in fukui","."],
      answer: ["i","am","working","for","a company","which","makes","clothes","in fukui","."],
      explanation: "which はものを説明する関係代名詞です。「先行詞(もの)→which→makes clothes in fukui」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-055",
      level: 3,
      jp: "それは私をもっとも感動させたイベントです。",
      bank: ["that","is","the event","that","moved","me","the most","."],
      answer: ["that","is","the event","that","moved","me","the most","."],
      explanation: "that はものを説明する関係代名詞です。「先行詞(もの)→that→moved me the most」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-056",
      level: 3,
      jp: "私は父とその日に起こったことについて話しました。",
      bank: ["i","talked","with my father","about the things","which","happened","on","that day","."],
      answer: ["i","talked","with my father","about the things","which","happened","on","that day","."],
      explanation: "which はものを説明する関係代名詞です。「先行詞(もの)→which→happened on that day」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-057",
      level: 2,
      jp: "私はこの本があなたにとって役に立つと思います。",
      bank: ["i","think","this","book","is","useful","for","you","."],
      answer: ["i","think","this","book","is","useful","for","you","."],
      explanation: "that は「〜ということ」という意味で動詞の目的語となる節を導きます。「主語→think→(that)→this book→is useful」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-058",
      level: 2,
      jp: "このかばんはそのかばんほど高くありません。",
      bank: ["this bag","is","not","as","expensive","as","that","one","."],
      answer: ["this bag","is","not","as","expensive","as","that","one","."],
      explanation: "not as ~ as で「…ほど~ではない」という同等比較の否定を表します。「主語→be動詞→not as→expensive→as→比べる相手」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-059",
      level: 2,
      jp: "数学は私にとって最も難しい教科です。",
      bank: ["math","is","the","most","difficult","subject","for","me","."],
      answer: ["math","is","the","most","difficult","subject","for","me","."],
      explanation: "「最も~だ」は「the+most+形容詞」で表します。「主語→be動詞→the most+形容詞→名詞→for me」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-060",
      level: 3,
      jp: "私は窓の近くに座っている少女を知っています。",
      bank: ["i","know","the girl","sitting","near","the","window","."],
      answer: ["i","know","the girl","sitting","near","the","window","."],
      explanation: "動詞のing形（現在分詞）が名詞の後ろについて「~している◯◯」という意味を加えます。「the girl→sitting→near the window」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-061",
      level: 3,
      jp: "私の母は私に、昨日どこに行ったかをたずねました。",
      bank: ["my mother","asked","me","where","i","went","yesterday","."],
      answer: ["my mother","asked","me","where","i","went","yesterday","."],
      explanation: "疑問詞で始まる疑問文が文の一部に組み込まれるとき、語順は「疑問詞→主語→動詞」に変わります（間接疑問文）。「主語→動詞→目的語→疑問詞→主語→動詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-062",
      level: 3,
      jp: "私はあなたがどんな気持ちか理解できます。",
      bank: ["i","understand","how","you","feel","."],
      answer: ["i","understand","how","you","feel","."],
      explanation: "疑問詞で始まる疑問文が文の一部に組み込まれるとき、語順は「疑問詞→主語→動詞」に変わります（間接疑問文）。「主語→動詞→疑問詞→主語→動詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-063",
      level: 2,
      jp: "そばは福井で最も人気のある食べ物の一つです。",
      bank: ["soba","is","one","of","the","most","popular","foods","in fukui","."],
      answer: ["soba","is","one","of","the","most","popular","foods","in fukui","."],
      explanation: "「最も~な…の一つ」は「one of the most+形容詞+複数名詞」で表します。「主語→be動詞→one of the most+形容詞→複数名詞→場所」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-064",
      level: 2,
      jp: "福井はおもしろいものでいっぱいです。",
      bank: ["fukui","is","full","of","interesting","things","."],
      answer: ["fukui","is","full","of","interesting","things","."],
      explanation: "be full of で「~でいっぱいだ」という意味を表します。「主語→be動詞→full of→形容詞+名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-065",
      level: 1,
      jp: "あいみょんは美しい声を持っています。",
      bank: ["aimyon","has","a","beautiful","voice","."],
      answer: ["aimyon","has","a","beautiful","voice","."],
      explanation: "「形容詞は名詞の前」に置きます。並び順は「主語→動詞→a+形容詞+名詞」です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-066",
      level: 1,
      jp: "私は彼女の歌の歌詞が好きです。",
      bank: ["i","like","the","words","of","her","songs","."],
      answer: ["i","like","the","words","of","her","songs","."],
      explanation: "of は「〜の」という所属を表す前置詞です。「主語→動詞→the words→of→her songs」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-067",
      level: 3,
      jp: "私はかつてそんなに美しい歌は聞いたことがない。",
      bank: ["i","have","never","heard","such","a","beautiful","song","before","."],
      answer: ["i","have","never","heard","such","a","beautiful","song","before","."],
      explanation: "「そんなに~な…」は「such a+形容詞+名詞」の語順で表します。「主語→have never→過去分詞→such a+形容詞+名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-068",
      level: 1,
      jp: "本を読むことは私の趣味の一つです。",
      bank: ["reading","books","is","one","of","my","hobbies","."],
      answer: ["reading","books","is","one","of","my","hobbies","."],
      explanation: "動詞のing形（動名詞）が主語になり「~することは」という意味を表します。「動名詞句→be動詞→one of+複数名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-069",
      level: 1,
      jp: "部活動は中学生にとってたくさんのよい点がある。",
      bank: ["club activities","have","many","good","points","for","junior high school","students","."],
      answer: ["club activities","have","many","good","points","for","junior high school","students","."],
      explanation: "「many→形容詞→名詞」の順で名詞のまとまりを作ります。「主語→動詞→目的語→for+対象」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-070",
      level: 1,
      jp: "彼らは異なる学年の生徒と友達になることができる。",
      bank: ["they","can","make","friends","with","students","in","different","years","."],
      answer: ["they","can","make","friends","with","students","in","different","years","."],
      explanation: "make friends with で「~と友達になる」、in different years が students を後ろから修飾します。「主語→can→make friends with→名詞のまとまり」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-071",
      level: 1,
      jp: "私たちはスマホでたくさんのおもしろいことができる。",
      bank: ["we","can","do","many","interesting","things","with","smartphones","."],
      answer: ["we","can","do","many","interesting","things","with","smartphones","."],
      explanation: "「many→形容詞→名詞」の順で「たくさんのおもしろい~」を表します。「主語→can→動詞の原形→目的語→with+道具」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-072",
      level: 2,
      jp: "私の親友のひとりは福岡に住んでいます。",
      bank: ["one","of","my","best","friends","lives","in","fukuoka","."],
      answer: ["one","of","my","best","friends","lives","in","fukuoka","."],
      explanation: "「one of+複数名詞」で「~のひとり」を表し、主語は単数扱いなので動詞に s がつきます。「one of+複数名詞→動詞→場所」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-073",
      level: 1,
      jp: "美しくて古い木製の橋が川にかかっています。",
      bank: ["the","beautiful","old","wooden","bridge","is","over","the","river","."],
      answer: ["the","beautiful","old","wooden","bridge","is","over","the","river","."],
      explanation: "形容詞が複数並ぶときは「評価(beautiful)→古さ(old)→材質(wooden)」の順です。「the+形容詞+名詞→be動詞→over+場所」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-074",
      level: 2,
      jp: "私は特別なことは何もしなかった。",
      bank: ["i","didn't","do","anything","special","."],
      answer: ["i","didn't","do","anything","special","."],
      explanation: "anything などの語を修飾する形容詞は後ろに置きます。「主語→didn't→動詞の原形→anything+形容詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-075",
      level: 2,
      jp: "他の種類のかばんはランドセルほど丈夫ではありません。",
      bank: ["other types","of","bags","are","not","as","strong","as","school backpacks","."],
      answer: ["other types","of","bags","are","not","as","strong","as","school backpacks","."],
      explanation: "not as ~ as で「…ほど~ではない」という同等比較の否定を表します。「主語→be動詞→not as→形容詞→as→比べる相手」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-076",
      level: 2,
      jp: "このクラスの生徒の50％以上が十分な睡眠をとっていません。",
      bank: ["more","than","fifty","percent","of","the students","in this class","don't","get","enough","sleep","."],
      answer: ["more","than","fifty","percent","of","the students","in this class","don't","get","enough","sleep","."],
      explanation: "「more than+数」で「~以上」、「percent of+名詞」で割合を表します。「割合のまとまり→don't→動詞の原形→enough+名詞」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-077",
      level: 2,
      jp: "私は電車の写真を撮るのによい場所を知っています。",
      bank: ["i","know","a","good","place","to","take","pictures","of","trains","."],
      answer: ["i","know","a","good","place","to","take","pictures","of","trains","."],
      explanation: "「to+動詞の原形」が名詞を後ろから修飾し「~するための」という意味を表します。「a good place→to→動詞の原形」の順です。",
      alwaysCapitalize: []
    },
    {
      id: "noun-chunk-078",
      level: 2,
      jp: "電車やバスの数を増やすべきです。",
      bank: ["we","should","increase","the","number","of","trains","and","buses","."],
      answer: ["we","should","increase","the","number","of","trains","and","buses","."],
      explanation: "the number of ~ で「~の数」という意味を表します。「主語→should→動詞の原形→the number of→名詞」の順です。",
      alwaysCapitalize: []
    }
  ]
});
