// ============================================================
// THE REGISTRY — ALL EDITABLE TEXT LIVES IN THIS FILE.
// Edit only the text inside quotation marks. Save, and the site updates.
// Rules: keep the quotation marks and commas. Lists use [ ... ] with commas between items.
// Anything in [SQUARE BRACKETS] is a placeholder: replace it with your own words.
// Never invent quotes or page numbers. Use the exact words from your copy of the book.
// ============================================================

const content = {
  // ---------- SITE-WIDE ----------
  site: {
    title: "THE REGISTRY",
    wordmark: "THE REGISTRY",
    tagline: "Every guest has their own story. Every room has its own mystery. Every judgment leaves something behind.",
    skipLink: "Skip to content",
    //NYSA CHECK
    disclaimer: "THE REGISTRY is an independent student project. It is not affiliated with or endorsed by Nita Prose or her publisher.",
  },

  // ---------- NAVIGATION (label + small brass room number) ----------
  nav: [
    { label: "Registry", id: "registry", number: "100" },
    { label: "Rooms", id: "rooms", number: "200" },
    { label: "Test", id: "test", number: "300" },
   // { label: "Staff", id: "staff", number: "400" },
    { label: "Checkout", id: "checkout", number: "400" },
  ],
  tourLink: "Open presentation mode",
  modeLabels: { new: "NEW TO THE HOTEL", returning: "RETURNING GUEST" },

  // ---------- IMAGES ----------
  // HOW TO ADD A PHOTO: 1) save it in public/images/  2) set path to "/images/yourfile.jpg"
  // 3) write a short alt description. While path is "" a placeholder frame shows the idea.
  images: {
    premise: { path: "/images/corridor.jpg", alt: "A dim hotel corridor lit by warm wall light", idea: "A long, dim hotel corridor with warm wall lights (landscape)" },
    //staff: { path: "/images/towels.jpg", alt: "[DESCRIBE: linens or service door]", idea: "Folded linens, or a service door at the end of a corridor (wide)" },
    checkout: { path: "/images/final.jpg", alt: "[DESCRIBE: brass key]", idea: "A brass key on a desk, or a rack of key hooks (wide)" },
  },

  // ---------- THE LOBBY ----------
  hero: {
    label: "THE REGENCY GRAND HOTEL",
    headline: "NOT EVERYTHING IS WHAT IT SEEMS.",
    subtitle: "A Literary Investigation into Nita Prose’s The Maid",
    copy: "Behind the polished doors of the Regency Grand, appearances shape everything. Enter an exploration of the judgments, hidden hierarchies, and overlooked truths within The Maid.",
    primaryButton: "ENTER THE REGISTRY",
    // Optional photo: put a file in public/images/ and write its path, e.g. "/images/lobby.jpg".
    // Leave empty to show the brass key rack illustration instead.
    imagePath: "",
    imageAlt: "[DESCRIBE YOUR PHOTO FOR SCREEN READERS]",
    rackLabel: "KEY RACK",
  },
  premise: {
    heading: "The premise (no spoilers)",
    paragraphs: [
      "Molly Gray is a maid at the Regency Grand Hotel. She loves order, routine, and the quiet satisfaction of a perfectly made room.",
      "Then she discovers a guest dead in his room, and becomes caught up in a murder investigation.",
      "This site asks a different question than “who did it?” It asks how people decide whom to believe, and what that reveals about them.",
    ],
    thesisLabel: "THE ARGUMENT",
    thesis: "Molly’s difficulty may lie in interpreting people, not in observing the world. The novel’s deeper question is why other characters (and readers) treat the first as proof of the second.",
    pathsHeading: "Choose your path",
    newPath: {
      label: "NEW TO THE HOTEL",
      text: "A spoiler-free experience. Meet Molly, try one question, and take the guided tour.",
    },
    returningPath: {
      label: "RETURNING GUEST",
      text: "The full literary investigation, for readers who have finished the novel.",
      button: "OPEN THE FULL INVESTIGATION",
    },
  },
  gate: {
    title: "Spoiler warning",
    text: "The full investigation discusses the whole novel, including its ending. Continue only if you have finished The Maid.",
    confirm: "I’VE FINISHED THE BOOK — CONTINUE",
    cancel: "GO BACK",
  },
  locked: {
    text: "This room is reserved for returning guests. It discusses the whole novel.",
    button: "OPEN THE FULL INVESTIGATION",
  },

  // ---------- THE GUEST REGISTRY ----------
  registry: {
    number: "100",
    heading: "The Guest Registry",
    intro: "Every guest is recorded twice: once as they first appear, and once after a closer reading.",
    toggleFirst: "FIRST IMPRESSION",
    toggleCloser: "CLOSER READING",
    fieldLabels: {
      first: "FIRST IMPRESSION",
      public: "PUBLIC PERCEPTION",
      behind: "BEHIND THE APPEARANCE",
      significance: "LITERARY SIGNIFICANCE",
      counter: "COUNTERINTERPRETATION",
      evidence: "TEXTUAL EVIDENCE",
    },
    // Only Molly’s first impression is spoiler-free. Everything under "Closer reading" needs the gate.
    characters: [
      {
        name: "Molly Gray",
        tag: "GUEST NO. 01",
        image: { path: "/images/mollytowels.jpg", alt: "", idea: "Folded white towels or a housekeeping trolley (portrait)" },
        first: "Molly appears careful, literal, and devoted to her work: someone who finds comfort in rules, routines, and a spotless room. [CHECK against the first chapters of your copy and adjust.]",
        public: "To many people at the hotel, Molly is simply “the maid”: useful, polite, and easy to overlook. [CHECK and add how specific characters treat her, using only early-book scenes for the spoiler-free version.]",
        behind: "A closer reading separates two things the novel invites us to blur: how Molly interprets people, and how accurately she observes things. [ADD what you notice after finishing the book.]",
        significance: "Molly lets the novel test our assumptions about credibility. If we doubt her, is it because of evidence, or because she doesn’t seem like a typical witness? [EDIT in your own words.]",
        counter: "A reasonable alternative: Molly’s trouble reading intentions does limit what she can safely report or conclude, so some caution about her conclusions is fair. [EDIT or replace.]",
        evidence: "[ADD QUOTE + PAGE NUMBER from your copy]",
      },
      {
        name: "Giselle Black",
        tag: "GUEST NO. 02",
        image: { path: "/images/gissPearl.jpeg", alt: "Giselle portrait pearls", idea: "A glamorous detail: champagne glass, pearls, or a velvet chair (portrait)" },
        first: "[FILL IN AFTER FINISHING: how Giselle first appears to Molly and to the reader.]",
        public: "[FILL IN: how other characters judge her.]",
        behind: "[FILL IN: what later evidence complicates the first impression.]",
        significance: "[FILL IN: what she shows about appearance vs. trustworthiness.]",
        counter: "[FILL IN: a reasonable alternative way to read her.]",
        evidence: "[ADD QUOTE + PAGE NUMBER from your copy]",
      },
    ],
  },

  // ---------- BEHIND CLOSED DOORS ----------
  rooms: {
    number: "200",
    heading: "Behind Closed Doors",
    intro: "Four rooms, four questions. The room numbers are metaphors, not places in the novel.",
    closeButton: "CLOSE",
    labels: { question: "GUIDING QUESTION", evidence: "TEXTUAL EVIDENCE", alternative: "ALTERNATIVE INTERPRETATION", takeaway: "TAKEAWAY" },
    // Each analysis is a short DRAFT. Expand each to about 200–300 words using your own evidence.
    items: [
      {
        number: "101",
        image: { path: "/images/101.jpg", alt: "[DESCRIBE: Room 101 image]", idea: "A hotel door with a brass room number (portrait)" },
        title: "The Art of Being Unseen",
        question: "Can someone be essential and invisible at the same time?",
        preview: "Molly keeps the hotel running, yet is rarely noticed.",
        analysis: [
          "A hotel depends on work that guests are never meant to see. Molly’s labor makes every room feel effortless, which means the better she does her job, the less she is noticed.",
          "By narrating from inside that invisibility, the novel gives weight to a worker who would normally stay in the background. [EXPAND with 2–3 specific scenes.]",
        ],
        evidence: "[ADD QUOTE + PAGE NUMBER]",
        alternative: "Being overlooked can also give Molly a vantage point others lack: she sees what people forget she can see. [EDIT.]",
        takeaway: "Invisibility is not the same as unimportance.",
      },
      {
        number: "202",
        image: { path: "/images/202.jpg", alt: "[DESCRIBE: Room 202 image]", idea: "A hallway mirror, or light through a window (portrait)" },
        title: "The Reliability Question",
        question: "Does seeing the world differently mean seeing it incorrectly?",
        preview: "Limited knowledge is not the same as deception.",
        analysis: [
          "A narrator can be limited without lying. Molly may misread what people mean, but that is a different problem from misreporting what happened.",
          "The mystery asks readers to keep these apart: what Molly knows, what she understands, and what she chooses to say. [EXPAND using evidence from your copy.]",
        ],
        evidence: "[ADD QUOTE + PAGE NUMBER]",
        alternative: "Readers may fairly say that incomplete social understanding makes some of Molly’s conclusions less safe to trust. [EDIT.]",
        takeaway: "Different perception is not the same as faulty perception.",
      },
      {
        number: "303",
        image: { path: "/images/303.jpg", alt: "[DESCRIBE: Room 303 image]", idea: "A spotless white bed or marble bathroom (portrait)" },
        title: "The Cost of Appearances",
        question: "Can a place look spotless while hiding something morally complicated?",
        preview: "A clean surface is not proof of a clean conscience.",
        analysis: [
          "Molly’s work is cleaning, and the hotel is built to look flawless. The novel plays with the idea that order on the surface can sit beside something troubling underneath.",
          "[EXPAND: connect the hotel’s polished look to specific characters and moments, after you finish the book.]",
        ],
        evidence: "[ADD QUOTE + PAGE NUMBER]",
        alternative: "A tidy room may simply be a tidy room; not every clean surface needs to be read as a symbol. [EDIT.]",
        takeaway: "Spotless describes a surface, not a person.",
      },
      {
        number: "404",
        image: { path: "/images/404.jpg", alt: "[DESCRIBE: Room 404 image]", idea: "A reception desk or a brass service bell (portrait)" },
        title: "Who Gets Believed?",
        question: "Why do some people seem credible before they even speak?",
        preview: "Status and style can decide credibility in advance.",
        analysis: [
          "Credibility often arrives before the words do. Confidence, status, and appearance can make a person sound reliable regardless of what they say.",
          "[EXPAND: show how particular characters’ assumptions shape how they respond to Molly.]",
        ],
        evidence: "[ADD QUOTE + PAGE NUMBER]",
        alternative: "Some skepticism toward Molly may come from real gaps in evidence, not only from prejudice. [EDIT.]",
        takeaway: "Ask who is believed, then ask why.",
      },
    ],
  },

  // ---------- THE PERCEPTION TEST ----------
  test: {
    number: "300",
    heading: "The Perception Test",
    intro: "There is no single right answer here. Each choice shows a different way of judging.",
    progress: "Question {n} of {total}",
    nextButton: "NEXT QUESTION",
    finishButton: "SEE MY REFLECTION",
    restartButton: "START OVER",
    finalHeading: "Your reflection",
    finalText: "Notice which answers came quickly. Were you judging the evidence, or the person? [EDIT this closing reflection.]",
    questions: [
      {
        spoilerFree: true,
        prompt: "Someone struggles to understand social cues. Does that make their account of an event less trustworthy?",
        options: [
          { label: "A", text: "Yes, because misunderstanding people makes their observations unreliable.", feedback: "This treats two different abilities as one. Understanding people’s intentions is interpretation; noticing what happened is observation. Someone can struggle with the first and still report the second accurately." },
          { label: "B", text: "No, because social understanding and factual observation are different abilities.", feedback: "This separates observation from interpretation, which is useful. But it can go too far: how a person explains why something happened may still be affected by what they misread. Credibility depends on which part of the account we are testing." },
          { label: "C", text: "It depends on the particular evidence and situation.", feedback: "This is the most careful answer, as long as we then ask what the evidence is. What was observed, what was inferred, and can any of it be checked independently?" },
        ],
        evidence: "",
      },
      {
        spoilerFree: false,
        prompt: "A confident, polished person tells a story. A nervous person tells a different one. Which is more believable?",
        options: [
          { label: "A", text: "The confident person. Clear delivery usually signals honesty.", feedback: "Confidence is easy to mistake for accuracy. Delivery tells us about comfort and status, not necessarily truth." },
          { label: "B", text: "The nervous person. Polish can be rehearsed.", feedback: "This reverses the bias rather than removing it. Nervousness has many causes, and plenty of nervous people are wrong." },
          { label: "C", text: "Neither, until the details can be checked.", feedback: "This shifts judgment from how someone sounds to what can be verified, which is the habit the novel seems to reward. [CONNECT to a specific scene.]" },
        ],
        evidence: "[ADD QUOTE + PAGE NUMBER]",
      },
      {
        spoilerFree: false,
        prompt: "A character is excellent at routine tasks but unsure when to speak up. Is that a problem with her judgment of facts, or of people?",
        options: [
          { label: "A", text: "Facts. If she can’t judge situations, she can’t judge events.", feedback: "Judging when to speak is a social skill, not a measure of whether she saw clearly. [CONNECT to the novel.]" },
          { label: "B", text: "People. Facts and social timing are separate.", feedback: "A strong distinction, though timing can still shape what information ever reaches other people. [CONNECT to the novel.]" },
          { label: "C", text: "Both, in different ways.", feedback: "Possibly. The useful question is which of her claims depend on reading people, and which depend only on what she saw. [CONNECT to the novel.]" },
        ],
        evidence: "[ADD QUOTE + PAGE NUMBER]",
      },
    ],
  },

  // ---------- THE INVISIBLE STAFF ----------
  staff: {
    number: "400",
    kicker: "FEATURE",
    heading: "The Invisible Staff",
    byline: "[YOUR NAME]",
    paragraphs: [
      "A luxury hotel sells an experience of effortlessness. Fresh sheets, a gleaming bathroom, a room that seems to reset itself. All of it is labor, performed by people guests are not meant to think about.",
      "Molly’s job places her inside that arrangement. The novel asks what it means that the person who makes the hotel look perfect is also the person least likely to be taken seriously. [EXPAND with evidence from your copy.]",
      "That tension extends beyond fiction: polished surfaces often rest on work that goes unremarked. [KEEP to what you can support; do not add statistics unless you cite them.]",
    ],
    pullQuote: "The better the work, the less it is seen. [REPLACE with your own original insight.]",
  },

  // ---------- FINAL CHECKOUT ----------
  checkout: {
    number: "400",
    heading: "Final Checkout",
    paragraphs: [
      "The mystery of The Maid is not only what happened. It is how people decide whom to believe, and how quickly they decide.",
      "[WRITE your own concluding paragraph, then check it matches your Google Doc.]",
    ],
    question: "WHAT DID YOU OVERLOOK?",
    returnKey: "RETURN YOUR KEY",
    returnedText: "Key returned. Thank you for staying.",
  },

  // ---------- SOURCES AND CREDITS ----------
  sources: {
    heading: "Sources and Credits",
    novelLabel: "THE NOVEL (MLA)",
    novel: "Prose, Nita. The Maid. Ballantine Books, 2022.",
    researchLabel: "OUTSIDE RESEARCH",
    research: ["[ADD any outside source you actually used, in MLA format. Delete this line if none.]"],
    imageLabel: "IMAGE CREDITS",
    images: ["[ADD each photo: photographer, title, site, license, URL.]"],
    fontLabel: "FONTS",
    fonts: ["Cormorant Garamond and DM Sans, via Google Fonts, licensed under the SIL Open Font License."],
  },

  // ---------- PRESENTATION MODE (spoiler-free, five stops) ----------
  tour: {
    exit: "EXIT TOUR",
    previous: "PREVIOUS",
    next: "NEXT",
    progress: "Stop {n} of {total}",
    stops: [
      {
        label: "STOP 1 — THE LOBBY",
        title: "The Maid",
        lines: ["by Nita Prose", "Genre: [YOUR GENRE, e.g. mystery]", "A hotel maid finds a guest dead in his room, and becomes part of the investigation."],
      },
      {
        label: "STOP 2 — THE GUEST REGISTRY",
        title: "First impressions",
        lines: ["What do you notice first about Molly?"],
      },
      {
        label: "STOP 3 — THE PERCEPTION TEST",
        title: "Try it",
        lines: [],
      },
      {
        label: "STOP 4 — THE PROJECT INSIGHT",
        title: "Beyond the plot",
        lines: [
          "For readers who have finished the book, this site goes deeper.",
          "Character dossiers. Four rooms of analysis. A test of how we judge.",
          "[EDIT in your own words.]",
        ],
      },
      {
        label: "STOP 5 — FINAL CHECKOUT",
        title: "My verdict",
        lines: [],
        rating: "[YOUR RATING] / 5 stars",
        highlightsLabel: "HIGHLIGHTS",
        highlights: ["[YOUR HIGHLIGHT]"],
        lowlightsLabel: "LOWLIGHTS",
        lowlights: ["[YOUR LOWLIGHT]"],
        conclusion: "[YOUR ONE-SENTENCE CONCLUSION]",
      },
    ],
  },
}

export default content
