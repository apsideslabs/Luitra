/* ============================================================
   Luitra — lessons
   Part of the window.ASM content bundle. See docs/CONTENT-GUIDE.md.
   Fifteen lessons in four levels. Every Assamese string is in the
   Assamese script and carries a romanisation.
   ============================================================ */

window.ASM = window.ASM || {};

window.ASM.lessons = [
  {
    "level": "Basic",
    "n": 1,
    "title": "What is Assamese?",
    "summary": "Where the language lives, who speaks it, and how it is written.",
    "body": `
        <p><b>Assamese</b> (অসমীয়া, <i>Asomiya</i>) is an <b>Indo-Aryan</b> language — the same family as Bengali, Odia and Hindi — and <u>not</u> the Tibeto-Burman family of Bodo that shares its region.</p>
        <ul>
          <li>It is the mother tongue of the Assamese people of <b>Assam</b> in north-east India, with speakers also in Arunachal Pradesh, Meghalaya, Nagaland and beyond.</li>
          <li>It is one of the <b>22 scheduled languages</b> of India and the official language of Assam, with over <b>15 million</b> speakers.</li>
          <li>It was designated a <b>classical Indian language</b> on 3 October 2024.</li>
          <li>It is written in the <b>Assamese script</b>, part of the Bengali–Assamese script.</li>
        </ul>
        <p>Because the script is close to Bengali, learners sometimes assume Assamese is "Bengali with a different name". It is not. Assamese keeps two letters Bengali dropped — ৰ (ro) and ৱ (wo) — pronounces many letters differently, and has its own grammar and vocabulary.</p>`
  },
  {
    "level": "Basic",
    "n": 2,
    "title": "Reading the sounds",
    "summary": "The handful of sound habits that make Assamese pronunciation click.",
    "body": `
        <p>You do not need the whole alphabet to start speaking. Get these habits right and you will be understood far more often.</p>
        <ul>
          <li><b>The /x/ sound.</b> শ, ষ and স are all pronounced /x/ — a soft fricative between English "s" and "h". So অসম is <i>Oxom</i>, not "As-sam".</li>
          <li><b>চ is "s", জ is "z".</b> Unlike Hindi, Assamese চ and ছ sound like "s", and জ and য sound like "z".</li>
          <li><b>Two special letters.</b> ৰ (r) and ৱ (w) exist in Assamese but not in Bengali.</li>
          <li><b>Schwa deletion.</b> A word-final inherent vowel is dropped: কিতাপ is said <i>kitap</i>, not "kitapo".</li>
          <li><b>Three kinds of "you".</b> তই / তুমি / আপুনি — get used to choosing the right one.</li>
        </ul>`
  },
  {
    "level": "Basic",
    "n": 3,
    "title": "Pronouns and the three 'you's",
    "summary": "I, you, he/she, we, they — and the honorific choice built into 'you'.",
    "body": `
        <table>
          <tr><th>English</th><th>Assamese</th><th>Roman</th></tr>
          <tr><td>I</td><td>মই</td><td>moi</td></tr>
          <tr><td>We</td><td>আমি</td><td>ami</td></tr>
          <tr><td>You (intimate)</td><td>তই</td><td>toi</td></tr>
          <tr><td>You (familiar)</td><td>তুমি</td><td>tumi</td></tr>
          <tr><td>You (honorific)</td><td>আপুনি</td><td>apuni</td></tr>
          <tr><td>He / She (near)</td><td>ই</td><td>i</td></tr>
          <tr><td>He / She (far)</td><td>সি</td><td>xi</td></tr>
          <tr><td>He / She (honorific)</td><td>তেওঁ</td><td>teü</td></tr>
          <tr><td>They</td><td>সিহঁত</td><td>xihõt</td></tr>
        </table>
        <p>Two things to notice. First, the third person marks <b>distance</b>, not gender in the ordinary form: ই (i) is "near the speaker", সি (xi) is "away". Second, possessives are made with <b>-r</b>: মোৰ (<i>mor</i>) = "my", তোমাৰ (<i>tomar</i>) = "your".</p>`
  },
  {
    "level": "Basic",
    "n": 4,
    "title": "Greetings & courtesy",
    "summary": "The phrases that open every Assamese conversation.",
    "body": `
        <table>
          <tr><th>English</th><th>Assamese</th><th>Roman</th></tr>
          <tr><td>Hello / Greetings</td><td>নমস্কাৰ</td><td>nomoskar</td></tr>
          <tr><td>Good morning</td><td>শুভ ৰাতিপুৱা</td><td>xubho ratipua</td></tr>
          <tr><td>Good night</td><td>শুভ ৰাতি</td><td>xubho rati</td></tr>
          <tr><td>How are you? (familiar)</td><td>তুমি ভালে আছা নে?</td><td>tumi bhale asa ne?</td></tr>
          <tr><td>I am fine</td><td>মই ভালে আছোঁ</td><td>moi bhale asü</td></tr>
          <tr><td>Thank you</td><td>ধন্যবাদ</td><td>dhonyobad</td></tr>
          <tr><td>Sorry / excuse me</td><td>ক্ষমা কৰিব</td><td>khoma korib</td></tr>
          <tr><td>Goodbye</td><td>বিদায়</td><td>biday</td></tr>
        </table>
        <p>Say <b>নমস্কাৰ</b> with a smile and you have already opened the door. Practise the first conversation in the <a href="conversations.html">Conversations</a> section until it feels automatic.</p>`
  },
  {
    "level": "Basic",
    "n": 5,
    "title": "Numbers & counting",
    "summary": "1–10, the teens and tens, and the pattern above a hundred.",
    "body": `
        <table>
          <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
          <tr>
            <td>এক<br><small>ek</small></td><td>দুই<br><small>dui</small></td><td>তিনি<br><small>tini</small></td>
            <td>চাৰি<br><small>sari</small></td><td>পাঁচ<br><small>pas</small></td><td>ছয়<br><small>soy</small></td>
            <td>সাত<br><small>xat</small></td><td>আঠ<br><small>aath</small></td><td>ন<br><small>no</small></td>
            <td>দহ<br><small>doh</small></td>
          </tr>
        </table>
        <p><b>The pattern.</b> One to ten must be learnt. The teens and tens are largely their own words — 15 is পোন্ধৰ (<i>pondhor</i>), 30 is ত্ৰিশ (<i>trix</i>) — so learn them as vocabulary. From a hundred upwards the parts simply stack: 101 is এশ এক (<i>ex ek</i>). For large amounts Assamese uses হাজাৰ (<i>hazar</i>, thousand), লাখ (<i>lakh</i>) and কোটি (<i>koti</i>).</p>`
  },
  {
    "level": "Elementary",
    "n": 6,
    "title": "Nouns & the case markers",
    "summary": "How Assamese shows who did what, using suffixes.",
    "body": `
        <p>Assamese has no "the" and no "a". Instead, meaning is carried by <b>suffixes</b> stuck onto the end of a noun.</p>
        <table>
          <tr><th>Suffix</th><th>Job</th><th>Example</th></tr>
          <tr><td>-e</td><td>subject of a transitive verb</td><td>ৰামে … <i>rame</i> = Ram (as subject)</td></tr>
          <tr><td>-k</td><td>object / recipient</td><td>মোক <i>mök</i> = to me</td></tr>
          <tr><td>-loi</td><td>to, towards</td><td>ঘৰলৈ <i>ghoroloi</i> = homeward</td></tr>
          <tr><td>-r / -er</td><td>of, ’s</td><td>ৰামৰ <i>ramor</i> = Ram's</td></tr>
          <tr><td>-t / -e</td><td>in, at, on</td><td>ঘৰত <i>ghorot</i> = at home</td></tr>
          <tr><td>-re</td><td>with, by means of</td><td>পেঞ্চিলেৰে <i>pensilere</i> = with a pencil</td></tr>
          <tr><td>-pora</td><td>from</td><td>ঘৰৰ পৰা <i>ghoror pora</i> = from home</td></tr>
        </table>
        <p>Plurals encode register: <b>-হঁত</b> (<i>-hõt</i>) for ordinary people, and <b>-সকল / -লোক</b> (<i>-xokol / -lök</i>) for respected ones — শিক্ষকসকল = "the teachers".</p>`
  },
  {
    "level": "Elementary",
    "n": 7,
    "title": "Everyday words",
    "summary": "Family, food, home and nature — the words you use daily.",
    "body": `
        <p>Build your vocabulary in themes. Here is a starter set; the full searchable list is in the <a href="dictionary.html">Dictionary</a>.</p>
        <table>
          <tr><th>Theme</th><th>Words</th></tr>
          <tr><td>Family</td><td>মা (mother), দেউতা (father), দাদা (elder brother), বাইদেউ (elder sister), বন্ধু (friend)</td></tr>
          <tr><td>Food</td><td>পানী (water), ভাত (rice), মাছ (fish), চাহ (tea), গাখীৰ (milk)</td></tr>
          <tr><td>Home</td><td>ঘৰ (house), দুৱাৰ (door), কিতাপ (book), কলম (pen), কাপোৰ (clothes)</td></tr>
          <tr><td>Nature</td><td>সূৰ্য (sun), চন্দ্ৰ (moon), বৰষুণ (rain), গছ (tree), নদী (river)</td></tr>
        </table>`
  },
  {
    "level": "Elementary",
    "n": 8,
    "title": "The verb comes last",
    "summary": "Assamese sentence order, and your first real sentences.",
    "body": `
        <p>Assamese word order is <b>Subject → Object → Verb</b>. The verb always comes at the end.</p>
        <p class="big-example">মই ভাত খাওঁ।<br><span>Moi bhat khaü.</span><br>"I eat rice." — মই (I) · ভাত (rice) · খাওঁ (eat)</p>
        <p>Where English says "I am going home", Assamese lines the pieces up and finishes with the verb: মই ঘৰলৈ যাওঁ (<i>Moi ghoroloi zaü</i>).</p>
        <p>Common verbs to practise: যোৱা (go), অহা (come), খোৱা (eat), পিয়া (drink), বহা (sit), লিখা (write), পঢ়া (read/study), কৰা (do).</p>`
  },
  {
    "level": "Elementary",
    "n": 9,
    "title": "Asking questions",
    "summary": "Question words, and how to turn a sentence into a question.",
    "body": `
        <table>
          <tr><th>English</th><th>Assamese</th><th>Roman</th></tr>
          <tr><td>Who?</td><td>কোন</td><td>kün</td></tr>
          <tr><td>What?</td><td>কি</td><td>ki</td></tr>
          <tr><td>When?</td><td>কেতিয়া</td><td>ketia</td></tr>
          <tr><td>Where?</td><td>ক’ত</td><td>kót</td></tr>
          <tr><td>Why?</td><td>কিয়</td><td>kio</td></tr>
          <tr><td>How?</td><td>কেনেকৈ</td><td>kenekoi</td></tr>
        </table>
        <p>For a yes/no question, the word order does not change; a particle — commonly <b>নে</b> (<i>ne</i>) or <b>নেকি</b> (<i>neki</i>) — is added at the end: তুমি ভালে আছা নে? (<i>Tumi bhale asa ne?</i>) = "Are you well?"</p>`
  },
  {
    "level": "Intermediate",
    "n": 10,
    "title": "The verb system: tense & aspect",
    "summary": "Present, past and future, plus the aspect markers built on top.",
    "body": `
        <p>Assamese verbs agree with their subject in <b>person and honorificity, but not number</b>. The stem stays put; the ending changes. Using the verb <b>কৰা</b> (kora, to do) as the model:</p>
        <table>
          <tr><th>Form</th><th>Ending</th><th>Example</th><th>Meaning</th></tr>
          <tr><td>Present</td><td>-o</td><td>কৰোঁ (korü)</td><td>do / does (habit, general)</td></tr>
          <tr><td>Past</td><td>-il + -o</td><td>কৰিলোঁ (korilü)</td><td>did</td></tr>
          <tr><td>Future</td><td>-im</td><td>কৰিম (korim)</td><td>will do</td></tr>
          <tr><td>Present continuous</td><td>-i + আছ-</td><td>কৰি আছোঁ (kori asü)</td><td>am doing</td></tr>
          <tr><td>Present perfect</td><td>-is-</td><td>কৰিছোঁ (korisü)</td><td>have done</td></tr>
        </table>
        <p>Aspect is carried by separate markers — the -i form of the verb plus an auxiliary — rather than fused into the tense suffix. See the <a href="verbs.html">Verbs</a> page for the full paradigm across persons and honorific tiers.</p>`
  },
  {
    "level": "Intermediate",
    "n": 11,
    "title": "Negation: saying no",
    "summary": "How to make a sentence negative, and the words for 'there is not'.",
    "body": `
        <p>The ordinary negative is a prefix, <b>ন-</b> (<i>no-</i>), added to the verb: কৰোঁ → নকৰোঁ. Two other words carry the idea of "not":</p>
        <table>
          <tr><th>Form</th><th>Example</th><th>Meaning</th></tr>
          <tr><td>Present</td><td>নকৰোঁ (nokorü)</td><td>does not do</td></tr>
          <tr><td>Past</td><td>নকৰিলোঁ (nokorilü)</td><td>did not do</td></tr>
          <tr><td>Future</td><td>নকৰিম (nokorim)</td><td>will not do</td></tr>
          <tr><td>There is not</td><td>নাই (nai)</td><td>is not / do not have</td></tr>
          <tr><td>Is not (copula)</td><td>নহয় (nohoi)</td><td>is not (of a thing)</td></tr>
        </table>
        <p>So মোৰ টকা নাই (<i>mor toka nai</i>) = "I have no money", and এইটো মোৰ নহয় (<i>eitü mor nohoi</i>) = "this is not mine".</p>`
  },
  {
    "level": "Intermediate",
    "n": 12,
    "title": "Describing things",
    "summary": "Adjectives and how they sit in an Assamese sentence.",
    "body": `
        <p>Adjectives normally come <b>before</b> the noun, exactly as in English, and they do not change for gender.</p>
        <table>
          <tr><th>English</th><th>Assamese</th><th>Roman</th></tr>
          <tr><td>Good</td><td>ভাল</td><td>bhal</td></tr>
          <tr><td>Big</td><td>ডাঙৰ</td><td>dangor</td></tr>
          <tr><td>Small</td><td>সৰু</td><td>xoru</td></tr>
          <tr><td>Happy</td><td>সুখী</td><td>xukhi</td></tr>
          <tr><td>Beautiful</td><td>ধুনীয়া</td><td>dhunia</td></tr>
        </table>
        <p>So "the beautiful girl" is ধুনীয়া ছোৱালী (<i>dhunia sowali</i>) — adjective first.</p>`
  },
  {
    "level": "Advanced",
    "n": 13,
    "title": "Honorifics in depth",
    "summary": "The three tiers of 'you', and the same system in the third person.",
    "body": `
        <p>Assamese builds politeness directly into the grammar. There are three tiers of "you", and the verb ending changes to match.</p>
        <table>
          <tr><th>Tier</th><th>You</th><th>Verb ending</th><th>Example (to do)</th></tr>
          <tr><td>Non-honorific</td><td>তই (toi)</td><td>-∅ / -a</td><td>কৰ (kor)</td></tr>
          <tr><td>Familiar / polite</td><td>তুমি (tumi)</td><td>-a</td><td>কৰা (kora)</td></tr>
          <tr><td>High-honorific</td><td>আপুনি (apuni)</td><td>-e</td><td>কৰে (kore)</td></tr>
        </table>
        <p>The same system reaches the third person: তেওঁ (<i>teü</i>) is a respectful "he/she", and an even higher form is reserved for God or a revered person. Plurals carry the same signal, with -হঁত for ordinary people and -সকল / -লোক for respected ones.</p>
        <p>Rule of thumb: <b>আপুনি</b> with anyone older, in authority or unfamiliar; <b>তুমি</b> with peers; <b>তই</b> only with close friends and children. Erring toward the more respectful form is almost never a mistake.</p>`
  },
  {
    "level": "Advanced",
    "n": 14,
    "title": "Politeness & requests",
    "summary": "Softening commands and speaking respectfully.",
    "body": `
        <p>The bare stem is a blunt command: আহ! = "Come!". To soften it, use the honorific imperative <b>-ক</b>: আহক = "please come". The very polite request form is আহিব = "would you come".</p>
        <p>Other politeness tools:</p>
        <ul>
          <li><b>অনুগ্ৰহ কৰি</b> (<i>onugroh kori</i>) = "please".</li>
          <li>Borrowing English "please" and "thank you" is completely normal in daily Assamese conversation.</li>
          <li>Refusing politely: <b>নালাগে</b> (<i>nalage</i>) = "not needed", softened with ধন্যবাদ.</li>
        </ul>`
  },
  {
    "level": "Advanced",
    "n": 15,
    "title": "Spoken vs written Assamese",
    "summary": "Why everyday speech sounds different from the textbook — and how to handle it.",
    "body": `
        <p>This is the lesson most courses skip. In Assamese, what people <i>say</i> is often not word-for-word what a textbook <i>writes</i>.</p>
        <ul>
          <li><b>Dialects.</b> Eastern/Standard, Kamrupi and Goalpariya differ in vocabulary and pronunciation — people from Guwahati and from Goalpara may use different words for the same thing.</li>
          <li><b>Code-switching.</b> Speakers constantly mix in English (and Hindi or Bengali), especially in classrooms and offices. A sentence may start in Assamese, drop in an English word, and finish in Assamese. This is normal, not "bad Assamese".</li>
          <li><b>Schwa deletion in speech.</b> The word-final inherent vowel is dropped, so spoken forms run together and diverge from the spelling you see.</li>
          <li><b>Honorific endings carry the register.</b> The same sentence sounds warm, neutral or cold depending on which "you" ending you choose.</li>
        </ul>
        <p><b>How to practise it.</b> Use the textbook forms here as your skeleton, then listen to real speech — Assamese radio, songs, and conversation with speakers — and note how they shorten and mix. Copy that rhythm and you will sound far more natural than someone reciting written sentences.</p>
        <p class="note">Honest caveat: Assamese is a well-documented language, but this platform was compiled from published sources rather than from native fluency. Treat the colloquial notes as signposts, and let a speaker be your final judge.</p>`
  }
];
