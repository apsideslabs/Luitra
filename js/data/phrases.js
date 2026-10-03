/* ============================================================
   Luitra — phrasebook
   Common sentences grouped by the setting they are used in.
   Every Assamese string carries a romanisation.
   ============================================================ */

window.ASM = window.ASM || {};

window.ASM.phrases = [
  /* --- Greetings & courtesy --- */
  { en: "Hello / Greetings", bo: "নমস্কাৰ", rom: "nomoskar", cat: "Greetings & courtesy" },
  { en: "Good morning", bo: "শুভ ৰাতিপুৱা", rom: "xubho ratipua", cat: "Greetings & courtesy" },
  { en: "Good evening", bo: "শুভ সন্ধিয়া", rom: "xubho xondhia", cat: "Greetings & courtesy" },
  { en: "Good night", bo: "শুভ ৰাতি", rom: "xubho rati", cat: "Greetings & courtesy" },
  { en: "How are you? (familiar)", bo: "তুমি ভালে আছা নে?", rom: "tumi bhale asa ne?", cat: "Greetings & courtesy" },
  { en: "How are you? (honorific)", bo: "আপুনি ভালে আছে নে?", rom: "apuni bhale ase ne?", cat: "Greetings & courtesy" },
  { en: "I am fine, thank you.", bo: "মই ভালে আছোঁ, ধন্যবাদ।", rom: "moi bhale asü, dhonyobad", cat: "Greetings & courtesy" },
  { en: "Thank you", bo: "ধন্যবাদ", rom: "dhonyobad", cat: "Greetings & courtesy" },
  { en: "Many thanks", bo: "বহুত ধন্যবাদ", rom: "bohut dhonyobad", cat: "Greetings & courtesy" },
  { en: "You are welcome", bo: "স্বাগতম", rom: "xagotom", cat: "Greetings & courtesy" },
  { en: "Excuse me / sorry", bo: "ক্ষমা কৰিব", rom: "khoma korib", cat: "Greetings & courtesy" },
  { en: "Please", bo: "অনুগ্ৰহ কৰি", rom: "onugroh kori", cat: "Greetings & courtesy" },
  { en: "Goodbye", bo: "বিদায়", rom: "biday", cat: "Greetings & courtesy" },
  { en: "See you again", bo: "আকৌ লগ পাম", rom: "akou log pam", cat: "Greetings & courtesy" },
  { en: "Nice to meet you", bo: "আপোনাক লগ পাই ভাল লাগিল", rom: "apunak log pai bhal lagil", cat: "Greetings & courtesy" },

  /* --- Introductions --- */
  { en: "What is your name? (familiar)", bo: "তোমাৰ নাম কি?", rom: "tomar nam ki?", cat: "Introductions" },
  { en: "What is your name? (honorific)", bo: "আপোনাৰ নাম কি?", rom: "apunar nam ki?", cat: "Introductions" },
  { en: "My name is …", bo: "মোৰ নাম …", rom: "mor nam …", cat: "Introductions" },
  { en: "Where are you from?", bo: "তুমি ক’ৰ পৰা আহিছা?", rom: "tumi kór pora ahisa?", cat: "Introductions" },
  { en: "I am from …", bo: "মই … ৰ পৰা আহিছোঁ", rom: "moi … r pora ahisü", cat: "Introductions" },
  { en: "I am a student", bo: "মই ছাত্ৰ", rom: "moi xatro", cat: "Introductions" },
  { en: "How old are you?", bo: "তোমাৰ বয়স কিমান?", rom: "tomar boyox kiman", cat: "Introductions" },
  { en: "I am twenty years old", bo: "মোৰ বয়স বিশ বছৰ", rom: "mor boyox bix bosor", cat: "Introductions" },
  { en: "Do you speak English?", bo: "তুমি ইংৰাজী ক’ব পাৰা নে?", rom: "tumi ingrazi köb para ne?", cat: "Introductions" },
  { en: "I am learning Assamese", bo: "মই অসমীয়া শিকি আছোঁ", rom: "moi oxomiya xiki asü", cat: "Introductions" },
  { en: "I do not understand", bo: "মই বুজি নাপাওঁ", rom: "moi buzi napaü", cat: "Introductions" },
  { en: "Please speak slowly", bo: "লাহে লাহে ক’ব", rom: "lahe lahe köb", cat: "Introductions" },

  /* --- Small talk --- */
  { en: "How is everything?", bo: "সকলো ভালে আছে নে?", rom: "xokolü bhale ase ne?", cat: "Small talk" },
  { en: "It is going well", bo: "ভালে চলি আছে", rom: "bhale soli ase", cat: "Small talk" },
  { en: "What happened?", bo: "কি হ’ল?", rom: "ki hól", cat: "Small talk" },
  { en: "Nothing much", bo: "একো নহয়", rom: "ekü nohoi", cat: "Small talk" },
  { en: "I am happy", bo: "মই সুখী", rom: "moi xukhi", cat: "Small talk" },
  { en: "I am tired", bo: "মই ভাগৰি পৰিছোঁ", rom: "moi bhagori porisü", cat: "Small talk" },
  { en: "Really?", bo: "সঁচাকৈ?", rom: "sõsakoi", cat: "Small talk" },
  { en: "Of course", bo: "নিশ্চয়", rom: "nixsoy", cat: "Small talk" },

  /* --- Getting around --- */
  { en: "Where is the market?", bo: "বজাৰ ক’ত?", rom: "bozar kót", cat: "Getting around" },
  { en: "Where is the station?", bo: "ৰে’ল ষ্টেচন ক’ত?", rom: "rel stesion kót", cat: "Getting around" },
  { en: "How far is it?", bo: "কিমান দূৰ?", rom: "kiman dur", cat: "Getting around" },
  { en: "Go straight", bo: "পোনে পোনে যাওক", rom: "püne püne zaok", cat: "Getting around" },
  { en: "Turn left", bo: "বাওঁফালে ঘূৰক", rom: "baüphale ghurok", cat: "Getting around" },
  { en: "Turn right", bo: "সোঁফালে ঘূৰক", rom: "xüphale ghurok", cat: "Getting around" },
  { en: "Stop here", bo: "ইয়াতে ৰ’ব", rom: "iate rób", cat: "Getting around" },
  { en: "How do I get to …?", bo: "… লৈ কেনেকৈ যাম?", rom: "… loi kenekoi zam?", cat: "Getting around" },
  { en: "Is it near?", bo: "ওচৰত নে?", rom: "üsorot ne?", cat: "Getting around" },
  { en: "I am lost", bo: "মই বাট হেৰুৱালোঁ", rom: "moi bat herualü", cat: "Getting around" },

  /* --- At the market --- */
  { en: "How much is this?", bo: "এইটো কিমান?", rom: "eitü kiman", cat: "At the market" },
  { en: "It is too expensive", bo: "বৰ বেছি দাম", rom: "bor besi dam", cat: "At the market" },
  { en: "Make it a little less", bo: "অলপ কম কৰক", rom: "olop kom korok", cat: "At the market" },
  { en: "I will take it", bo: "মই ল’ম", rom: "moi lóm", cat: "At the market" },
  { en: "I do not want it", bo: "মই নিবিচাৰোঁ", rom: "moi nibisarü", cat: "At the market" },
  { en: "Do you have …?", bo: "… আছে নে?", rom: "… ase ne?", cat: "At the market" },
  { en: "Give me two kilos", bo: "দুই কিল’ দিয়ক", rom: "dui kiló diok", cat: "At the market" },

  /* --- Food & eating --- */
  { en: "I am hungry", bo: "মোৰ ভোক লাগিছে", rom: "mor bhük lagise", cat: "Food & eating" },
  { en: "I am thirsty", bo: "মোৰ পিয়াহ লাগিছে", rom: "mor piah lagise", cat: "Food & eating" },
  { en: "The food is delicious", bo: "খাদ্য বৰ সোৱাদ", rom: "khaddo bor xüad", cat: "Food & eating" },
  { en: "Please give me water", bo: "পানী দিয়ক", rom: "pani diok", cat: "Food & eating" },
  { en: "I have eaten", bo: "মই খাই ল’লোঁ", rom: "moi khai lólü", cat: "Food & eating" },
  { en: "A little more rice, please", bo: "অলপ ভাত দিয়ক", rom: "olop bhat diok", cat: "Food & eating" },
  { en: "I do not eat meat", bo: "মই মাংস নাখাওঁ", rom: "moi mangxo nakhaü", cat: "Food & eating" },

  /* --- Asking for help --- */
  { en: "Help me, please", bo: "সহায় কৰক", rom: "xohay korok", cat: "Asking for help" },
  { en: "Call a doctor", bo: "ডাক্তৰ মাতক", rom: "daktor matok", cat: "Asking for help" },
  { en: "I need help", bo: "মোৰ সহায় লাগে", rom: "mor xohay lage", cat: "Asking for help" },
  { en: "Where is the hospital?", bo: "চিকিৎসালয় ক’ত?", rom: "sikitsaloy kót", cat: "Asking for help" },
  { en: "Call the police", bo: "আৰক্ষীক মাতক", rom: "arokkhik matok", cat: "Asking for help" },

  /* --- Health --- */
  { en: "I am not well", bo: "মোৰ ভাল নাই", rom: "mor bhal nai", cat: "Health" },
  { en: "I have a fever", bo: "মোৰ জ্বৰ হৈছে", rom: "mor zor hoise", cat: "Health" },
  { en: "My head hurts", bo: "মোৰ মূৰ বিষাইছে", rom: "mor mur bixaise", cat: "Health" },
  { en: "I need medicine", bo: "মোৰ ঔষধ লাগে", rom: "mor oxodh lage", cat: "Health" },

  /* --- Time & weather --- */
  { en: "What time is it?", bo: "কিমান বাজিছে?", rom: "kiman bazise", cat: "Time & weather" },
  { en: "It is raining", bo: "বৰষুণ দিছে", rom: "boroxun dise", cat: "Time & weather" },
  { en: "It is very hot today", bo: "আজি বৰ গৰম", rom: "azi bor gorom", cat: "Time & weather" },
  { en: "See you tomorrow", bo: "কালি লগ পাম", rom: "kali log pam", cat: "Time & weather" },

  /* --- Classroom --- */
  { en: "Open your book", bo: "কিতাপ খোলক", rom: "kitap khülok", cat: "Classroom" },
  { en: "Listen carefully", bo: "মন কৰি শুনক", rom: "mon kori xunok", cat: "Classroom" },
  { en: "Write it down", bo: "লিখি ল’ব", rom: "likhi lób", cat: "Classroom" },
  { en: "I have a question", bo: "মোৰ এটা প্ৰশ্ন আছে", rom: "mor eta prosno ase", cat: "Classroom" },
  { en: "Please repeat", bo: "আকৌ ক’ব", rom: "akou köb", cat: "Classroom" },
  { en: "What does this mean?", bo: "ইয়াৰ অৰ্থ কি?", rom: "iar ortho ki", cat: "Classroom" },

  /* --- Family & home --- */
  { en: "I have two brothers", bo: "মোৰ দুইজন ভাই আছে", rom: "mor duizon bhai ase", cat: "Family & home" },
  { en: "My mother is at home", bo: "মা ঘৰত আছে", rom: "ma ghorot ase", cat: "Family & home" },
  { en: "Where do you live?", bo: "তুমি ক’ত থাকে?", rom: "tumi kót thake?", cat: "Family & home" },
  { en: "I live in Guwahati", bo: "মই গুৱাহাটীত থাকোঁ", rom: "moi guwahatit thakü", cat: "Family & home" },
  { en: "Come to my house", bo: "মোৰ ঘৰলৈ আহক", rom: "mor ghoroloi ahok", cat: "Family & home" },

  /* --- Numbers & money --- */
  { en: "How many do you want?", bo: "কিমান লাগে?", rom: "kiman lage", cat: "Numbers & money" },
  { en: "I want three", bo: "তিনিটা লাগে", rom: "tinito lage", cat: "Numbers & money" },
  { en: "One hundred rupees", bo: "এশ টকা", rom: "ex toka", cat: "Numbers & money" },
  { en: "This is cheap", bo: "এইটো সস্তা", rom: "eitü xosta", cat: "Numbers & money" },
  { en: "Change, please", bo: "ভঙা টকা দিয়ক", rom: "bhonga toka diok", cat: "Numbers & money" },

  /* --- On the phone --- */
  { en: "Hello? (on the phone)", bo: "হেল’?", rom: "hel’", cat: "On the phone" },
  { en: "Who is calling?", bo: "কোনে মাতিছে?", rom: "küne matise", cat: "On the phone" },
  { en: "May I speak to ...?", bo: "...ৰ লগত কথা পাতিব পাৰিম নে?", rom: "...or logot kotha patibo parim ne", cat: "On the phone" },
  { en: "He is not at home", bo: "তেওঁ ঘৰত নাই", rom: "teü ghorot nai", cat: "On the phone" },
  { en: "When will he come back?", bo: "কেতিয়া ঘূৰি আহিব?", rom: "ketia ghuri ahib", cat: "On the phone" },
  { en: "I will call later", bo: "মই পাছত মাতিম", rom: "moi pasot matim", cat: "On the phone" },
  { en: "Give me the number", bo: "নম্বৰটো দিয়ক", rom: "nomborotü diok", cat: "On the phone" },
  { en: "Sorry, wrong number", bo: "ক্ষমা কৰিব, ভুল নম্বৰ", rom: "khoma korib, bhul nombor", cat: "On the phone" },

  /* --- At the bank or post office --- */
  { en: "Where is the bank?", bo: "বেংক ক’ত?", rom: "beng k’t", cat: "At the bank or post office" },
  { en: "I want to open an account", bo: "মই এটা একাউণ্ট খুলিব বিচাৰোঁ", rom: "moi eta ekaunt khulibo bisarü", cat: "At the bank or post office" },
  { en: "I want to deposit money", bo: "মই টকা জমা দিব বিচাৰোঁ", rom: "moi toka zoma dib bisarü", cat: "At the bank or post office" },
  { en: "I want to withdraw money", bo: "মই টকা উলিয়াব বিচাৰোঁ", rom: "moi toka uliab bisarü", cat: "At the bank or post office" },
  { en: "Where do I sign?", bo: "ক’ত চহী কৰিব?", rom: "k’t sohi korib", cat: "At the bank or post office" },
  { en: "I want to send a letter", bo: "মই এখন চিঠি পঠিয়াব বিচাৰোঁ", rom: "moi ekhon sithi pothiab bisarü", cat: "At the bank or post office" },
  { en: "How much is the stamp?", bo: "ষ্টাম্প কিমান?", rom: "stamp kiman", cat: "At the bank or post office" },

  /* --- Weather & seasons --- */
  { en: "It is raining", bo: "বৰষুণ দি আছে", rom: "boroxun di ase", cat: "Weather & seasons" },
  { en: "It is very sunny", bo: "বৰ ৰদ", rom: "bor rod", cat: "Weather & seasons" },
  { en: "It is cold", bo: "ঠাণ্ডা লাগিছে", rom: "thanda lagise", cat: "Weather & seasons" },
  { en: "It will rain today", bo: "আজি বৰষুণ দিব", rom: "azi boroxun dib", cat: "Weather & seasons" },
  { en: "The wind is strong", bo: "বতাহ বৰ জোৰে", rom: "batah bor zore", cat: "Weather & seasons" },
  { en: "Which season is it now?", bo: "এতিয়া কোন ঋতু?", rom: "etia kün ritu", cat: "Weather & seasons" },
  { en: "It is the rainy season", bo: "এতিয়া বৰষুণৰ দিন", rom: "etia boroxunor din", cat: "Weather & seasons" },
  { en: "Take an umbrella", bo: "ছাতি লৈ যাওক", rom: "sati loi zaok", cat: "Weather & seasons" },

  /* --- Festivals & Bihu --- */
  { en: "Happy Bihu!", bo: "শুভ বিহু!", rom: "xubho bihu", cat: "Festivals & Bihu" },
  { en: "Bohag Bihu greetings", bo: "ব’হাগ বিহুৰ শুভেচ্ছা", rom: "böhag bihur xubhesa", cat: "Festivals & Bihu" },
  { en: "Happy new year", bo: "শুভ নৱবৰ্ষ", rom: "xubho nowoborsho", cat: "Festivals & Bihu" },
  { en: "Have you eaten the Bihu feast?", bo: "বিহুৰ ভোজ খালা নে?", rom: "bihur bhoj khala ne", cat: "Festivals & Bihu" },
  { en: "We are dancing Bihu", bo: "আমি বিহু নাচিছোঁ", rom: "ami bihu nasisü", cat: "Festivals & Bihu" },
  { en: "Come to our house for Bihu", bo: "বিহুত আমাৰ ঘৰলৈ আহিব", rom: "bihut amar ghoroloi ahib", cat: "Festivals & Bihu" },

  /* --- Shopping & clothes --- */
  { en: "I want a shirt", bo: "মোক এটা চোলা লাগে", rom: "mok eta süla lage", cat: "Shopping & clothes" },
  { en: "What size?", bo: "কোন ছাইজ?", rom: "kün saiz", cat: "Shopping & clothes" },
  { en: "Do you have a bigger one?", bo: "ডাঙৰটো আছে নে?", rom: "dangortü ase ne", cat: "Shopping & clothes" },
  { en: "This is too small", bo: "এইটো বৰ সৰু", rom: "eitü bor xoru", cat: "Shopping & clothes" },
  { en: "May I try it on?", bo: "পিন্ধি চাব পাৰিম নে?", rom: "pindhi sabo parim ne", cat: "Shopping & clothes" },
  { en: "It is too expensive", bo: "বৰ বেছি দাম", rom: "bor besi dam", cat: "Shopping & clothes" },
  { en: "Make it a little less", bo: "অলপ কম কৰক", rom: "olop kom korok", cat: "Shopping & clothes" },
  { en: "Show me another colour", bo: "আন ৰং দেখুওৱক", rom: "an rong dekhüok", cat: "Shopping & clothes" },

  /* --- At a restaurant --- */
  { en: "The menu, please", bo: "মেনু দিয়ক", rom: "menu diok", cat: "At a restaurant" },
  { en: "What do you have?", bo: "আপোনাৰ ওচৰত কি আছে?", rom: "apunar üsorot ki ase", cat: "At a restaurant" },
  { en: "I am vegetarian", bo: "মই নিৰামিষ খাওঁ", rom: "moi niramix khaü", cat: "At a restaurant" },
  { en: "Less spicy, please", bo: "জলকীয়া কম দিয়ক", rom: "zolokia kom diok", cat: "At a restaurant" },
  { en: "The food is very good", bo: "খোৱা বৰ ভাল", rom: "khüa bor bhal", cat: "At a restaurant" },
  { en: "Bring the bill", bo: "বিল আনক", rom: "bil anok", cat: "At a restaurant" },
  { en: "A glass of water, please", bo: "এগিলাচ পানী দিয়ক", rom: "egilas pani diok", cat: "At a restaurant" },

  /* --- Health & pharmacy --- */
  { en: "I have a fever", bo: "মোৰ জ্বৰ আছে", rom: "mor zor ase", cat: "Health & pharmacy" },
  { en: "My head hurts", bo: "মোৰ মূৰ বিষাইছে", rom: "mor mur bixaise", cat: "Health & pharmacy" },
  { en: "I need a doctor", bo: "মোক ডাক্তৰ লাগে", rom: "mok daktor lage", cat: "Health & pharmacy" },
  { en: "Where is the hospital?", bo: "চিকিৎসালয় ক’ত?", rom: "sikitsaloy k’t", cat: "Health & pharmacy" },
  { en: "I have an allergy", bo: "মোৰ এলাৰ্জি আছে", rom: "mor elarzi ase", cat: "Health & pharmacy" },
  { en: "Before or after food?", bo: "খোৱাৰ আগত নে পাছত?", rom: "khüar agot ne pasot", cat: "Health & pharmacy" },

  /* --- Travel & tickets --- */
  { en: "Where is the bus stand?", bo: "বাছ আড্ডা ক’ত?", rom: "bas adda k’t", cat: "Travel & tickets" },
  { en: "One ticket, please", bo: "এটা টিকিট দিয়ক", rom: "eta tikit diok", cat: "Travel & tickets" },
  { en: "What time does it leave?", bo: "কিমান বজাত ওলাব?", rom: "kiman bazot ülab", cat: "Travel & tickets" },
  { en: "Is this seat free?", bo: "এই চিটখন ৰিক্ত নে?", rom: "ei sitkhon rikto ne", cat: "Travel & tickets" },
  { en: "How long does it take?", bo: "কিমান সময় লাগে?", rom: "kiman xomoy lage", cat: "Travel & tickets" },
  { en: "Stop here, please", bo: "ইয়াত ৰাখক", rom: "iat rakhok", cat: "Travel & tickets" },
  { en: "I am going to Guwahati", bo: "মই গুৱাহাটীলৈ যাওঁ", rom: "moi Guwahatiloi zaü", cat: "Travel & tickets" },
  { en: "Is it far?", bo: "দূৰ নে?", rom: "dur ne", cat: "Travel & tickets" }
];
