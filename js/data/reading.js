/* ============================================================
   Luitra — reading & writing
   Graded passages to read for meaning, each with a romanisation,
   an English rendering and comprehension questions whose answers
   sit behind a toggle. Then a short guide to writing in Assamese.
   The passages were composed for this platform as practice
   material — they are not quoted from any author, and they are
   not verified by a native speaker.
   ============================================================ */

window.ASM = window.ASM || {};

window.ASM.reading = {
  intro:
    "Reading is the step after the alphabet: you stop decoding letters and start taking in meaning. The passages below run from two-line beginner texts to short essays, each with a romanisation, an English rendering, and comprehension questions you can answer before revealing the answer. Read the Assamese first, aloud if you can; only then check the romanisation and the English. All passages were written for this platform as practice material, not quoted from any author.",

  howTo: [
    "Read the Assamese aloud once without looking at the English — you are training your ear and your eye together.",
    "Read it again and try to answer the questions from memory of the text.",
    "Only then open the romanisation and the English to check yourself.",
    "Finally, read the passage once more. The second reading of a text you now understand is where the vocabulary sticks."
  ],

  passages: [
    {
      id: "mor-poriyal",
      level: "Basic",
      title: "মোৰ পৰিয়াল",
      titleEn: "My family",
      text: [
        "মোৰ নাম ৰীতা। মই এজনী ছাত্ৰী। মোৰ ঘৰ যোৰহাটত।",
        "আমাৰ ঘৰত পাঁচজন মানুহ আছে। দেউতা এজন শিক্ষক। মা এজনী নাৰ্ছ।",
        "মোৰ এজন ভাই আৰু এজনী ভনী আছে। আমি একেলগে থাকোঁ।"
      ],
      rom: [
        "Mor nam Rita. Moi ezeni xatri. Mor ghor Zorhatot.",
        "Amar ghorot paszon manuh ase. Deuta ezon xikkhok. Ma ezeni narx.",
        "Mor ezon bhai aru ezoni bhoni ase. Ami ekeloge thakü."
      ],
      en: [
        "My name is Rita. I am a student. My home is in Jorhat.",
        "There are five people in our house. Father is a teacher. Mother is a nurse.",
        "I have a younger brother and a younger sister. We live together."
      ],
      questions: [
        { q: "ৰীতাই কি কৰে?", qEn: "What does Rita do?", a: "তেওঁ এজনী ছাত্ৰী।", aEn: "She is a student." },
        { q: "ৰীতাৰ ঘৰ ক’ত?", qEn: "Where is Rita's home?", a: "যোৰহাটত।", aEn: "In Jorhat." },
        { q: "আমাৰ ঘৰত কিমানজন মানুহ আছে?", qEn: "How many people are in the house?", a: "পাঁচজন।", aEn: "Five." },
        { q: "দেউতাৰ কাম কি?", qEn: "What is father's work?", a: "তেওঁ এজন শিক্ষক।", aEn: "He is a teacher." }
      ],
      note: "Notice the verb ending agreeing with the speaker: মই … থাকোঁ (I live), and the -জন / -জনী counter that goes with people — পাঁচজন মানুহ, এজন ভাই, এজনী ভনী."
    },
    {
      id: "mor-din",
      level: "Basic",
      title: "মোৰ দিন",
      titleEn: "My day",
      text: [
        "মই ৰাতিপুৱা ছয় বজাত উঠোঁ। তাৰ পাছত গা ধুম।",
        "ৰাতিপুৱা সাত বজাত জলপান খাওঁ, আৰু আঠ বজাত স্কুললৈ যাওঁ।",
        "স্কুলত আমি অসমীয়া, ইংৰাজী আৰু গণিত শিকোঁ। আবেলি ঘৰলৈ ঘূৰি আহোঁ।",
        "ৰাতি দহ বজাত শোওঁ।"
      ],
      rom: [
        "Moi ratipua soy bazot uthü. Tar pasot ga dhum.",
        "Ratipua xat bazot zolpan khaü, aru aath bazot skuloloi zaü.",
        "Skulot ami Oxomiya, Ingrazi aru gonit xikü. Abeli ghoroloi ghuri ahü.",
        "Rati doh bazot xoü."
      ],
      en: [
        "I get up at six in the morning. After that I bathe.",
        "At seven in the morning I eat breakfast, and at eight I go to school.",
        "At school we learn Assamese, English and mathematics. In the afternoon I come back home.",
        "At ten at night I sleep."
      ],
      questions: [
        { q: "মই কিমান বজাত উঠোঁ?", qEn: "What time do I get up?", a: "ৰাতিপুৱা ছয় বজাত।", aEn: "At six in the morning." },
        { q: "স্কুলত কি কি শিকোঁ?", qEn: "What do we learn at school?", a: "অসমীয়া, ইংৰাজী আৰু গণিত।", aEn: "Assamese, English and mathematics." },
        { q: "ৰাতি কিমান বজাত শোওঁ?", qEn: "What time do I sleep at night?", a: "দহ বজাত।", aEn: "At ten." }
      ],
      note: "Clock time is told with বাজে (baze): ছয় বজাত is ‘at six o'clock’. Note the sequence markers তাৰ পাছত (after that) and আৰু (and), which do the work of English ‘then’."
    },
    {
      id: "bozarot",
      level: "Elementary",
      title: "বজাৰত",
      titleEn: "At the market",
      text: [
        "শনিবাৰে ৰাতিপুৱা মা বজাৰলৈ যায়। ময়ো লগত যাওঁ।",
        "বজাৰত বহুত মানুহ থাকে। আমি পাচলি, মাছ আৰু ফল কিনোঁ।",
        "মাছৰ দাম বৰ বেছি। মা দাম কমাবলৈ কয়। শেষত আমি কম দামত কিনোঁ।",
        "বজাৰৰ পৰা আমি ভাগৰি ঘৰলৈ আহোঁ।"
      ],
      rom: [
        "Xonibare ratipua ma bozaroloi zai. Moyü logot zaü.",
        "Bozarot bohut manuh thake. Ami pasoli, mas aru phol kinü.",
        "Masor dam bor besi. Ma dam komaboloi koy. Xexot ami kom damot kinü.",
        "Bozaror pora ami bhagori ghoroloi ahü."
      ],
      en: [
        "On Saturday morning mother goes to the market. I go along too.",
        "There are many people at the market. We buy vegetables, fish and fruit.",
        "The price of fish is very high. Mother asks them to lower the price. In the end we buy at a low price.",
        "From the market we come home tired."
      ],
      questions: [
        { q: "মা কেতিয়া বজাৰলৈ যায়?", qEn: "When does mother go to the market?", a: "শনিবাৰে ৰাতিপুৱা।", aEn: "On Saturday morning." },
        { q: "তেওঁলোকে কি কি কিনে?", qEn: "What do they buy?", a: "পাচলি, মাছ আৰু ফল।", aEn: "Vegetables, fish and fruit." },
        { q: "মাছৰ দাম কেনে?", qEn: "How is the price of fish?", a: "বৰ বেছি।", aEn: "Very high." },
        { q: "তেওঁলোক ঘৰলৈ কেনে আহে?", qEn: "How do they come home?", a: "ভাগৰি আহে।", aEn: "They come home tired." }
      ],
      note: "The genitive -ৰ shows possession and price: মাছৰ দাম (the price of fish), বজাৰৰ পৰা (from the market). দাম কমাবলৈ কয় is literally ‘says in order to lower the price’ — the -লৈ purpose form."
    },
    {
      id: "amar-gaon",
      level: "Elementary",
      title: "আমাৰ গাঁও",
      titleEn: "Our village",
      text: [
        "আমাৰ গাঁও এখন সৰু গাঁও। গাঁৱৰ মাজেৰে এটা নদী বৈ যায়।",
        "গাঁৱত এখন স্কুল আৰু এটা মন্দিৰ আছে। মানুহে পথাৰত ধান ৰোৱে।",
        "বৰষুণৰ দিনত বাটবোৰ পিচল হয়। তেতিয়া ল'ৰা-ছোৱালীয়ে ঘৰত খেলে।",
        "গাঁৱৰ মানুহে এজনে আনজনক সহায় কৰে।"
      ],
      rom: [
        "Amar gaü ekhon xoru gaü. Gaüor mazere eta nodi boi zai.",
        "Gaüot ekhon skul aru eta mondir ase. Manuhe potharot dhan rüe.",
        "Boroxunor dinot batbür pis ol hoy. Tetia l'ra-sowaliye ghorot khele.",
        "Gaüor manuhe ezone anzonok xohai kore."
      ],
      en: [
        "Our village is a small village. A river flows through the middle of the village.",
        "In the village there is a school and a temple. People plant paddy in the fields.",
        "On rainy days the paths become slippery. Then the children play indoors.",
        "The people of the village help one another."
      ],
      questions: [
        { q: "গাঁৱৰ মাজেৰে কি বৈ যায়?", qEn: "What flows through the village?", a: "এটা নদী।", aEn: "A river." },
        { q: "মানুহে পথাৰত কি ৰোৱে?", qEn: "What do people plant in the fields?", a: "ধান।", aEn: "Paddy." },
        { q: "বৰষুণৰ দিনত বাটবোৰ কেনে হয়?", qEn: "How are the paths on rainy days?", a: "পিচল হয়।", aEn: "Slippery." },
        { q: "গাঁৱৰ মানুহে কি কৰে?", qEn: "What do the village people do?", a: "এজনে আনজনক সহায় কৰে।", aEn: "They help one another." }
      ],
      note: "এখন, এটা, এজন are counters and they are not interchangeable: এখন for villages, schools and rivers; এটা for temples and other objects; এজন for people. গাঁৱৰ (of the village) shows the -ৰ genitive again."
    },
    {
      id: "bihu",
      level: "Intermediate",
      title: "বিহু",
      titleEn: "Bihu",
      text: [
        "বিহু অসমৰ আটাইতকৈ ডাঙৰ উৎসৱ। বছৰত তিনি বিহু হয় — ব’হাগ, কাতি আৰু মাঘ।",
        "ব’হাগ বিহুত মানুহে নতুন কাপোৰ পিন্ধে আৰু বিহু নাচে। ডেকা-গাভৰুৱে হুঁচৰি গায়।",
        "ঘৰে ঘৰে পিঠা আৰু লাৰু বনায়। আত্মীয়ই ঘৰলৈ আহি মিলি-জুলি খায়।",
        "মাঘ বিহুত মানুহে ভোজ খায় আৰু জুইৰ চাৰিওফালে বহে।"
      ],
      rom: [
        "Bihu Oxomor ataitkoi dangor utxob. Bosorot tini bihu hoy — Böhag, Kati aru Magh.",
        "Böhag bihut manuhe notun kapür pindhe aru bihu nase. Deka-gabhorüe husori gay.",
        "Ghore ghore pitha aru laru bonay. Atmiyoi ghoroloi ahi mili-zuli khay.",
        "Magh bihut manuhe bhoj khay aru züir sario phale bohe."
      ],
      en: [
        "Bihu is the biggest festival of Assam. There are three Bihus in the year — Bohag, Kati and Magh.",
        "At Bohag Bihu people wear new clothes and dance Bihu. Young men and women sing husori.",
        "House after house makes pitha and laru. Relatives come home and eat together in good cheer.",
        "At Magh Bihu people hold a feast and sit around the fire."
      ],
      questions: [
        { q: "বছৰত কিমানটা বিহু হয়?", qEn: "How many Bihus are there in a year?", a: "তিনিটা।", aEn: "Three." },
        { q: "ব’হাগ বিহুত মানুহে কি কৰে?", qEn: "What do people do at Bohag Bihu?", a: "নতুন কাপোৰ পিন্ধে আৰু বিহু নাচে।", aEn: "They wear new clothes and dance Bihu." },
        { q: "হুঁচৰি কোনে গায়?", qEn: "Who sings husori?", a: "ডেকা-গাভৰুৱে।", aEn: "Young men and women." },
        { q: "মাঘ বিহুত মানুহে ক’ত বহে?", qEn: "Where do people sit at Magh Bihu?", a: "জুইৰ চাৰিওফালে।", aEn: "Around the fire." }
      ],
      note: "মিলি-জুলি is a paired word (a common Assamese pattern) meaning ‘together, in harmony’. Note ঘৰে ঘৰে — the repeated locative -এ meaning ‘house after house, in every house’."
    },
    {
      id: "sah-bagan",
      level: "Intermediate",
      title: "চাহ বাগান",
      titleEn: "The tea garden",
      text: [
        "অসমত চাহ বাগান বহুত আছে। ডিব্ৰুগড় আৰু শিৱসাগৰত ডাঙৰ বাগান আছে।",
        "বাগানত বগা ফুল ফুলে। মহিলাসকলে দুপৰীয়া চাহ পাতি টোপোলাত ভৰায়।",
        "চাহ ভাৰতৰ আন ৰাজ্যলৈ আৰু বিদেশলৈ যায়। অসমৰ চাহ বিশ্বত বিখ্যাত।",
        "বহু মানুহে বাগানত কাম কৰি জীৱিকা লাভ কৰে।"
      ],
      rom: [
        "Oxomot sah bagan bohut ase. Dibrugorhot aru Xiwosagorot dangor bagan ase.",
        "Baganot boga phul phule. Mohilasokole duporia sah pati töpolat bhoray.",
        "Sah Bharotor an raizzoloi aru bidexoloi zai. Oxomor sah bixwot bikkhato.",
        "Bohu manuhe baganot kam kori ziwika labh kore."
      ],
      en: [
        "There are many tea gardens in Assam. There are large gardens in Dibrugarh and Sivasagar.",
        "White flowers bloom in the garden. In the afternoon the women pluck tea leaves and fill their baskets.",
        "The tea goes to other states of India and abroad. Assam's tea is famous in the world.",
        "Many people earn a living by working in the gardens."
      ],
      questions: [
        { q: "অসমৰ কোন কোন ঠাইত ডাঙৰ বাগান আছে?", qEn: "Where are the large gardens in Assam?", a: "ডিব্ৰুগড় আৰু শিৱসাগৰত।", aEn: "In Dibrugarh and Sivasagar." },
        { q: "মহিলাসকলে কি কৰে?", qEn: "What do the women do?", a: "চাহ পাতি টোপোলাত ভৰায়।", aEn: "They pluck tea and fill their baskets." },
        { q: "অসমৰ চাহ ক’ত যায়?", qEn: "Where does Assam's tea go?", a: "ভাৰতৰ আন ৰাজ্যলৈ আৰু বিদেশলৈ।", aEn: "To other states of India and abroad." }
      ],
      note: "The -সকল / -সকলে plural is the respectful one; contrast the casual -বোৰ in the earlier passage. কম কৰি (having done) is a conjunctive participle — Assamese strings actions this way rather than with ‘and then’."
    },
    {
      id: "oxomor-nodi",
      level: "Advanced",
      title: "অসমৰ নদী",
      titleEn: "The rivers of Assam",
      text: [
        "ব্ৰহ্মপুত্ৰ অসমৰ আটাইতকৈ ডাঙৰ নদী। ইয়াক ‘লুইত’ বুলিও কোৱা হয়।",
        "ব্ৰহ্মপুত্ৰই অসমৰ মাজেৰে বৈ গৈ বংগোপসাগৰত পৰে। ইয়াৰ পানীত বহু মাছ পোৱা যায়।",
        "নদীৰ দুপাৰে মানুহে খেতি কৰে আৰু নাও চলায়। বাৰিষা নদীৰ পানী বাঢ়ি যায়, বানপানী হয়।",
        "সেয়ে নদী অসমৰ জীৱন আৰু সমস্যা — দুয়ো।"
      ],
      rom: [
        "Brohmoputro Oxomor ataitkoi dangor nodi. Iyak ‘Luit’ buliü küa hoy.",
        "Brohmoputroi Oxomor mazere boi goi Bongoposagorot pore. Iyar panit bohu mas püa zai.",
        "Nodir dupare manuhe kheti kore aru naü solay. Barixa nodir pani barhi zai, banpani hoy.",
        "Xeye nodi Oxomor ziwon aru xomosya — duyü."
      ],
      en: [
        "The Brahmaputra is the largest river in Assam. It is also called ‘Luit’.",
        "The Brahmaputra flows through the middle of Assam and falls into the Bay of Bengal. Many fish are found in its water.",
        "On both banks of the river people farm and row boats. In the monsoon the river's water rises and there are floods.",
        "So the river is both the life and the problem of Assam."
      ],
      questions: [
        { q: "ব্ৰহ্মপুত্ৰক আন কি নামেৰে কোৱা হয়?", qEn: "What other name is the Brahmaputra called by?", a: "লুইত।", aEn: "Luit." },
        { q: "ব্ৰহ্মপুত্ৰ ক’ত পৰে?", qEn: "Where does the Brahmaputra fall?", a: "বংগোপসাগৰত।", aEn: "Into the Bay of Bengal." },
        { q: "বাৰিষা নদীত কি হয়?", qEn: "What happens to the river in the monsoon?", a: "পানী বাঢ়ি যায় আৰু বানপানী হয়।", aEn: "The water rises and there are floods." },
        { q: "লেখকে নদীক কি বুলি কৈছে?", qEn: "What does the writer call the river?", a: "অসমৰ জীৱন আৰু সমস্যা — দুয়ো।", aEn: "Both the life and the problem of Assam." }
      ],
      note: "নাও (boat) and নাৱে / নাও চলায় show the /w/ sound written ৱ. দুয়ো (both) is a paired pronoun. Note the dash construction জীৱন আৰু সমস্যা — দুয়ো, which stresses the ‘both’ at the end."
    },
    {
      id: "bhaxa-aru-manuh",
      level: "Advanced",
      title: "ভাষা আৰু মানুহ",
      titleEn: "Language and people",
      text: [
        "ভাষা এটা জাতিৰ পৰিচয়। অসমীয়া অসমৰ ৰাজ্যিক ভাষা।",
        "২০২৪ চনত অসমীয়াক ধ্ৰুপদী ভাষাৰ স্বীকৃতি দিয়া হয়।",
        "আজিকালি চহৰত বহু লোকে অসমীয়াৰ লগত ইংৰাজী মিহলাই কয়। এই মিশ্ৰিত ৰূপক কোড-ছুইচিং বোলে।",
        "ভাষা তেতিয়াহে জীয়াই থাকে, যেতিয়া মানুহে ইয়াক কয় আৰু লিখে।"
      ],
      rom: [
        "Bhaxa eta zatir porisoy. Oxomiya Oxomor raizik bhaxa.",
        "2024 sonot Oxomiyak dhrupodi bhaxar xikriti dia hoy.",
        "Azikali sohorot bohu lüke Oxomiyar logot Ingrazi miholai koy. Ei mixrito rupok kod-suisying bole.",
        "Bhaxa tetiah e ziai thake, zetia manuhe iyak koy aru likhe."
      ],
      en: [
        "Language is a people's identity. Assamese is the state language of Assam.",
        "In 2024 Assamese was given recognition as a classical language.",
        "These days many people in the city mix English with Assamese when they speak. This mixed form is called code-switching.",
        "A language stays alive only when people speak it and write it."
      ],
      questions: [
        { q: "অসমীয়া ভাষা কি?", qEn: "What is the Assamese language?", a: "অসমৰ ৰাজ্যিক ভাষা।", aEn: "The state language of Assam." },
        { q: "অসমীয়াক কেতিয়া ধ্ৰুপদী ভাষাৰ স্বীকৃতি দিয়া হয়?", qEn: "When was Assamese recognised as a classical language?", a: "২০২৪ চনত।", aEn: "In 2024." },
        { q: "কোড-ছুইচিং কি?", qEn: "What is code-switching?", a: "দুই ভাষা মিহলাই কোৱাৰ ৰূপ।", aEn: "The form of mixing two languages in speech." },
        { q: "ভাষা কেতিয়া জীয়াই থাকে?", qEn: "When does a language stay alive?", a: "মানুহে ইয়াক ক’লে আৰু লিখিলে।", aEn: "When people speak it and write it." }
      ],
      note: "ধ্ৰুপদী is the Assamese word for ‘classical’. The correlative pair তেতিয়াহে … যেতিয়া (‘only then … when’) is a common formal construction — watch for it in written Assamese."
    }
  ],

  writing: {
    intro:
      "Reading and writing are two sides of the same skill. Once you can read a passage for meaning, the next step is producing one. Assamese school writing follows a small number of fixed shapes, and knowing the shape gets you most of the way.",

    table: {
      caption: "The kinds of writing you are most often asked for",
      head: ["Type", "How it is built", "A typical opener"],
      rows: [
        ["ৰচনা (essay)", "a general opening, two to four body paragraphs, and a closing that returns to the opening", "অসম ভাৰতৰ উত্তৰ-পূৱত অৱস্থিত এখন ৰাজ্য।"],
        ["অনুচ্ছেদ (paragraph)", "one idea only; the topic sentence first, then support", "বৰষুণ অসমৰ জীৱনৰ এটা অংশ।"],
        ["চিঠি (letter)", "address, date, salutation, body, closing, signature", "শ্ৰদ্ধাস্পদ দেউতা,"],
        ["প্ৰতিবেদন (report)", "what, when, where, who and why, then what followed", "যোৱা শুক্ৰবাৰে আমাৰ বিদ্যালয়ত এটি অনুষ্ঠান হয়।"],
        ["গল্প (story)", "setting, a problem, events, and a resolution", "এখন সৰু গাঁৱত এজন বুঢ়া মানুহ আছিল।"]
      ]
    },

    notes: [
      "A formal letter opens with শ্ৰদ্ধাস্পদ or শ্ৰদ্ধেয় for elders and teachers, and মাননীয় for officials. It closes with ইতি followed by your name.",
      "An essay (ৰচনা) conventionally opens with a general statement and closes by returning to it — the conclusion should echo the opening, not introduce a new idea.",
      "Assamese sentences in formal writing are longer than in speech and lean on conjunctive participles (-ি / -ই, as in কৰি, গৈ, লৈ) where English would start a new sentence with ‘and then’.",
      "Write what you can check. If you are unsure of a form, put the simpler sentence down and look the word up in the Dictionary page rather than guessing."
    ]
  }
};
