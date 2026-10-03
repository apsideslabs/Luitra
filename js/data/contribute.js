/* ============================================================
   Luitra — contribute
   Everything a visitor needs in order to correct, add to or
   improve this platform — including the no-code route.
   ============================================================ */

window.ASM = window.ASM || {};

window.ASM.contribute = {
  intro:
    "Luitra is a community resource, not a finished product. Every word, phrase and table in it can be improved by someone who knows Assamese better than the compiler does — and that includes you. You do not need to write code, and you do not need a GitHub account to start.",

  why: [
    {
      icon: "target",
      title: "Accuracy comes from speakers",
      text: "This platform was compiled from published sources, not from native fluency. A single speaker correcting one entry is worth more than any amount of further reading."
    },
    {
      icon: "globe",
      title: "Assamese is not one thing",
      text: "Eastern/Standard, Kamrupi and Goalpariya differ in real ways. Recording which form belongs to which region turns a limitation into a feature — the platform can document variation instead of hiding it."
    },
    {
      icon: "users",
      title: "Coverage grows only if people add",
      text: "A language needs thousands of entries. Every word you add is one a learner will meet tomorrow."
    },
    {
      icon: "shield",
      title: "The project stays honest",
      text: "Reporting an error, or flagging something you are unsure about, is exactly as valuable as adding something new."
    }
  ],

  roles: [
    {
      icon: "users",
      title: "Assamese speakers",
      text: "You are the authority here. Nothing replaces a speaker's judgement about what is said and where.",
      can: [
        "Correct a word, phrase or translation",
        "Add a dialect note for your region",
        "Explain when a form is used and when it is not",
        "Flag anything that sounds wrong or unnatural"
      ]
    },
    {
      icon: "lessons",
      title: "Teachers and students",
      text: "You know what actually confuses people in a classroom, which no compiler can guess.",
      can: [
        "Add classroom sentences and instructions",
        "Point out gaps in the lesson sequence",
        "Suggest exercises and example sentences",
        "Tell us which explanations do not land"
      ]
    },
    {
      icon: "idea",
      title: "Learners",
      text: "You are the best test of whether the material is clear. Confusion is a bug report.",
      can: [
        "Report a confusing explanation",
        "Report a typo or a broken link",
        "Suggest a topic you could not find",
        "Say which page you gave up on"
      ]
    },
    {
      icon: "pr",
      title: "Developers and designers",
      text: "The whole platform is plain HTML, CSS and JavaScript with no dependencies and no build step.",
      can: [
        "Improve accessibility, performance or layout",
        "Fix bugs in the quiz, translator or display panel",
        "Improve the mobile experience",
        "Review pull requests"
      ]
    },
    {
      icon: "translator",
      title: "Translators",
      text: "The interface is in English. It does not have to be.",
      can: [
        "Translate the interface into Assamese, Bengali or Hindi",
        "Translate the lesson summaries",
        "Improve the romanisation notes for your region"
      ]
    }
  ],

  tasks: [
    { icon: "bug", title: "Report a problem", effort: "2 minutes", text: "A typo, a broken link, a wrong word, a confusing sentence, a layout that breaks on your phone.", how: "Open an issue with the page and what you saw." },
    { icon: "dictionary", title: "Fix or add a word", effort: "5–10 minutes", text: "Correct an entry, or add one that is missing. The Assamese script plus a romanisation, please.", how: "Edit js/data/dictionary.js, or describe it in an issue." },
    { icon: "phrases", title: "Add a phrase or a dialogue", effort: "10–20 minutes", text: "Everyday sentences for a setting that is thin — a clinic, a bus stand, a phone call, a shop.", how: "Edit js/data/phrases.js or js/data/dialogues.js." },
    { icon: "grammar", title: "Add a dialect note", effort: "5 minutes", text: "If a form here differs from how people speak where you are, say so and name the district.", how: "Open an issue, or add a note field to the entry." },
    { icon: "idea", title: "Improve an explanation", effort: "10 minutes", text: "If a lesson or table lost you, rewriting one paragraph is a real contribution.", how: "Open an issue with a suggested wording." },
    { icon: "contrast", title: "Improve accessibility", effort: "varies", text: "Keyboard operation, screen-reader semantics, contrast, text scaling, reduced motion.", how: "Open an issue, or send a pull request." },
    { icon: "file", title: "Improve the documentation", effort: "15 minutes", text: "The guides in docs/ should be clear enough that a stranger can add content without asking.", how: "Edit the Markdown and open a pull request." },
    { icon: "star", title: "Share it", effort: "1 minute", text: "A resource nobody finds helps nobody. Sharing it with a class, a group or a community is a contribution.", how: "Send the link. That is all." }
  ],

  routes: [
    {
      id: "issue",
      badge: "No code required",
      title: "Route A — Tell us what is wrong or missing",
      for: "Anyone. This is the recommended route for speakers and teachers.",
      steps: [
        "Open the issue tracker for the repository (link below).",
        "Choose the <strong>Bug report</strong> template if something is wrong, or <strong>Feature request</strong> if something is missing.",
        "Fill in the page and the entry — for example, “Dictionary → water”.",
        "Write what is shown now, and what it should be.",
        "Write the correct form <strong>in the Assamese script</strong>, and a romanisation if you have one.",
        "Say which <strong>district or region</strong> your form is from. This matters more than anything else on this list.",
        "Submit. A maintainer will reply."
      ]
    },
    {
      id: "content",
      badge: "Text editor only",
      title: "Route B — Add or edit content yourself",
      for: "Anyone comfortable editing a text file. No programming knowledge needed.",
      steps: [
        "Fork the repository on GitHub, or download the ZIP and edit it locally.",
        "Open the relevant file under <code>js/data/</code> — <code>dictionary.js</code>, <code>phrases.js</code>, <code>dialogues.js</code> or <code>lessons.js</code>.",
        "Copy an existing entry and change the values. Keep the shape exactly as it is.",
        "Every Assamese string must be in the <strong>Assamese script</strong> and must carry a <strong>romanisation</strong>.",
        "Save, then open the site in a browser to check your entry appears.",
        "Run <code>node tools/check-links.mjs</code> to confirm nothing is broken.",
        "Open a pull request, or attach the file to an issue if you are not sure how."
      ]
    },
    {
      id: "code",
      badge: "Developer",
      title: "Route C — Change the code",
      for: "Developers and designers. There are no dependencies and no build step.",
      steps: [
        "Fork the repository and create a branch with a descriptive name.",
        "Make the change. Do not add runtime dependencies — the platform must keep working offline from the file system.",
        "Run <code>node --check</code> on every JavaScript file you touched.",
        "Run <code>node tools/check-links.mjs</code>.",
        "Check the result in a browser at 320px, 768px and 1440px wide.",
        "Open a pull request describing what changed and why."
      ]
    },
    {
      id: "email",
      badge: "No account needed",
      title: "Route D — Send it by email",
      for: "Anyone who would rather not use GitHub at all.",
      steps: [
        "Write to the address listed on the maintainer's GitHub profile.",
        "Say which page and entry you are writing about.",
        "Give the correct form in the Assamese script, a romanisation, and your region.",
        "That is enough — a maintainer will add it and credit you."
      ]
    }
  ],

  rules: [
    { rule: "The Assamese script, always", why: "It is the script Assamese is written in and the one learners meet in print." },
    { rule: "Romanise everything", why: "The script does not show the /x/ sound or the vowels unambiguously. In this project's romanisation, <strong>x</strong> is the /x/ fricative (শ/ষ/স), <strong>w</strong> is ৱ, <strong>r</strong> is ৰ and <strong>y</strong> is য়." },
    { rule: "Never invent a form", why: "If you are unsure, say so. A flagged gap is worth more than a confident error." },
    { rule: "Name your region", why: "Assamese varies by district. An unattributed form implies it is universal." },
    { rule: "No emoji", why: "The project uses an SVG icon set. Emoji render inconsistently and carry no weight." },
    { rule: "No new dependencies", why: "The site must keep working offline, with no build step and no third-party scripts." },
    { rule: "Keep it respectful", why: "Discussions about which form is “correct” must not dismiss a community's way of speaking. See the Code of Conduct." }
  ],

  review: [
    "A maintainer reads the change and checks it against the rules above.",
    "If it is a correction from a speaker, it is applied as quickly as possible — this is the highest-priority work.",
    "If the source of a form is unclear, you may be asked which district it comes from.",
    "Content changes are credited in the changelog and in the contributors list.",
    "The change goes live on the site within a minute of being merged."
  ],

  recognition:
    "Contributors are listed in CONTRIBUTORS.md in the repository, and content corrections are named in the changelog entry for the release that includes them. If you would rather stay anonymous, say so and you will not be listed.",

  faq: [
    { q: "I am an Assamese speaker but I do not use GitHub. Can I still help?", a: "Yes — that is what Route A and Route D are for. Open an issue, or send an email. You never need to touch the code." },
    { q: "Which dialect should I use?", a: "Yours. Say which district or region it is from, and the platform will record it as that variety rather than pretending there is one standard." },
    { q: "What if I am not sure a form is right?", a: "Say so. Open an issue describing what you have heard and where. Uncertainty that is recorded is more useful than a guess that is presented as fact." },
    { q: "Can I add audio pronunciation?", a: "Not yet — audio is planned but the platform currently ships no media. Open an issue and it will be counted towards the feature." },
    { q: "Do I have to sign a contributor agreement?", a: "No. There is no CLA. Contributions are accepted under the same MIT licence as the rest of the project." },
    { q: "Can I translate the whole platform?", a: "Yes. The interface strings and the lesson summaries can be translated. Start an issue to coordinate so two people do not translate the same page differently." },
    { q: "How long until my change appears on the site?", a: "Merged changes deploy automatically and are usually live within a minute." },
    { q: "Can I use this material elsewhere?", a: "Yes. It is MIT licensed. Reusing it, including commercially, is allowed — attribution is appreciated but not required." }
  ],

  links: [
    { icon: "bug", label: "Report a bug or a content error", href: "https://github.com/apsideslabs/Luitra/issues/new?template=bug_report.md", desc: "The template asks for exactly what is needed, including your region." },
    { icon: "idea", label: "Request a feature or a missing topic", href: "https://github.com/apsideslabs/Luitra/issues/new?template=feature_request.md", desc: "For anything absent: a topic, a setting, a dialect, a feature." },
    { icon: "pr", label: "Open a pull request", href: "https://github.com/apsideslabs/Luitra/pulls", desc: "For content or code changes you have already made." },
    { icon: "file", label: "Read the contributing guide", href: "https://github.com/apsideslabs/Luitra/blob/main/CONTRIBUTING.md", desc: "Setup, checks, content rules and the review process." },
    { icon: "grammar", label: "Read the content guide", href: "https://github.com/apsideslabs/Luitra/blob/main/docs/CONTENT-GUIDE.md", desc: "The exact shape of every content type, field by field." },
    { icon: "handshake", label: "Read the Code of Conduct", href: "https://github.com/apsideslabs/Luitra/blob/main/CODE_OF_CONDUCT.md", desc: "What is expected of everyone taking part." },
    { icon: "users", label: "See the contributors", href: "https://github.com/apsideslabs/Luitra/blob/main/CONTRIBUTORS.md", desc: "Everyone who has improved this platform so far." },
    { icon: "shield", label: "Report a security issue privately", href: "https://github.com/apsideslabs/Luitra/blob/main/SECURITY.md", desc: "Please do not open a public issue for a security problem." }
  ]
};
