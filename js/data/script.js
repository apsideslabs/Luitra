/* ============================================================
   Luitra — script data
   Part of the window.ASM content bundle. See docs/CONTENT-GUIDE.md.
   Every Assamese string is in the Assamese script and carries a
   romanisation. Scheme: x = শ/ষ/স, w = ৱ, r = ৰ, y = য়.
   ============================================================ */

window.ASM = window.ASM || {};

window.ASM.script = {
  "intro": "Assamese is written in the Assamese script, part of the Bengali–Assamese family. It is very close to Bengali, but it is not the same alphabet: Assamese keeps two letters that Bengali dropped — ৰ (ro) and ৱ (wo) — and it pronounces many letters differently. Below is the বৰ্ণমালা chart — every letter as it is read aloud — followed by the vowel and consonant tables with a plain-English hint for each sound. Read it with Lesson 2.",
  "chart": [
    {
      "group": "Vowels",
      "bo": "স্বৰ",
      "items": [
        { "l": "অ", "reads": "o" },
        { "l": "আ", "reads": "aa" },
        { "l": "ই", "reads": "i" },
        { "l": "ঈ", "reads": "ee" },
        { "l": "উ", "reads": "u" },
        { "l": "ঊ", "reads": "oo" },
        { "l": "ঋ", "reads": "ri" },
        { "l": "এ", "reads": "e" },
        { "l": "ঐ", "reads": "oi" },
        { "l": "ও", "reads": "o" },
        { "l": "ঔ", "reads": "ou" }
      ]
    },
    {
      "group": "Velar (ক-বৰ্গ)",
      "bo": "কণ্ঠ্য",
      "items": [
        { "l": "ক", "reads": "ko" },
        { "l": "খ", "reads": "kho" },
        { "l": "গ", "reads": "go" },
        { "l": "ঘ", "reads": "gho" },
        { "l": "ঙ", "reads": "ngo" }
      ]
    },
    {
      "group": "Palatal (চ-বৰ্গ)",
      "bo": "তালব্য",
      "items": [
        { "l": "চ", "reads": "so" },
        { "l": "ছ", "reads": "so" },
        { "l": "জ", "reads": "zo" },
        { "l": "ঝ", "reads": "zho" },
        { "l": "ঞ", "reads": "nyo" }
      ]
    },
    {
      "group": "Retroflex (ট-বৰ্গ)",
      "bo": "মূৰ্ধন্য",
      "items": [
        { "l": "ট", "reads": "to" },
        { "l": "ঠ", "reads": "tho" },
        { "l": "ড", "reads": "do" },
        { "l": "ঢ", "reads": "dho" },
        { "l": "ণ", "reads": "no" }
      ]
    },
    {
      "group": "Dental (ত-বৰ্গ)",
      "bo": "দন্ত্য",
      "items": [
        { "l": "ত", "reads": "to" },
        { "l": "থ", "reads": "tho" },
        { "l": "দ", "reads": "do" },
        { "l": "ধ", "reads": "dho" },
        { "l": "ন", "reads": "no" }
      ]
    },
    {
      "group": "Labial (প-বৰ্গ)",
      "bo": "ওষ্ঠ্য",
      "items": [
        { "l": "প", "reads": "po" },
        { "l": "ফ", "reads": "pho" },
        { "l": "ব", "reads": "bo" },
        { "l": "ভ", "reads": "bho" },
        { "l": "ম", "reads": "mo" }
      ]
    },
    {
      "group": "Semivowels and liquids",
      "bo": "অন্তঃস্থ",
      "items": [
        { "l": "য", "reads": "zo" },
        { "l": "ৰ", "reads": "ro" },
        { "l": "ল", "reads": "lo" },
        { "l": "ৱ", "reads": "wo" }
      ]
    },
    {
      "group": "Sibilants and h",
      "bo": "ঊষ্ম",
      "items": [
        { "l": "শ", "reads": "xo" },
        { "l": "ষ", "reads": "xo" },
        { "l": "স", "reads": "xo" },
        { "l": "হ", "reads": "ho" }
      ]
    },
    {
      "group": "Others",
      "bo": "অন্যান্য",
      "items": [
        { "l": "ক্ষ", "reads": "kho" },
        { "l": "ড়", "reads": "ro" },
        { "l": "ঢ়", "reads": "rho" },
        { "l": "য়", "reads": "yo" }
      ]
    }
  ],
  "vowels": [
    { "l": "অ", "r": "o", "s": "the inherent vowel — a short open 'o', as in British 'hot'" },
    { "l": "আ", "r": "a", "s": "long, as in father" },
    { "l": "ই", "r": "i", "s": "short, as in pin" },
    { "l": "ঈ", "r": "i", "s": "historically long; in modern Assamese it sounds the same as ই" },
    { "l": "উ", "r": "u", "s": "short, as in put" },
    { "l": "ঊ", "r": "u", "s": "long, as in pool" },
    { "l": "ঋ", "r": "ri", "s": "a syllabic 'ri', mostly in Sanskrit loanwords" },
    { "l": "এ", "r": "e", "s": "long, like the 'é' in French 'été' — no glide" },
    { "l": "ঐ", "r": "oi", "s": "a diphthong, like 'oy' in boy" },
    { "l": "ও", "r": "o", "s": "a rounded vowel, closer to the 'u' in put than to English 'o'" },
    { "l": "ঔ", "r": "ou", "s": "a diphthong, like 'ow' in cow" }
  ],
  "consonants": [
    { "l": "ক", "r": "k", "s": "like 'k' in kite" },
    { "l": "খ", "r": "kh", "s": "aspirated k, like 'kh' in backhand" },
    { "l": "গ", "r": "g", "s": "like 'g' in go" },
    { "l": "ঘ", "r": "gh", "s": "aspirated g, like 'gh' in doghouse" },
    { "l": "ঙ", "r": "ng", "s": "like 'ng' in sing" },
    { "l": "চ", "r": "s", "s": "in Assamese, চ is 's', as in sun — not 'ch'" },
    { "l": "ছ", "r": "s", "s": "also 's' in Assamese; চ and ছ have merged" },
    { "l": "জ", "r": "z", "s": "voiced, like 'z' in zoo" },
    { "l": "ঝ", "r": "zh", "s": "aspirated 'z'" },
    { "l": "ঞ", "r": "ny", "s": "like 'ny' in canyon" },
    { "l": "ট", "r": "t", "s": "retroflex t — the tongue curls back" },
    { "l": "ঠ", "r": "th", "s": "retroflex, aspirated" },
    { "l": "ড", "r": "d", "s": "retroflex d" },
    { "l": "ঢ", "r": "dh", "s": "retroflex, aspirated" },
    { "l": "ণ", "r": "n", "s": "retroflex n" },
    { "l": "ত", "r": "t", "s": "dental t — the tongue touches the teeth" },
    { "l": "থ", "r": "th", "s": "dental, aspirated" },
    { "l": "দ", "r": "d", "s": "dental d" },
    { "l": "ধ", "r": "dh", "s": "dental, aspirated" },
    { "l": "ন", "r": "n", "s": "like 'n' in name" },
    { "l": "প", "r": "p", "s": "like 'p' in pen" },
    { "l": "ফ", "r": "ph", "s": "aspirated p, like 'ph' in uphill" },
    { "l": "ব", "r": "b", "s": "like 'b' in book" },
    { "l": "ভ", "r": "bh", "s": "aspirated b, like 'bh' in abhor" },
    { "l": "ম", "r": "m", "s": "like 'm' in man" },
    { "l": "য", "r": "z", "s": "voiced, like 'z' in zoo" },
    { "l": "ৰ", "r": "r", "s": "Assamese-only letter — like 'r' in ring" },
    { "l": "ল", "r": "l", "s": "like 'l' in love" },
    { "l": "ৱ", "r": "w", "s": "Assamese-only letter — like 'w' in water" },
    { "l": "শ", "r": "x", "s": "the /x/ fricative — a soft sound between 's' and 'h'" },
    { "l": "ষ", "r": "x", "s": "also /x/ in Assamese" },
    { "l": "স", "r": "x", "s": "also /x/ in Assamese" },
    { "l": "হ", "r": "h", "s": "like 'h' in home" },
    { "l": "ক্ষ", "r": "kh", "s": "a single consonant in Assamese, pronounced 'kh'" },
    { "l": "য়", "r": "y", "s": "like 'y' in yes" }
  ],
  "notes": [
    "The Assamese alphabet is part of the Bengali–Assamese script. It is identical to the Bengali alphabet except for two letters, ৰ (ro) and ৱ (wo), and for ক্ষ, which is a consonant in its own right rather than a conjunct.",
    "Three letters — শ, ষ and স — are all pronounced /x/ in Assamese. That single sound is why অসম is Oxom and the language is Oxomiya or Asomiya.",
    "চ and ছ are both pronounced 's', and জ, য and word-initial ঝ are pronounced 'z'. This is very different from Hindi or Bengali, and it is one of the clearest ways to recognise Assamese speech.",
    "Schwa deletion: the inherent vowel অ (/ɔ/) is deleted at the end of a word, except after /w/ and in the sequences /ij/ and /uj/, and it is kept in honorific words. This is why কিতাপ is said 'kitap', not 'kitapo', and why spelling and speech diverge so visibly.",
    "The romanisation used across this platform is the one standard in Assamese lexicography: x for শ/ষ/স, w for ৱ, r for ৰ and y for য়. It is used consistently everywhere — never mixed with another scheme.",
    "Assamese has sounds Hindi and Bengali do not: the /x/ fricative and the /w/ approximant. Do not assume the letters you know from Hindi carry their Hindi values.",
    "Every consonant carries a built-in vowel. Read on its own, ক is 'ko', খ is 'kho', গ is 'go' — which is why primers teach the letters as ko, kho, go. That inherent vowel is dropped at the end of many words (see schwa deletion), so কিতাপ is 'kitap', not 'kitapo'.",
    "The chart gives each letter as it is read aloud; the vowel and consonant tables below give the sound alone and a hint for it. The two are the same letters seen two ways.",
    "Three marks sit on or after a letter rather than standing alone: ঁ (candrabindu, which nasalises the vowel — মা̃), ং (anusvara, an 'ng' sound) and ঃ (visarga, a breathy final 'h')."
  ]
};
