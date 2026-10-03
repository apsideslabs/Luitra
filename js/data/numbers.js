/* ============================================================
   Luitra — numbers and time
   Assamese numerals are Indo-Aryan: one to ten must be learnt,
   the teens and tens are largely irregular, and above a hundred
   the parts simply stack.
   ============================================================ */

window.ASM = window.ASM || {};

window.ASM.numbers = {
  intro:
    "Assamese numerals are short but not as regular as the Bodo ones next door: one to ten must be learnt, the teens and the tens are mostly their own words, and only from a hundred upwards does a simple stacking pattern take over. This page gives the ten digits, one to a hundred, the pattern above that, the ordinals, the days of the week, both calendars, and the words for times of day.",

  digits: [
    { n: "০", arabic: "0", bo: "শূন্য", rom: "xuinno" },
    { n: "১", arabic: "1", bo: "এক", rom: "ek" },
    { n: "২", arabic: "2", bo: "দুই", rom: "dui" },
    { n: "৩", arabic: "3", bo: "তিনি", rom: "tini" },
    { n: "৪", arabic: "4", bo: "চাৰি", rom: "sari" },
    { n: "৫", arabic: "5", bo: "পাঁচ", rom: "pas" },
    { n: "৬", arabic: "6", bo: "ছয়", rom: "soy" },
    { n: "৭", arabic: "7", bo: "সাত", rom: "xat" },
    { n: "৮", arabic: "8", bo: "আঠ", rom: "aath" },
    { n: "৯", arabic: "9", bo: "ন", rom: "no" }
  ],

  ones: [
    { n: "1", bo: "এক", rom: "ek" },
    { n: "2", bo: "দুই", rom: "dui" },
    { n: "3", bo: "তিনি", rom: "tini" },
    { n: "4", bo: "চাৰি", rom: "sari" },
    { n: "5", bo: "পাঁচ", rom: "pas" },
    { n: "6", bo: "ছয়", rom: "soy" },
    { n: "7", bo: "সাত", rom: "xat" },
    { n: "8", bo: "আঠ", rom: "aath" },
    { n: "9", bo: "ন", rom: "no" },
    { n: "10", bo: "দহ", rom: "doh" }
  ],

  teens: [
    { n: "11", bo: "এঘাৰ", rom: "eghar" },
    { n: "12", bo: "বাৰ", rom: "bar" },
    { n: "13", bo: "তেৰ", rom: "ter" },
    { n: "14", bo: "চৈধ্য", rom: "soiddho" },
    { n: "15", bo: "পোন্ধৰ", rom: "pondhor" },
    { n: "16", bo: "ষোল্ল", rom: "xollo" },
    { n: "17", bo: "সোতৰ", rom: "xotor" },
    { n: "18", bo: "ওঠৰ", rom: "othor" },
    { n: "19", bo: "ঊনৈশ", rom: "unoix" },
    { n: "20", bo: "বিশ", rom: "bix" }
  ],

  tens: [
    { n: "10", bo: "দহ", rom: "doh" },
    { n: "20", bo: "বিশ", rom: "bix" },
    { n: "30", bo: "ত্ৰিশ", rom: "trix" },
    { n: "40", bo: "চল্লিশ", rom: "sollix" },
    { n: "50", bo: "পঞ্চাশ", rom: "ponsax" },
    { n: "60", bo: "ষাঠি", rom: "xathi" },
    { n: "70", bo: "সত্তৰ", rom: "xottor" },
    { n: "80", bo: "আশী", rom: "axi" },
    { n: "90", bo: "নব্বৈ", rom: "nobboi" },
    { n: "100", bo: "এশ", rom: "ex" }
  ],

  hundred: {
    bo: "এশ",
    rom: "ex",
    note:
      "From a hundred upward the parts simply stack: ১০১ is এশ এক (ex ek), 'one hundred one'; ২৫০ is দুই এশ পঞ্চাশ (dui ex ponsax). For larger amounts Assamese uses the Indian system — হাজাৰ (hazar, thousand), লাখ (lakh, 100,000) and কোটি (koti, ten million)."
  },

  pattern: [
    { rule: "One to ten", detail: "Must be memorised — এক, দুই, তিনি, চাৰি, পাঁচ, ছয়, সাত, আঠ, ন, দহ." },
    { rule: "Teens and tens", detail: "Mostly their own words, not a formula: ১৫ is পোন্ধৰ (pondhor), ৩০ is ত্ৰিশ (trix). Learn them as vocabulary." },
    { rule: "Above a hundred", detail: "Stack the parts largest-first: এশ এক (ex ek) = 101, দুই এশ (dui ex) = 200." },
    { rule: "Large amounts", detail: "Use the Indian scale: হাজাৰ (hazar), লাখ (lakh), কোটি (koti)." }
  ],

  ordinals: [
    { n: "1st", bo: "প্ৰথম", rom: "prothom" },
    { n: "2nd", bo: "দ্বিতীয়", rom: "ditio" },
    { n: "3rd", bo: "তৃতীয়", rom: "tritio" },
    { n: "4th", bo: "চতুৰ্থ", rom: "soturtho" },
    { n: "5th", bo: "পঞ্চম", rom: "ponchom" },
    { n: "6th", bo: "ষষ্ঠ", rom: "xostho" },
    { n: "7th", bo: "সপ্তম", rom: "xoptom" },
    { n: "8th", bo: "অষ্টম", rom: "oxstom" },
    { n: "9th", bo: "নৱম", rom: "nobom" },
    { n: "10th", bo: "দশম", rom: "doxom" }
  ],

  time: [
    { en: "today", bo: "আজি", rom: "azi" },
    { en: "yesterday / tomorrow", bo: "কালি", rom: "kali" },
    { en: "day", bo: "দিন", rom: "din" },
    { en: "night", bo: "ৰাতি", rom: "rati" },
    { en: "morning", bo: "ৰাতিপুৱা", rom: "ratipua" },
    { en: "afternoon", bo: "আবেলি", rom: "abeli" },
    { en: "evening", bo: "সন্ধিয়া", rom: "xondhia" },
    { en: "now", bo: "এতিয়া", rom: "etia" },
    { en: "week", bo: "সপ্তাহ", rom: "xoptah" },
    { en: "month", bo: "মাহ", rom: "mah" },
    { en: "year", bo: "বছৰ", rom: "bosor" }
  ],

  days: [
    { en: "Monday", bo: "সোমবাৰ", rom: "xombar" },
    { en: "Tuesday", bo: "মঙ্গলবাৰ", rom: "mongolbar" },
    { en: "Wednesday", bo: "বুধবাৰ", rom: "budhbar" },
    { en: "Thursday", bo: "বৃহস্পতিবাৰ", rom: "brihospotibar" },
    { en: "Friday", bo: "শুক্ৰবাৰ", rom: "xukrobar" },
    { en: "Saturday", bo: "শনিবাৰ", rom: "xonibar" },
    { en: "Sunday", bo: "দেওবাৰ", rom: "deübar" }
  ],

  months: [
    { en: "mid-April – mid-May", bo: "ব’হাগ", rom: "böhag" },
    { en: "mid-May – mid-June", bo: "জেঠ", rom: "zeth" },
    { en: "mid-June – mid-July", bo: "আহাৰ", rom: "ahar" },
    { en: "mid-July – mid-August", bo: "শাওণ", rom: "xaün" },
    { en: "mid-August – mid-September", bo: "ভাদ", rom: "bhado" },
    { en: "mid-September – mid-October", bo: "আহিন", rom: "ahin" },
    { en: "mid-October – mid-November", bo: "কাতি", rom: "kati" },
    { en: "mid-November – mid-December", bo: "আঘোণ", rom: "aghün" },
    { en: "mid-December – mid-January", bo: "পুহ", rom: "puh" },
    { en: "mid-January – mid-February", bo: "মাঘ", rom: "magh" },
    { en: "mid-February – mid-March", bo: "ফাগুন", rom: "fagun" },
    { en: "mid-March – mid-April", bo: "চ’ত", rom: "söt" }
  ],

  gregorianMonths: [
    { en: "January", bo: "জানুৱাৰী", rom: "zanuari" },
    { en: "February", bo: "ফেব্ৰুৱাৰী", rom: "phebruari" },
    { en: "March", bo: "মাৰ্চ", rom: "mars" },
    { en: "April", bo: "এপ্ৰিল", rom: "epril" },
    { en: "May", bo: "মে’", rom: "me" },
    { en: "June", bo: "জুন", rom: "zun" },
    { en: "July", bo: "জুলাই", rom: "zulai" },
    { en: "August", bo: "আগষ্ট", rom: "agost" },
    { en: "September", bo: "ছেপ্টেম্বৰ", rom: "septembor" },
    { en: "October", bo: "অক্টোবৰ", rom: "oktübor" },
    { en: "November", bo: "নৱেম্বৰ", rom: "nowembor" },
    { en: "December", bo: "ডিচেম্বৰ", rom: "disembor" }
  ],

  notes: [
    "Assamese uses the Indian numbering system, so লাখ (lakh) and কোটি (koti) appear where English uses 'hundred thousand' and 'ten million'.",
    "Clock time is usually told with বাজে (baze): তিনি বাজে (tini baze) = 'three o'clock'. Half past is সাৰে (sare): সাৰে তিনি (sare tini) = 'half past two'.",
    "The ten digits are ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ — the same forms Bengali uses, since the two languages share the script. Numbers are written with them, not with 0–9.",
    "Assamese keeps two calendars side by side: the Gregorian months (জানুৱাৰী, ফেব্ৰুৱাৰী …) and the Assamese solar year, which begins in mid-April with Bohag Bihu and is named after its first month, ব’হাগ.",
    "Assamese does not require a numeral classifier for ordinary counting — the numeral simply comes before the noun."
  ]
};
