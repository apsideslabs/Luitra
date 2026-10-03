/* ============================================================
   Luitra — grammar reference
   Descriptive tables for the core grammatical machinery of
   Assamese. Forms are drawn from published descriptions of
   Assamese grammar; uncertain or variable forms are flagged in
   `notes`. The variety described is Standard (Eastern) Assamese.
   ============================================================ */

window.ASM = window.ASM || {};

window.ASM.grammar = {
  intro:
    "Assamese is an Indo-Aryan language with a rich system of suffixes. Meaning that English carries with separate little words — of, to, in, from, by — Assamese usually carries with an ending stuck onto the noun. Verbs agree with their subject in person and honorificity but not in number, and tense is fundamentally past versus future. This reference collects the machinery you will meet in the lessons: word order, honorifics, the case suffixes, pronouns, the tense system, negation, questions and plurals. Unless stated otherwise it describes Standard (Eastern) Assamese.",

  sections: [
    {
      id: "words",
      title: "Words (শব্দ)",
      summary: "What a word is, how Assamese words are built, and where they come from.",
      table: {
        caption: "How words are built",
        head: ["Type", "How it is formed", "Examples"],
        rows: [
          ["কৃদন্ত শব্দ (kridanta)", "A root (ধাতু) plus a কৃৎ suffix", "লিখ + আৰু = লিখাৰু · খা + অন = খাৱন · শো + অন = শোৱন"],
          ["তদ্ধিতান্ত শব্দ (taddhitanta)", "A stem plus a তদ্ধিত suffix", "তল + অতীয়া = তলতীয়া · বাট + অৰুৱা = বাটৰুৱা · বন + অনি = বননি"],
          ["সমাসনিষ্পন্ন শব্দ (compound)", "Two or more words joined into one", "পঙ্কত যি জন্মে = পঙ্কজ · নীল অম্বৰ যাৰ = নীলাম্বৰ · হাতদীঘল"]
        ]
      },
      notes: [
        "A word (শব্দ) is a meaningful unit of one or more letters: এক বা একাধিক বৰ্ণৰে গঠিত অৰ্থযুক্ত গোটকে শব্দ বোলে।",
        "New words are made mainly by adding a prefix (উপসৰ্গ) or a suffix (প্ৰত্যয়): অ- gives অকাজ, অচিন, অকাল; আ- gives আকাট, আকাল; and a root plus -অন gives খাৱন, শোৱন.",
        "By origin, Assamese grammar traditionally sorts words into six groups: তৎসম (kept in their Sanskrit form — ধন, ফুল, নদী), তদ্ভৱ (changed on the way in — চক্ষু → চকু, হস্ত → হাত), নৱ্য ভাৰতীয় (borrowed from other modern Indian languages), দেশীয় (from the pre-Aryan languages of India), বিদেশী (from Arabic, Persian, Turkish, English, French or Portuguese) and অনাৰ্যমূলীয় (from Austro-Asiatic, Tibeto-Burman and Tai).",
        "The same base word can take many forms: the verb root কৰ gives কৰা, কৰোঁ, কৰিছে, কৰিব — see the Verbs page."
      ]
    },
    {
      id: "sentence",
      title: "The sentence (বাক্য)",
      summary: "Two or more words that together say something complete.",
      table: {
        caption: "The five kinds of sentence",
        head: ["Kind", "What it does", "Example"],
        rows: [
          ["নিৰ্দেশাত্মক / বিবৃতিমূলক (Assertive)", "States a fact or describes something", "মই ছাত্ৰ। — I am a student."],
          ["প্ৰশ্নবোধক (Interrogative)", "Asks a question", "তুমি ক’ত থাকা? — Where do you live?"],
          ["অনুজ্ঞাবোধক (Imperative)", "Gives an order, a request or advice", "সোনকালে আহা। — Come quickly."],
          ["ইচ্ছাবোধক / প্ৰাৰ্থনাবোধক (Optative)", "Expresses a wish, a prayer or a blessing", "তেওঁ সুখী হওক। — May he be happy."],
          ["বিস্ময়বোধক / আবেগবোধক (Exclamatory)", "Expresses a strong feeling", "কি ধুনীয়া! — How lovely!"]
        ]
      },
      notes: [
        "A sentence (বাক্য) is two or more words (পদ) joined so as to express a complete meaning: দুই বা ততোধিক পদ লগলাগি এটা সম্পূৰ্ণ অৰ্থ প্ৰকাশ কৰিলে তাকে বাক্য বোলে।",
        "By structure, sentences are also classed as সৰল বাক্য (simple), জটিল or মিশ্ৰ বাক্য (complex) and যৌগিক বাক্য (compound).",
        "Some grammars add a sixth kind, সন্দেহাত্মক or অনিশ্চয়তাসূচক — a sentence of doubt or uncertainty: জানো তেওঁ আহিব?",
        "Every sentence has two essential parts — the subject and the predicate — which the next section splits apart."
      ]
    },
    {
      id: "subject-predicate",
      title: "Subject and predicate (উদ্দেশ্য আৰু বিধেয়)",
      summary: "What a sentence is about, and what it says about it.",
      table: {
        caption: "Splitting a sentence",
        head: ["Sentence", "উদ্দেশ্য (subject)", "বিধেয় (predicate)"],
        rows: [
          ["ৰাম এজন ভাল ল’ৰা।", "ৰাম", "এজন ভাল ল’ৰা"],
          ["মই ভাত খাওঁ।", "মই", "ভাত খাওঁ"],
          ["চৰাইজনে গান গায়।", "চৰাইজনে", "গান গায়"]
        ]
      },
      notes: [
        "যাৰ বিষয়ে কোৱা হয় সিয়েই উদ্দেশ্য — the thing being spoken about is the উদ্দেশ্য, and in Assamese that is normally the কৰ্তা, the doer.",
        "বিধেয় is everything said about the subject. It usually ends in the verb.",
        "Because the verb comes last in Assamese, the predicate normally sits at the end of the sentence — see Word order."
      ]
    },
    {
      id: "parts-of-speech",
      title: "Parts of speech (পদ)",
      summary: "Assamese groups words into five classes; English uses eight.",
      table: {
        caption: "The five classes",
        head: ["Class", "What it does", "Examples"],
        rows: [
          ["বিশেষ্য (Noun)", "Names a person, thing, place, quality or state", "চৰাই, আপেল, ল’ৰা, কলম, ৰাম"],
          ["সৰ্বনাম (Pronoun)", "Stands in place of a noun", "মই, আমি, তুমি, আপুনি, সি, তেওঁ"],
          ["বিশেষণ (Adjective)", "Describes a noun's or pronoun's quality, defect, state, number or quantity", "ভাল, বেয়া, ধুনীয়া, চাৰিখন, দুই লিটাৰ"],
          ["ক্ৰিয়া (Verb)", "Expresses an action, a happening, or its absence", "খাওঁ, আহিল, লিখিছে, নকৰিলে"],
          ["অব্যয় (Indeclinable)", "A particle that never changes form; carries relation, connection or feeling", "সৈতে, ওপৰত, ভিতৰত, তলত"]
        ]
      },
      notes: [
        "Assamese grammar traditionally recognises five পদ (parts of speech); English recognises eight. ক্ৰিয়া-বিশেষণ (adverb) and the sub-kinds of অব্যয় — সম্বন্ধবোধক (preposition), সংযোজক (conjunction) and আবেগসূচক (interjection) — are often listed separately, which brings the count up to the familiar eight.",
        "A word's class depends on how it is used in the sentence, not on the word alone: ধুনীয়া is a বিশেষণ in ধুনীয়া ফুল, but can act as a বিশেষ্য in ধুনীয়াখন.",
        "Note that Assamese অব্যয় does the work that English splits across prepositions, conjunctions and interjections — the two traditions simply carve the job up differently."
      ]
    },
    {
      id: "word-order",
      title: "Word order",
      summary: "Subject–Object–Verb, with the verb last and a great deal of freedom.",
      table: {
        caption: "The orders you will meet",
        head: ["Order", "When it is used", "Example"],
        rows: [
          ["S–O–V", "The normal order for a transitive sentence", "মই ভাত খাওঁ — moi bhat khaü — I eat rice"],
          ["S–V", "Intransitive sentences (no object)", "মই শুলোঁ — moi xulü — I slept"],
          ["O–S–V", "When the object is emphasised or topicalised", "ভাত মই খাওঁ — bhat moi khaü — it is rice that I eat"],
          ["O–V", "Imperatives, where the subject is left out", "ভাত খা — bhat kha — eat the rice"]
        ]
      },
      notes: [
        "The verb always ends the clause, so English order will feel inverted until it clicks.",
        "Because case endings mark each phrase's role, word order is much freer than in English: a phrase can be moved to the front to give it emphasis.",
        "Adjectives normally come before the noun they describe. The present-tense copula is often left out entirely: তাই ভাল — tai bhal — 'she is well'."
      ]
    },
    {
      id: "honorifics",
      title: "Honorifics",
      summary: "Three tiers of 'you' run through both the pronouns and the verb endings.",
      table: {
        caption: "The three tiers, with the present tense of কৰা (kora, to do)",
        head: ["Tier", "You", "Present ending", "Example"],
        rows: [
          ["Non-honorific (intimate)", "তই — toi", "-∅ / -a", "কৰ — kor — you do"],
          ["Familiar / polite", "তুমি — tumi", "-a", "কৰা — kora — you do"],
          ["High-honorific", "আপুনি — apuni", "-e", "কৰে — kore — you do"]
        ]
      },
      notes: [
        "The high-honorific ending -e is the same one used for the ordinary third person, and there is a special high-honorific third person reserved for God or a revered person.",
        "Verbs agree in person and honorificity, but not in number: মই (I) and আমি (we) take exactly the same ending.",
        "Choosing the wrong tier is a social error, not a grammatical one. Use আপুনি with elders, teachers and strangers; তুমি with peers; তই only with close friends and children."
      ]
    },
    {
      id: "case",
      title: "Case suffixes",
      summary: "Roughly seven suffixes that carry most of the grammatical load.",
      table: {
        caption: "Noun suffixes",
        head: ["Suffix", "Function", "Example"],
        rows: [
          ["-e", "Ergative — subject of a transitive verb", "ৰামে ভাত খায় — rame bhat khay — Ram eats rice"],
          ["-k", "Accusative / dative — definite object, recipient", "মোক কিতাপখন দিয়া — mök kitapkhon dia — give me the book"],
          ["-loi", "Dative / allative — to, towards", "ঘৰলৈ যাওঁ — ghoroloi zaü — I go home"],
          ["-r / -er", "Genitive — of, ’s", "ৰামৰ কিতাপ — ramor kitap — Ram's book"],
          ["-t / -e", "Locative — in, at, on", "ঘৰত আছোঁ — ghorot asü — I am at home"],
          ["-re", "Instrumental — with, by means of", "পেঞ্চিলেৰে লিখা — pensilere likha — write with a pencil"],
          ["-pora", "Ablative — from", "ঘৰৰ পৰা আহিলোঁ — ghoror pora ahilü — I came from home"]
        ]
      },
      notes: [
        "The ergative -e appears on the subject of a transitive verb, most clearly in the past and perfective; it is often absent in the present. Beginners can postpone this subtlety.",
        "The accusative/dative -k is obligatory with pronouns and with definite objects, and optional with indefinite common nouns.",
        "Some forms vary between the written standard and speech; the endings listed here are the widely attested ones."
      ]
    },
    {
      id: "pronouns",
      title: "Pronouns",
      summary: "Honorificity, and a proximal–distal contrast in the third person.",
      table: {
        caption: "Personal pronouns",
        head: ["Person", "Assamese", "Roman", "Notes"],
        rows: [
          ["I", "মই", "moi", "—"],
          ["We", "আমি", "ami", "—"],
          ["You (intimate)", "তই", "toi", "Non-honorific; close friends, children, inferiors"],
          ["You (familiar)", "তুমি", "tumi", "The everyday polite 'you'"],
          ["You (honorific)", "আপুনি", "apuni", "Respectful; elders and strangers"],
          ["He / She (near)", "ই", "i", "Proximal; no gender distinction"],
          ["He / She (far)", "সি", "xi", "Distal; no gender distinction"],
          ["He / She (honorific)", "তেওঁ", "teü", "Respectful third person"],
          ["They", "সিহঁত", "xihõt", "Non-honorific plural"]
        ]
      },
      notes: [
        "Third-person pronouns distinguish proximal (ই, near the speaker) from distal (সি, away from the speaker), and mark gender only in the non-honorific.",
        "Plural classifiers encode register: -হঁত (-hõt) is non-honorific, while -সকল or -লোক (-xokol / -lök) is honorific — মানুহহঁত (manuh-hõt) vs মানুহসকল (manuh-xokol), 'the people'.",
        "Possessives are formed with the genitive -r: মোৰ (mor) 'my', তোমাৰ (tomar) 'your', আপোনাৰ (apunar) 'your (honorific)'."
      ]
    },
    {
      id: "tense",
      title: "Tense and aspect",
      summary: "Past versus future, with the present unmarked and aspect on top.",
      table: {
        caption: "The verb কৰা (kora, to do), first person",
        head: ["Form", "How it is built", "Example (I)", "Meaning"],
        rows: [
          ["Present", "stem + -o", "কৰোঁ — korü", "do / does (general or habitual)"],
          ["Past", "stem + -il + -o", "কৰিলোঁ — korilü", "did"],
          ["Future", "stem + -im", "কৰিম — korim", "will do"],
          ["Present continuous", "-i + আছ-", "কৰি আছোঁ — kori asü", "am doing"],
          ["Present perfect", "-is-", "কৰিছোঁ — korisü", "have done"],
          ["Past continuous", "-i + আছিল-", "কৰি আছিলোঁ — kori asilü", "was doing"]
        ]
      },
      notes: [
        "The present tense form covers both habitual and general statements; there is no separate simple-present marking.",
        "Aspect is carried by separate markers — the -i form of the verb plus an auxiliary — rather than fused into the tense suffix.",
        "Assamese has a perfect built with -is- that maps onto the English 'have done'. See the Verbs page for the full paradigm across persons."
      ]
    },
    {
      id: "negation",
      title: "Negation",
      summary: "A prefix on the verb, and separate words for 'there is not'.",
      table: {
        caption: "Negating কৰা (to do)",
        head: ["Form", "How it is built", "Example", "Meaning"],
        rows: [
          ["Present", "ন- + stem + -o", "নকৰোঁ — nokorü", "do not / does not"],
          ["Past", "ন- + stem + -il + -o", "নকৰিলোঁ — nokorilü", "did not"],
          ["Future", "ন- + stem + -im", "নকৰিম — nokorim", "will not"],
          ["Continuous", "-i + নাই", "কৰি নাই — kori nai", "is not doing"]
        ]
      },
      notes: [
        "The ordinary negative is a prefix: ন- (no-) is added to the verb — কৰোঁ becomes নকৰোঁ.",
        "নাই (nai) means 'there is not / do not have': মোৰ টকা নাই (mor toka nai) — 'I have no money'.",
        "নহয় (nohoi) is the negative copula: এইটো মোৰ নহয় (eitü mor nohoi) — 'this is not mine'."
      ]
    },
    {
      id: "questions",
      title: "Questions",
      summary: "Question words, and a particle for yes/no questions.",
      table: {
        caption: "Interrogatives",
        head: ["English", "Assamese", "Roman"],
        rows: [
          ["What?", "কি", "ki"],
          ["Who?", "কোন", "kün"],
          ["When?", "কেতিয়া", "ketia"],
          ["Where?", "ক’ত", "kót"],
          ["Why?", "কিয়", "kio"],
          ["How?", "কেনেকৈ", "kenekoi"],
          ["How much / many?", "কিমান", "kiman"],
          ["Which?", "কোনটো", "kuntu"]
        ]
      },
      notes: [
        "For a yes/no question the word order does not change; a particle — commonly নে (ne) or নেকি (neki) — is added at the end: তুমি ভালে আছা নে? (tumi bhale asa ne?) — 'Are you well?'",
        "A question word stays in the position of the phrase it replaces, rather than moving to the front as in English: তুমি ক’ত যোৱা? (tumi kót züa?) — literally 'you where go?'."
      ]
    },
    {
      id: "plurals",
      title: "Plurals and classifiers",
      summary: "Plural marking depends on the noun and, above all, on register.",
      table: {
        caption: "How plurals and counting work",
        head: ["Point", "Detail"],
        rows: [
          ["Plural (non-honorific)", "-হঁত (-hõt): ল’ৰাহঁত (lóra-hõt) — the boys"],
          ["Plural (honorific)", "-সকল / -লোক (-xokol / -lök): শিক্ষকসকল (xikkhok-xokol) — the teachers"],
          ["Numerals", "Assamese numerals are used directly with nouns; there is no obligatory classifier system."],
          ["Measure words", "Counting people, animals or long objects may use a measure word, but a plain numeral is normal."]
        ]
      },
      notes: [
        "Unlike Bodo and many other languages of the region, Assamese does not require numeral classifiers for ordinary counting; the numeral simply precedes the noun.",
        "The choice of plural suffix is a matter of register: -hõt is casual and -xokol / -lök is respectful."
      ]
    },
    {
      id: "gender",
      title: "Gender (লিঙ্গ)",
      summary: "Assamese does not put a gender on ordinary things — but many words for people and animals have a distinct feminine form.",
      table: {
        caption: "Masculine and feminine pairs",
        head: ["Masculine", "Feminine", "English"],
        rows: [
          ["দেউতা / পিতা", "মা / আই", "father / mother"],
          ["পুত্ৰ / পো", "কন্যা / জী", "son / daughter"],
          ["ককা", "আইতা", "grandfather / grandmother"],
          ["ভাই / ভাইটি", "ভনী / ভণ্টী", "younger brother / younger sister"],
          ["ৰজা", "ৰাণী", "king / queen"],
          ["দেৱৰ", "ননদ", "husband's younger brother / sister"],
          ["মুনিহ", "তিৰোতা", "man / woman"],
          ["ডেকা", "গাভৰু", "young man / young woman"],
          ["গিৰিয়েক", "ঘৈণীয়েক", "husband / wife"],
          ["ছাত্ৰ", "ছাত্ৰী", "student (male / female)"],
          ["নাতি", "নাতিনী", "grandson / granddaughter"]
        ]
      },
      notes: [
        "Grammatical gender is not marked on nouns: মেজ (table), কিতাপ (book) and পানী (water) have no gender, and there is no ‘he/she’ for an object. লিঙ্গ appears only where a separate word exists for the female.",
        "Some feminines are made by changing the ending — নাতি → নাতিনী, ছাত্ৰ → ছাত্ৰী, ৰজা → ৰাণী, ভাগিন → ভাগিনী. Others are different words entirely, not derived at all: পিতা → মাতৃ, ভাই → ভনী, ককা → আইতা.",
        "In the third person, gender is distinguished only in the non-honorific: সি is ‘he’ and তাই is ‘she’. The honorific তেওঁ serves for both."
      ]
    },
    {
      id: "karak",
      title: "Kārak — the relations of a noun (কাৰক)",
      summary: "Kārak is the job a noun does for the verb — who does, to whom, with what, from where. The case endings are how that job is marked on the surface.",
      table: {
        caption: "The kāraks and the endings that mark them",
        head: ["কাৰক (relation)", "Ending", "Example", "English"],
        rows: [
          ["কৰ্তৃ (doer)", "-এ", "ৰামে কিতাপ পঢ়ে।", "Ram reads a book."],
          ["কৰ্ম (object)", "-ক", "ৰামে মাক মাতে।", "Ram calls mother."],
          ["কৰণ (instrument)", "-এ / -ৰে", "তেওঁ কলমেৰে লিখে।", "He writes with a pen."],
          ["সম্প্ৰদান (recipient)", "-ক / -লৈ", "মই ভাইক দিলোঁ।", "I gave it to my brother."],
          ["অপাদান (source)", "-ৰ পৰা", "মই ঘৰৰ পৰা আহিলোঁ।", "I came from home."],
          ["সম্বন্ধ (possession)", "-ৰ", "ৰামৰ কিতাপ", "Ram's book"],
          ["অধিকৰণ (place / time)", "-ত / -এ", "মেজত কিতাপ আছে।", "There is a book on the table."],
          ["সম্বোধন (address)", "—", "হে ৰাম!", "O Ram!"]
        ]
      },
      notes: [
        "কাৰক (kārak) is the relation; বিভক্তি (bibhakti) is the ending that marks it. Assamese grammar traditionally lists six to eight kāraks, and the exact count varies from author to author.",
        "One ending can mark more than one relation — -এ marks both the doer and the instrument — so the reading is settled by context and by whether the verb is transitive.",
        "The relation holds even when no ending is visible: a bare noun sitting before a verb can still be its object."
      ]
    },
    {
      id: "samas",
      title: "Compounds (সমাস)",
      summary: "Two or more words welded into one — the workhorse of Assamese word-formation, inherited from Sanskrit.",
      table: {
        caption: "The six compound types",
        head: ["সমাস", "How it is built", "Example", "Meaning"],
        rows: [
          ["দ্বন্দ (dvandva)", "two words of equal weight, both kept", "মাতৃ-পিতৃ", "mother and father"],
          ["তৎপুৰুষ (tatpurusha)", "the first qualifies the second", "ৰজাৰ পুত্ৰ → ৰাজপুত্ৰ", "the king's son"],
          ["কৰ্মধাৰয় (karmadharaya)", "the first describes the second", "নীল কমল → নীলকমল", "blue lotus"],
          ["দ্বিগু (dvigu)", "the first word is a numeral", "তিনি মুখ → ত্ৰিমুখ", "three-faced"],
          ["বহুব্ৰীহি (bahuvrihi)", "names a third thing, by a quality", "নীল অম্বৰ যাৰ → নীলাম্বৰ", "the one whose garment is blue"],
          ["অব্যয়ীভাব (avyayibhava)", "the first word is an indeclinable", "প্ৰতি দিন → প্ৰতিদিন", "every day"]
        ]
      },
      notes: [
        "সমাস is the joining of two or more words into one: দুই বা ততোধিক শব্দ একত্ৰিত হৈ এটা শব্দ হয়।",
        "The meaning is not always the sum of the parts — a বহুব্ৰীহি compound names something else altogether, and that is its whole point.",
        "The six Sanskrit types are the formal set; modern Assamese also forms loose compounds freely, as in হাতদীঘল or মূৰ-বেয়া."
      ]
    },
    {
      id: "pratyay",
      title: "Suffixes (প্ৰত্যয়)",
      summary: "Endings that turn a root or a stem into a new word — the two families, কৃৎ from verbs and তদ্ধিত from nouns.",
      table: {
        caption: "Building words with suffixes",
        head: ["Type", "Added to", "Examples"],
        rows: [
          ["কৃৎ প্ৰত্যয় (krit)", "a verb root", "লিখ + অক = লিখক (writer) · খা + অন = খাৱন (food) · পঢ় + আ = পঢ়া (reading) · শিক + আ = শিকা"],
          ["তদ্ধিত প্ৰত্যয় (taddhit)", "a noun or adjective stem", "তল + অতীয়া = তলতীয়া · বাট + অৰুৱা = বাটৰুৱা · বন + অনি = বননি · ধন + ঈ = ধনী"],
          ["উপসৰ্গ (prefix)", "the front of a word", "অ- → অকাজ, অচিন, অকাল · আ- → আকাট, আকাল"]
        ]
      },
      notes: [
        "A প্ৰত্যয় is a bound ending that changes a root or stem into a new word. Assamese grammar sorts them into কৃৎ (built on verbs) and তদ্ধিত (built on nouns and adjectives).",
        "A prefix (উপসৰ্গ) does the same work from the front — the negative অ- alone yields a whole family: অকাজ (useless), অচিন (unknown), অকাল (untimely).",
        "One root can carry several suffixes, and each gives a different word: কৰ gives কৰা (to do), কৰণ (the doing), কৰ্তা (the doer)."
      ]
    },
    {
      id: "sandhi",
      title: "Sandhi — sounds meeting (সন্ধি)",
      summary: "What happens when two sounds join — the reason a written word can look nothing like the two words it came from.",
      table: {
        caption: "The three kinds of sandhi",
        head: ["Type", "What happens", "Example"],
        rows: [
          ["স্বৰ সন্ধি (vowel + vowel)", "the two vowels merge", "বিদ্যা + আলয় = বিদ্যালয় (school)"],
          ["ব্যঞ্জন সন্ধি (with a consonant)", "a consonant joins them", "দিক্ + অন্ত = দিগন্ত (horizon)"],
          ["বিসৰ্গ সন্ধি (after final -ঃ)", "the visarga changes", "দুঃ + খ = দুঃখ (sorrow)"]
        ]
      },
      notes: [
        "সন্ধি is the joining of two sounds: দুই বৰ্ণৰ মিলনক সন্ধি বোলে। It applies mainly to তৎসম words — those kept in their Sanskrit form.",
        "Native Assamese words join more loosely and follow their own habits of assimilation, which is part of why তৎসম words in Assamese look different from their Sanskrit originals.",
        "Treat sandhi as vocabulary rather than as a rule set you apply live: it is productive chiefly in formal and literary words."
      ]
    },
    {
      id: "voice",
      title: "Voice (বাচ্য)",
      summary: "Assamese has an active voice and, mainly in formal writing, a passive — and a very common ‘by-me’ construction for obligation.",
      table: {
        caption: "Active and passive",
        head: ["বাচ্য", "Form", "Example", "English"],
        rows: [
          ["কৰ্তৃবাচ্য (active)", "the doer is the subject", "ৰামে কিতাপ পঢ়ে।", "Ram reads the book."],
          ["কৰ্মবাচ্য (passive)", "the object becomes the subject; verb in -হয় / -হ'ল", "কিতাপখন পঢ়া হয়।", "The book is read."],
          ["কৰ্মবাচ্য (agent named)", "doer in -ৰ দ্বাৰা", "তেওঁৰ দ্বাৰা কামটো কৰা হ'ল।", "The work was done by him."],
          ["necessitative (‘by-me’)", "possessor in -ৰ + লাগে", "মোৰ কৰিব লাগে।", "I have to do it."]
        ]
      },
      notes: [
        "The passive is far rarer in Assamese than in English, and heavier: it belongs to formal and written registers. Where English says ‘it was done’, ordinary Assamese usually says ‘they did it’.",
        "The necessitative is the exception — it is thoroughly everyday. মোৰ কৰিব লাগে is literally ‘it is to be done by me’, i.e. ‘I have to do it’, and it is used constantly.",
        "Do not carry an English passive across word for word; it tends to read as a translation rather than as Assamese."
      ]
    },
    {
      id: "ukti",
      title: "Reported speech (উক্তি)",
      summary: "Reporting what someone said — quoted directly, or shifted into indirect speech with new pronouns and verbs.",
      table: {
        caption: "Direct and indirect",
        head: ["Direct — প্ৰত্যক্ষ উক্তি", "Indirect — পৰোক্ষ উক্তি"],
        rows: [
          ["ৰামে ক’লে, “মই কালি যাম।”", "ৰামে ক’লে যে তেওঁ কালি যাব।"],
          ["মাই ক’লে, “তই আহ।”", "মাই ক’লে যে সি আহিব।"],
          ["ছাত্ৰই ক’লে, “মই পঢ়িছোঁ।”", "ছাত্ৰই ক’লে যে সি পঢ়িছে।"]
        ]
      },
      notes: [
        "Direct speech quotes the words exactly and keeps the original pronouns: তেওঁ ক’লে, “মই যাম।” Indirect speech reports them and shifts both pronoun and verb.",
        "The link word is যে — ‘that’. Assamese indirect speech usually keeps the tense closer to the original than English does.",
        "In everyday speech direct quotation is far more common. People very often say ৰামে ক’লে, “মই যাম” rather than shifting it into the indirect form."
      ]
    }
  ]
};
