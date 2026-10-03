/* ============================================================
   Luitra — verb reference
   Assamese verbs agree in person and honorificity, not number.
   The tables below give the full present / past / future paradigm
   for one regular model verb, plus the negative, imperative,
   aspect and a set of common verbs.
   ============================================================ */

window.ASM = window.ASM || {};

window.ASM.verbs = {
  intro:
    "Assamese verbs agree with their subject in person and honorificity, but not in number — মই (I) and আমি (we) take the same ending. The stem stays put; what changes is the ending. This page gives the full present, past and future paradigm for one regular model verb (কৰা, kora, 'to do'), the negative forms, the imperative across the three honorific tiers, the aspect markers that sit on top of tense, and a set of common verbs with their first-person forms.",

  caveat:
    "These tables are generated from the regular ending patterns and model the system rather than asserting that every derived form is attested for every verb. Assamese has irregular verbs — যোৱা ('to go'), খোৱা ('to eat'), হোৱা ('to be') — and the intimate (toi) paradigm is not fully standardised in written sources. Forms vary between the standard and speech. Confirm details with a speaker.",

  model: { bo: "কৰ", rom: "kor", en: "to do" },

  persons: [
    { bo: "মই", rom: "moi", en: "I" },
    { bo: "আমি", rom: "ami", en: "we" },
    { bo: "তুমি", rom: "tumi", en: "you (familiar)" },
    { bo: "আপুনি", rom: "apuni", en: "you (honorific)" },
    { bo: "সি", rom: "xi", en: "he / she" },
    { bo: "তেওঁ", rom: "teü", en: "he / she (honorific)" }
  ],

  tenses: [
    {
      label: "Present",
      gloss: "do / does (general or habitual)",
      cells: [
        { bo: "কৰোঁ", rom: "korü" },
        { bo: "কৰোঁ", rom: "korü" },
        { bo: "কৰা", rom: "kora" },
        { bo: "কৰে", rom: "kore" },
        { bo: "কৰে", rom: "kore" },
        { bo: "কৰে", rom: "kore" }
      ]
    },
    {
      label: "Past",
      gloss: "did",
      cells: [
        { bo: "কৰিলোঁ", rom: "korilü" },
        { bo: "কৰিলোঁ", rom: "korilü" },
        { bo: "কৰিলা", rom: "korila" },
        { bo: "কৰিলে", rom: "korile" },
        { bo: "কৰিলে", rom: "korile" },
        { bo: "কৰিলে", rom: "korile" }
      ]
    },
    {
      label: "Future",
      gloss: "will do",
      cells: [
        { bo: "কৰিম", rom: "korim" },
        { bo: "কৰিম", rom: "korim" },
        { bo: "কৰিবা", rom: "koriba" },
        { bo: "কৰিব", rom: "korib" },
        { bo: "কৰিব", rom: "korib" },
        { bo: "কৰিব", rom: "korib" }
      ]
    }
  ],

  negative: {
    title: "Negation",
    note:
      "The ordinary negative is a prefix, ন- (no-), added to the verb. Two other words carry the idea of 'not': নাই (nai) = 'there is not / do not have', and নহয় (nohoi) = the negative copula 'is not'.",
    rows: [
      ["Present", "নকৰোঁ", "nokorü", "do not / does not do"],
      ["Past", "নকৰিলোঁ", "nokorilü", "did not do"],
      ["Future", "নকৰিম", "nokorim", "will not do"],
      ["There is not", "নাই", "nai", "is not / do not have"],
      ["Is not (copula)", "নহয়", "nohoi", "is not (of a thing)"]
    ]
  },

  imperative: {
    title: "The imperative across the tiers",
    note:
      "The bare stem is a blunt command. Adding the familiar or honorific ending softens it. In daily speech, English 'please' is also borrowed freely.",
    rows: [
      ["Intimate (toi)", "কৰ", "kor", "do (to a close friend or child)"],
      ["Familiar (tumi)", "কৰা", "kora", "do (to a peer)"],
      ["Honorific (apuni)", "কৰক", "korok", "please do (to an elder or stranger)"],
      ["Polite request", "কৰিব", "korib", "would you do (very polite)"]
    ]
  },

  aspects: [
    { name: "Present continuous", how: "verb in -i + আছ- (as-)", example: "কৰি আছোঁ — kori asü — I am doing" },
    { name: "Present perfect", how: "verb + -is-", example: "কৰিছোঁ — korisü — I have done" },
    { name: "Past continuous", how: "verb in -i + আছিল- (asil-)", example: "কৰি আছিলোঁ — kori asilü — I was doing" },
    { name: "Habitual", how: "verb in -i + থাকে (thake)", example: "কৰি থাকে — kori thake — keeps doing" }
  ],

  common: {
    head: ["English", "I (present)", "I (past)", "I (future)"],
    rows: [
      ["to do", "কৰোঁ — korü", "কৰিলোঁ — korilü", "কৰিম — korim"],
      ["to eat", "খাওঁ — khaü", "খালোঁ — khalü", "খাম — kham"],
      ["to drink", "পিয়োঁ — piü", "পিলোঁ — pilü", "পিম — pim"],
      ["to go", "যাওঁ — zaü", "গলোঁ — galü", "যাম — zam"],
      ["to come", "আহোঁ — ahü", "আহিলোঁ — ahilü", "আহিম — ahim"],
      ["to see", "দেখোঁ — dekhü", "দেখিলোঁ — dekhilü", "দেখিম — dekhim"],
      ["to read", "পঢ়োঁ — porhü", "পঢ়িলোঁ — porhilü", "পঢ়িম — porhim"],
      ["to write", "লিখোঁ — likhü", "লিখিলোঁ — likhilü", "লিখিম — likhim"],
      ["to speak", "কওঁ — koü", "ক’লোঁ — kölü", "ক’ম — köm"],
      ["to sleep", "শোওঁ — xoü", "শুলোঁ — xulü", "শুম — xum"]
    ]
  }
};
