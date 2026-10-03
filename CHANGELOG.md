# Changelog

All notable changes to **Luitra — Assamese Learning Platform**.
This project follows [Semantic Versioning](https://semver.org/).

## [3.3.1] — 2026-10-03

### Changed

- **The install banner is defined once, in `js/ui/chrome.js`**, beside the header and footer, rather than repeated as static markup in every page. Editing it is a single-file change.

## [3.3.0] — 2026-10-03

### Added

- **An install banner above the footer**, on every page: the app mark, “Install Luitra as an app”, a line of copy, an **Install app** button and a dismiss control.

  It appears only when installing is **actually possible** — the browser has offered the install prompt, or it is iOS Safari, which has no prompt and gets the manual “Add to Home Screen” route. It retires itself **automatically once the app is installed**, and also when the reader dismisses it; either way the choice is remembered, so it stays gone across reloads. It is never shown inside the installed app.

## [3.2.0] — 2026-10-03

### Added

- **A launch splash for the installed app** — the Luitra mark on its soft white rounded card, a slow ring turning around it, the name with “Assamese Learning Platform” beneath, and an indeterminate progress bar.

  It is **static markup on every page**, so it paints on the first frame rather than being injected by script. A small gate in `js/core/splash.js`, loaded in `<head>` before the body paints, shows it only when the page is running as an installed app and only on the first page of a session, so moving between pages never re-shows it. It never appears on the plain website, and `<noscript>` hides it without JavaScript.

## [3.1.0] — 2026-10-03

### Changed

- **New app icon and header brand.** The supplied square mark is now the installable icon, drawn on a soft white curved box, and the supplied wordmark is the header brand.

  The icon file arrived with a **traced transparency checkerboard** baked into it — two paths holding 2,109 + 1,686 tiny squares across the full canvas — which was removed before building the icons. The wordmark carried a baked-in white card, likewise removed, so the brand sits on the page background rather than in a box.

## [3.0.1] — 2026-10-02

### Fixed

- The home hero read “Luitra (অসমীয়া)” and “অসমীয়া · Assamese Language Platform”; both now read লুইত্ৰা, the platform's own name. **অসমীয়া is untouched throughout — it is the language, not the brand.**

## [3.0.0] — 2026-10-02

### Changed

- **Renamed to Luitra (লুইত্ৰা).** The platform's own name is now Luitra, in English and in Assamese. Every canonical URL, social-preview image, repository link, badge and update endpoint was repointed, the storage prefix moved from `asomiya.` to `luitra.`, and the service-worker cache from `asomiya-` to `luitra-`.

  Two things were deliberately left alone. **অসমীয়া** is the language and appears throughout as itself. And the romanisation **Asomiya** — as in “Assamese (অসমীয়া, *Asomiya*)” — is a name *of the language*, so it stays wherever it means the language rather than the platform.

## [2.0.4] — 2026-10-02

### Changed

- The repository was renamed to `Luit`. (Superseded by the Luitra rename in 3.0.0.)

## [2.0.3] — 2026-10-02

### Changed

- **Re-homed to the Apsides Labs account.** The repository now lives at `apsideslabs/Luitra`, and every canonical URL, social-preview image, repository link, badge and update endpoint has been repointed accordingly — 89 references across 35 files. The only remaining references to the previous account are the two attribution lines crediting the Bodo reference platform, which is where that project actually lives.

## [2.0.2] — 2026-10-02

### Fixed

- The home hero's kicker read “SPOKEN & WRITTEN ASSAMIYA”; it now reads “ASSAMESE”.

## [2.0.1] — 2026-10-02

### Fixed

- The `og:image` on all 19 pages still pointed at the reference repository's cover art. Every page now serves its own `assets/og-cover.svg`.

## [2.0.0] — 2026-10-02

**A full redesign and a gamified learning studio, matched to the Bodo platform.**

The reference repository (`aphelionvoid/raokhanthi`) was rebuilt as a crafted, gamified language
studio. Luitra now matches it — the same design system, the same shell, the same gamification —
with all of Luitra's own content kept and restyled.

### Added

- **A new design system.** Warm “studio stone” canvas with electric indigo, emerald teal and sunburst-gold XP accents; Outfit + DM Sans + JetBrains Mono typography; and a tactile “bottom lip” elevation language (an outline plus a soft ambient shadow) on every card and button. `components.css` grows from ~740 to ~2,100 lines; `layout.css` from 314 to 768.
- **Gamification.** XP (50 per lesson, plus quiz bonuses), **15 mastery ranks** from *Initiate* to *Assam Laureate*, **18 trophies**, best-streak tracking, starred dictionary words, an editable learner profile, and export/import of the whole study record as JSON. A live XP pill sits in the header on every page.
- **A new page: Progress & study record** (`progress.html`) — the XP meter, rank ladder, tier breakdown, trophy grid and saved words.
- **A new home page** — a hero with a language specimen, corpus statistics, a platform directory, a language-profile band, and a tap-to-copy phrase grid.
- **A Quiz Arena** — multiple-choice and flashcard rounds with a HUD, a streak counter and XP.
- **An interactive character inspector** on the Script page, and a star / save control on every dictionary row.
- **New shell pieces on every page** — a top update banner, and an “App & updates” row inside the display panel with a real **Install app** button.
- Dev tooling brought across: `package.json`, `server.js`, `metadata.json`, `tools/build-pwa.mjs`.

### Changed

- **The shell was re-based on the Bodo reference** — `js/core/store.js`, `update.js`, `install.js`, `js/ui/*`, `js/render/*` and `js/app.js` now follow its architecture. Namespaces are `window.ASM` (content) and `window.AX` (interface).
- **All of Luitra's own content is kept and restyled**: the Reading & writing page, Idioms & proverbs, the full kinship set, the digits, ordinals, days and months, and the 19 grammar sections.
- Rank titles are **English**; the Bodo-specific rank, trophy and profile copy was rewritten for Assamese. References to Bodo as a *neighbouring language* — in Culture, Grammar, Lessons and Numbers — are accurate and were kept.
- The Assamese read-aloud **বৰ্ণমালা chart** is now part of the new Script page.

### Fixed

- The Bodo-derived shell read `meta.nameBo`; Luitra's key is `meta.nameAs`. Both are now present, so no `undefined` reaches the header or footer.
- `--font-bo` now resolves to the Assamese font stack, with `--font-as` as an alias.

### Notes

- Still **not verified by a native speaker**, and still no build step, no runtime dependency and no CDN at runtime. The reading passages remain composed practice material.

## [1.7.0] — 2026-10-01

One repository, two feels: the installed app now behaves like an app, and the website stays a website.

### Added

- **App mode.** The browser tells the page whether it is running as an installed app, and the shell adapts. Installed, the page shows a **compact app bar** that honours the device's safe-area inset (notch and status bar), an **App** badge beside the version, *“Installed app · works offline”* in place of the website subtitle, and a **one-time note** confirming that this copy lives on the device. The web footer's two link columns are dropped — the app navigates from its own nav — and the page stops the pull-to-refresh bounce and the tap highlight, so it moves like a native shell.
- **An install offer on the website.** The plain website now offers to install the app, with a button on Chromium browsers (via `beforeinstallprompt`) and written instructions elsewhere. The installed app never shows it.
- Detection reuses the module that already knew about installed mode (`js/ui/update.js`), which stamps `data-display="standalone" | "browser"` on `<html>` before the header is built. **No new files, no new script tags, no build step** — the styling is one guarded block in `css/components.css`.
- The content is untouched: every page, every word and the whole offline behaviour are identical in both modes.

### Fixed

- The header and footer have been rendering **“undefined · Assamese Learning Platform”** and **“undefined · MIT licence”** on every page since the first release. `js/ui/chrome.js` read `meta.nameBo`, but the key in `js/data/meta.js` is `meta.nameAs`. Both now read অসমীয়া.

## [1.6.0] — 2026-10-01

A new **Reading & writing** page, and the seven grammar topics the syllabi expect that the reference was missing.

### Added

- **A new page: Reading & writing (`reading.html`).** Reading comprehension was the one skill the platform had no home for, and every Assamese syllabus carries it (বোধ পৰীক্ষণ). **8 graded passages** — two-line beginners' texts up to short essays on Bihu, the tea gardens, the rivers and the language itself — each with a paragraph-by-paragraph romanisation, an English rendering, and **comprehension questions whose answers sit behind a toggle**. The page closes with a **writing guide**: how an essay (ৰচনা), paragraph (অনুচ্ছেদ), letter (চিঠি), report (প্ৰতিবেদন) and story (গল্প) are built, with model openers.
- **Seven new grammar sections**, taking the reference from 12 to 19: **gender (লিঙ্গ)**, **kārak (কাৰক)** — the noun–verb relations behind the case endings, **compounds (সমাস)** with all six types, **suffixes (প্ৰত্যয়)** — কৃৎ and তদ্ধিত, **sandhi (সন্ধি)**, **voice (বাচ্য)** and **reported speech (উক্তি)**.
- The Reading page appears in the navigation, the home launchpad and the home statistics, and the new passages are precached for offline use.

### Notes

- The reading passages were **written for this platform as practice material**. They are not quoted from any author and are not verified by a native speaker; every form is kept to constructions the rest of the platform already documents.
- The 19 grammar sections still describe **Standard (Eastern) Assamese**.

## [1.5.0] — 2026-10-01

More conversations, the full kinship set, and a fuller Numbers & time.

### Added

- **Nine more dialogues, and the existing eight lengthened.** The Conversations page now carries **17 dialogues** (131 lines, up from 8 and 42), spanning the bus stand, a clothes shop, a restaurant, a rickshaw, the railway station, a pharmacy, a phone call, a family conversation and more — each with the Assamese, a romanisation, English, and a note on how the exchange really sounds.
- **The extended Assamese kinship set.** Assamese names about 48 relations where English names 21, and a father's younger brother (খুৰা) is not a father's elder brother (জেঠা). 39 new family words join the Dictionary under *People & family* — grandparents, grandchildren, both sides of the aunt and uncle set, nephews and nieces, and the in-laws — plus the formal variants **পুত্ৰ** (putra, “son”), **কন্যা** (konya, “daughter”), **মাতৃ** (matri), **পিতা** (pita), **ভাতৃ** (bhatri) and **ভগ্নী** (bhogni), which now sit beside the everyday forms.
- **Numbers & time, expanded.** The ten Assamese **digits** (০–৯), the **ordinals** (প্ৰথম, দ্বিতীয় …), the **days of the week**, the twelve **Assamese months** (ব’হাগ … চ’ত) with their Gregorian spans, and the twelve Gregorian months in Assamese.
- **58 more phrases**, taking the phrasebook from 88 to **146** across **20 settings** — new sets for the phone, the bank and post office, weather and seasons, festivals and Bihu, clothes shopping, restaurants, the pharmacy, and travel and tickets.

### Changed

- Six kinship entries that had been filed under *One-word expressions* now sit in *People & family*, where they belong — the Dictionary has no duplicate headwords.

### Notes

- The new material is compiled from published Assamese grammars, kinship studies and vocabulary lists. It is **not verified by a native speaker**, and register (everyday vs formal) is noted where it matters.

## [1.4.1] — 2026-10-01

- The Script page's own subtitle now mentions the বৰ্ণমালা chart, so the page's introduction matches what is on it.

## [1.4.0] — 2026-10-01

An alphabet chart for learning to read.

### Added

- **A বৰ্ণমালা chart on the Script page** — every letter shown as it is read aloud, in the traditional order and grouped by where the sound is made (velar, palatal, retroflex, dental, labial, semivowels, sibilants). Vowels read as অ o, আ aa, ই i, ঈ ee, উ u, ঊ oo, ঋ ri, এ e, ঐ oi, ও o, ঔ ou; consonants carry the inherent vowel, so ক is **ko**, খ is **kho**, গ is **go**, and so on. The existing vowel and consonant tables (the sound alone, with a pronunciation hint) remain below it.
- A note explaining that the inherent vowel is why primers teach the letters as ko, kho, go, and that it is dropped at the end of many words.
- A note on the three dependent marks — ঁ (candrabindu), ং (anusvara) and ঃ (visarga).

### Notes

- The chart follows the traditional Assamese order and uses the same romanisation as the rest of the platform.

## [1.3.0] — 2026-10-01

Grammar and expression topics.

### Added

- **Four new grammar sections**, taking the Grammar reference from 8 to 12 topics:
  - **Words (শব্দ)** — how words are built (কৃদন্ত, তদ্ধিতান্ত and সমাসনিষ্পন্ন words; উপসৰ্গ and প্ৰত্যয়) and the six traditional groups by origin.
  - **The sentence (বাক্য)** — what a sentence is, the five kinds (assertive, interrogative, imperative, optative, exclamatory) and the structural kinds (simple, complex, compound).
  - **Subject and predicate (উদ্দেশ্য আৰু বিধেয়)** — splitting a sentence into what it is about and what it says.
  - **Parts of speech (পদ)** — the five classes Assamese recognises, and how they map onto the English eight.
- **A new page, Idioms & proverbs** (`idioms.html`) — 22 idioms (জতুৱা ঠাঁচ) and 16 proverbs (ফকৰা-যোজনা), each with a romanisation, its literal image and its real meaning. Added to the sidebar under Reference and to the offline cache.
- **A new dictionary category, One-word expressions (এটা শব্দত প্ৰকাশ কৰা)** — 56 entries that reduce a phrase to a single Assamese word (for example *one who has no home* → অঘৰী). The dictionary now holds **400 entries across 21 categories**.

### Notes

- The new material was compiled from published Assamese grammar pages and collections of idioms, proverbs and one-word substitutions, listed on the Resources and About pages. It is **not verified by a native speaker**; regional wording varies, and the idioms page says so in place.

## [1.2.0] — 2026-10-01

Installable as an app, with an in-app update notice.

### Added

- **Installable PWA.** Luitra can now be installed to a device home screen. The web app
  manifest gained real PNG icons — `icon-192.png`, `icon-512.png`, a `maskable` 512 icon and an
  `apple-touch-icon.png` (180) — plus an `id`, `display_override` and a scope. On Android/Chrome
  an install prompt appears; on desktop Chrome/Edge an install icon appears in the address bar;
  on iPhone it is Share → Add to Home Screen.
- **A service worker** (`sw.js`) so the installed app works **offline**. Navigations are
  network-first with a cache fallback; other assets are stale-while-revalidate. The cache name
  carries the version, so activating a new worker drops the previous release's assets.
- **An update notice** (`js/ui/update.js`), shown **only when running as an installed app**
  (`display-mode: standalone/fullscreen`, or the iOS home-screen flag). It reports three things:
  - a **waiting service worker** → “A new version is ready — Reload now” (reload happens only
    when the reader taps, via `SKIP_WAITING`);
  - **`version.json`** on the same origin → a newer release has been deployed;
  - the **GitHub release feed** → the newest release, with a link to its notes.
  A small **Updates** button sits bottom-left; tapping it runs a check and reports
  “You're up to date — v1.2.0”, “Update available”, or a friendly offline message.
- **`version.json`** at the repository root — the canonical version the update check reads.
- **`docs/UPDATES.md`** — how install, offline and the update flow work, and how to test them.

### Changed

- The **version now lives in three places** — `js/data/meta.js`, `version.json` and `sw.js` —
  and CI fails if they disagree.
- The **Content-Security-Policy** in `_headers` gained `worker-src 'self'` and
  `connect-src 'self' https://api.github.com`.
- The README's “no network requests after load” claim was corrected: the installed app makes two
  network requests for the update check (a same-origin `version.json` and the GitHub release API).

### Notes

- The update notice never appears on the plain website — a casual reader is not interrupted.
- The GitHub release check is rate-limited (about 60 requests/hour per IP, unauthenticated); it
  runs once on launch and on an explicit tap, never in a loop.

## [1.1.0] — 2026-10-01

Theme-vocabulary expansion.

### Added

- **Six new dictionary categories** — **Birds** (17 words), **Seasons** (8), **Fruits** (19),
  **Vegetables** (23), **Festivals** (17) and **Shapes** (13) — bringing the dictionary to
  **344 entries across 20 categories**.
- The **Colours** category grew from 7 to 14 entries (pink, orange, purple, grey, golden,
  silver, and the word for "colour" itself), and **Animals** grew from 10 to 28 (buffalo, pig,
  sheep, lion, bear, deer, rhinoceros, crocodile, frog, rabbit, fox, squirrel, rat, butterfly,
  ant, mosquito, bee, fly and spider).
- Festival entries name the three **Bihu**s (Bohag/Rongali, Kati/Kongali, Magh/Bhogali) alongside
  Durga Puja, Diwali, Phakuwa, Eid, Christmas, Saraswati and Lakshmi Puja, Shivaratri,
  Janmashtami, Raas Mahotsav, Ambubachi Mela and Me-Dam-Me-Phi.
- Several entries carry a `note` where a word is regionally specific or has a second sense — for
  example তৰা, which is both "star (shape)" and "star in the sky".

### Changed

- Fruit and vegetable words previously listed under **Food & drink** (banana, mango, vegetable)
  now sit in the new **Fruits** and **Vegetables** categories, and **bird** moved from
  **Animals** to **Birds**. No word was lost.

### Notes

- As before, the content was compiled from published sources and is **not verified by a native
  speaker**. New entries follow the same accuracy policy: no invented forms, and uncertainty
  flagged in place.

## [1.0.0] — 2026-10-01

The first release of Luitra, a self-contained platform for learning Assamese. The architecture,
design system and tooling are adapted from an earlier MIT-licensed platform for Bodo
([Raokhanthi](https://github.com/aphelionvoid/raokhanthi)); the language content is entirely new and
covers Standard (Eastern) Assamese.

### Added

- **A graded curriculum of 15 lessons** across four levels — Basic, Elementary, Intermediate and
  Advanced — from the sound system and the three honorific tiers to the verb system, negation and the
  difference between spoken and written Assamese. Progress is saved per lesson in the browser.
- **A script & sounds page** covering the Assamese script: the vowels and the consonants that carry
  meaning, the /x/ fricative (শ / ষ / স), the two letters Bengali dropped (ৰ and ৱ), and schwa deletion.
- **A grammar reference** — word order, the case suffixes, pronouns, the three honorific tiers, tense
  and aspect, negation, questions and plurals.
- **Verb tables** giving the present / past / future paradigm across six persons and the three
  honorific tiers, plus the negative, the imperative, the aspect markers and ten common verbs.
- **A numbers & time page** — one to a hundred, the pattern above that, the Indian numbering scale,
  time words and days of the week.
- **A searchable dictionary of 225 entries** across 14 categories, each in the Assamese script with a
  romanisation and an English gloss.
- **A phrasebook of 88 phrases** grouped by 12 settings, and **8 real dialogues** (42 lines) with a
  note on how each exchange sounds in speech.
- **A flashcard quiz** drawn from the dictionary in both directions, and an **English → Assamese
  translator** with a phrasebook lookup and a word-by-word gloss fallback.
- **A language & community page** — the speakers, the script and the /x/ sound, the classical-language
  designation of 3 October 2024, the dialects, the honorific system and code-switching.
- **A resources page** with external references and a twelve-week study plan, and a full **contribute
  page** with four step-by-step routes, including one that needs no code and no GitHub account.
- **An original SVG identity** — `favicon.svg`, `logo.svg`, `logo-mark.svg`, `icon-maskable.svg` and
  `og-cover.svg` — drawn as vector paths rather than font glyphs.
- **A floating display panel** — theme (white default / dark / auto), reading mode, font family, text
  size, page zoom, colour warmth, tint intensity, six accent palettes, contrast, and an on-this-page
  toggle. Preferences persist in `localStorage`.
- **Mobile-first layout** — a bottom navigation bar under 768px, a sidebar at 1024px and above, and an
  on-this-page column at 1360px and above.
- **Repository hygiene** — `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`,
  `SECURITY.md`, `CONTRIBUTORS.md`, MIT `LICENSE`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`,
  `_headers` and `.nojekyll`.
- **`docs/`** — `ARCHITECTURE.md`, `CONTENT-GUIDE.md`, `ACCESSIBILITY.md`, `ROADMAP.md`.
- **`tools/`** — `check-links.mjs` (a dependency-free internal link checker) and `build-sitemap.mjs`.
- **CI and GitHub hygiene** — a workflow that syntax-checks every JavaScript file, validates each page
  skeleton and runs a dependency-free secret scan; issue templates, a pull request template and
  Dependabot.

### Design

- The interface follows a tactile visual language: cards with a crisp outline **plus** a soft ambient
  shadow, chunky buttons with a 3D lip that compresses on press, four section hues cycled across icon
  tiles, a gradient hero panel carrying the home-page statistics, a launchpad grid, a swipeable shelf
  of starter phrases and a visual learning path on the lessons page.
- Motion is 150ms for micro-interactions and 300ms for entrances, and is disabled under
  `prefers-reduced-motion`. No emoji are used anywhere; every icon is inline SVG from the bundled
  Lucide sprite.

### Notes on accuracy

- The content was compiled from published sources and **not verified by a native speaker**. This is
  stated in the README, on the About page and on the Contribute page.
- The platform describes **Standard (Eastern) Assamese** and flags where a form is known to vary.
- Uncertain forms are flagged in place rather than presented as settled; no Assamese form was invented.

### Verified

- `node --check` passes for every JavaScript file; `tools/check-links.mjs` reports no broken links.
- Every page loads with the display controller visible and operable, and reset restores the defaults.
- No horizontal overflow at 320, 375, 414, 768, 1024 or 1440 px.

### Security

- GitHub **secret scanning** and **push protection** enabled on the repository.
- CI runs a dependency-free secret scan for common credential patterns.
- A documented `_headers` file supplies a strict CSP and security headers on hosts that support it
  (GitHub Pages ignores it — see `SECURITY.md`).
