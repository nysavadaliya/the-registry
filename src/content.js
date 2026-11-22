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
    disclaimer: "By: Nysa Vadaliya",
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
    subtitle: "A Literary Study into The Maid by Nita Prose",
    copy: "Behind the protected image of the Regency Grand Hotel, appearances shape everything. This site will take you on a journey through the hierarchies, secrets, and judgements that lie within The Maid.",
    primaryButton: "ENTER THE REGISTRY",
    // Optional photo: put a file in public/images/ and write its path, e.g. "/images/lobby.jpg".
    // Leave empty to show the brass key rack illustration instead.
    imagePath: "",
    imageAlt: "[DESCRIBE YOUR PHOTO FOR SCREEN READERS]",
    rackLabel: "KEY RACK",
  },
  premise: {
    heading: "The Premise",
    paragraphs: [
      "The prestigious Regency Grand Hotel is the workplace of Molly Gray, also known as Molly the Maid. She finds happiness in routine, order, and a clean room.",
      "One day, she discovers a wealthy and important guest, dead in his room, and becomes the prime suspect in the murder investigation. ",
      "This book goes further than just figuring out who killed Mr. Black; it makes people wonder how people decide who to trust and what that shows about them. ",
    ],
    thesisLabel: "THE ARGUMENT",
    thesis: "Molly lacks a sense of interpreting people and observing things. In this book, other characters and readers believe that a lack of social skills was proof that someone’s observations were unreliable. ",
    pathsHeading: "Choose your path",
    newPath: {
      label: "NEW TO THE HOTEL",
      text: "Take a guided tour through the website, learn things about Molly the Maid, and try to answer questions correctly in the Perception Test.",
    },
    returningPath: {
      label: "RETURNING GUEST",
      text: "The complete literary investigation is made only for people who have already read the book.",
      button: "OPEN THE FULL INVESTIGATION",
    },
  },
  gate: {
    title: "Spoiler warning",
    text: "It talks about the ending of the novel, so only continue if you have finished the entire book!",
    confirm: "I’VE FINISHED THE BOOK: CONTINUE",
    cancel: "GO BACK",
  },
  locked: {
    //text: "This room is reserved for returning guests. It discusses the whole novel.",
   // button: "OPEN THE FULL INVESTIGATION",
  },

  // ---------- THE GUEST REGISTRY ----------
  registry: {
    number: "100",
    heading: "The Guest Registry",
    intro: "Every guest is logged twice: once initially, and again after they are studied further. ",
    toggleFirst: "FIRST IMPRESSION",
    toggleCloser: "CLOSER READING",
    fieldLabels: {
      first: "FIRST IMPRESSION",
      public: "PUBLIC PERCEPTION",
      behind: "BEHIND THE APPEARANCE",
      significance: "LITERARY SIGNIFICANCE",
     
      evidence: "TEXTUAL EVIDENCE",
    },
    // Only Molly’s first impression is spoiler-free. Everything under "Closer reading" needs the gate.
    characters: [
      {
        name: "Molly Gray",
        tag: "GUEST NO. 01",
        image: { path: "/images/mollytowels.jpg", alt: "", idea: "Folded white towels or a housekeeping trolley (portrait)" },
        first: "Molly appears very careful and devoted to her work; she finds comfort within rules and routines in any scenario.",
        public: "To many people in the hotel, Molly is just “the maid.” They think of her as useful, awkward, and sometimes invisible. ",
        behind: "A closer look at the book separates two ideas the book wants to blend: how Molly interprets different people, and how she observes what happens around her. ",
        significance: "Molly’s character makes us challenge our assumptions on credibility. Do we not trust Molly for the evidence we have or for not being normal?",
        //counter: " ",
        evidence: "“Every day of work is a joy to me. I was born to do this job. I love cleaning, I love my maid’s trolley, and I love my uniform” (Prose 9).",
      },
      {
        name: "Giselle Black",
        tag: "GUEST NO. 02",
        image: { path: "/images/gissPearl.jpeg", alt: "Giselle portrait pearls", idea: "A glamorous detail: champagne glass, pearls, or a velvet chair (portrait)" },
        first: "Giselle looks like a wealthy and glamorous woman living a dream lifestyle at the hotel. Molly aspires to be as beautiful and kind as her, and trusts her as a friend. ",
        public: "As the wife of the wealthy Mr. Black, Giselle seems to be sophisticated and privileged. Although underneath the nice lifestyle, she has to go through many personal struggles. ",
        behind: "Giselle is going through an unhappy and complicated marriage. Her friendship with Molly shows a more vulnerable side to her.",
        significance: "Giselle's character makes readers wonder whether showing kindness makes someone automatically trustworthy.",
        //counter: "[FILL IN: a reasonable alternative way to read her.]",
        evidence: "“She believed in politeness in treating people with respect. It's not your station in life that matters. It's how you connect yourself that counts” (Prose 46).",
      },
    ],
  },

  
  // ---------- BEHIND CLOSED DOORS ----------
  rooms: {
    number: "200",
    heading: "Behind Closed Doors",
    intro: "Four rooms, four questions.",
    closeButton: "CLOSE",
    labels: { question: "GUIDING QUESTION", evidence: "TEXTUAL EVIDENCE", takeaway: "TAKEAWAY" },
    items: [
      {
        number: "101",
        image: { path: "/images/101.jpg", alt: "[DESCRIBE: Room 101 image]", idea: "A hotel door with a brass room number (portrait)" },
        title: "The Art of Being Invisible",
        question: "Can someone be important and invisible all at once?",
        preview: "Molly makes sure the hotel stays running, but is not noticed often. As she refers to it, “Every worker bee has a place in the hive” (Prose 122).",
        analysis: [
          "A hotel depends on work that guests usually do not see and are not meant to see. Molly’s hard work makes every room feel effortless and clean. This means that the better she does her job, the less she is actually noticed.",
          "Having a narrator that is usually overlooked or invisible provides a lot of insight into someone who usually is not paid much mind.",
        ],
        evidence: "“But I find it pleasing to leave a room pristine and to slip out and disappear without a trace” (Prose 45).",
        takeaway: "Just because something is invisible does not mean it has no significance.",
      },
      {
        number: "202",
        image: { path: "/images/202.jpg", alt: "[DESCRIBE: Room 202 image]", idea: "A hallway mirror, or light through a window (portrait)" },
        title: "The Reliability Question",
        question: "Does seeing the world differently mean that you are seeing it incorrectly?",
        preview: "Just because someone has limited knowledge does not mean they are a fraud.",
        analysis: [
          "A narrator can be limited without lying. Molly is not good at understanding the meaning of people’s words or actions. She does not understand social cues, but that is a different problem from misreporting what happened.",
          "Readers have to distinguish between Molly’s current knowledge, what she understands, and what she chooses to say. When Molly found Mr. Black dead in his room, Molly noticed a lot of things out of place, like Giselle’s pill next to the bed. She saw Giselle as a friend in need of help after she learned about the condition of her marriage, but never as an accomplice in the murder. She misread the signs in the room and believed that she had to save Giselle, instead of being careful around her.",
        ],
        //evidence: "",
        takeaway: "If people view things differently, it does not mean it is a faulty outlook.",
      },
      {
        number: "303",
        image: { path: "/images/303.jpg", alt: "[DESCRIBE: Room 303 image]", idea: "A spotless white bed or marble bathroom (portrait)" },
        title: "The Cost of Appearances",
        question: "Can something look so clean while hiding something so unethical?",
        preview: "A clean surface is not proof of a clean mind.",
        analysis: [
          "Molly’s job is to clean, and the hotel is known for its immense perfection. The novel uses the concept that on the surface, things can look so impeccable, but something terrible is hidden inside.",
          "The hotel looks beautiful, but it hides the secrets and conflicts taking place right inside its rooms. The same thing applies to Mr Black and Giselle’s marriage. ",
        ],
        evidence: "“Did you know that? [He] gets jealous if I so much as glance at another man, but her has at least two mistresses in different cities. He pays off the paparazzi so they don't leak the truth about him” (Prose 51).",
        takeaway: "Spotless is a physical description for a surface, not a human.",
      },
      {
        number: "404",
        image: { path: "/images/404.jpg", alt: "[DESCRIBE: Room 404 image]", idea: "A reception desk or a brass service bell (portrait)" },
        title: "Who do People tend to believe?",
        question: "Why do some people look credible with no proof to support their trustworthiness?",
        preview: "Social status decides credibility before words even leave people’s mouths.",
        analysis: [
          "The way someone looks and their confidence can make a person sound credible, no matter what they have to say.",
          "The way other characters treat Molly shows this. Rodney took advantage of Molly’s trusting personality and lack of social understanding, manipulating her to think he liked her. Detective Stark initially saw Molly as odd and a lowly maid, due to her behavior and weird responses. On the other hand, Mr.Preston took time to get to know Molly instead of judging her. These different reactions show how people’s assumptions can change who they believe.",
        ],
        evidence: "",
        takeaway: "Before blindly believing someone, think about why.",
      },
    ],
  },

 
  // ---------- THE PERCEPTION TEST ----------
  test: {
    number: "300",
    heading: "The Perception Test",
    intro: "There is never only one right answer. Every choice can be supported through a different way of thinking.",
    progress: "Question {n} of {total}",
    nextButton: "NEXT QUESTION",
    finishButton: "SEE MY REFLECTION",
    restartButton: "START OVER",
    finalHeading: "Your reflection",
    finalText: "Notice which answers came quickly. Were you judging the evidence, or the person? [EDIT this closing reflection.]",
    questions: [
      {
        spoilerFree: true,
        prompt: "If someone can't understand social cues properly, does that make their account of an event unreliable?",
        options: [
          {
            label: "A",
            text: "Yes. When someone can't understand people, it makes their observations unreliable.",
            feedback: "Different abilities are not a limitation. Understanding people's true intentions is interpretation. Noting events based on what you see is called observation. People like Molly can struggle with the first but accurately show the second.",
          },
          {
            label: "B",
            text: "No. Observation based on facts and understanding social cues are different abilities.",
            feedback: "This clearly distinguishes between observation and interpretation. However, it is a little extreme because how a person explains why something happened is subjective and might be biased based on their misinterpretations.",
          },
          {
            label: "C",
            text: "It depends on the particular evidence and situation.",
            feedback: "This is the best answer that we can support later using evidence. We can check what was observed and what were personal inferences.",
          },
        ],
     //   evidence: "",
      },
      {
        spoilerFree: false,
        prompt: "Two people come up to you. One is a put-together, confident person telling you a story. The other person telling you a different story is nervous and not put together. Who is more believable to you?",
        options: [
          {
            label: "A",
            text: "The confident person; when you can deliver effectively and clearly, it signifies honesty.",
            feedback: "The way someone delivers something tells us about confidence, not how true something is.",
          },
          {
            label: "B",
            text: "The nervous person. Speaking clearly can seem rehearsed.",
            feedback: "A lot of nervous people are wrong, and there are many causes of being nervous.",
          },
          {
            label: "C",
            text: "Neither, until the details can be checked.",
            feedback: "This moves the point from how someone sounds to what is actually supported by proof. In this novel, being verifiable is favored. For example, Rodney presents himself in a charismatic and trustworthy way, but his actions reveal otherwise.",
          },
        ],
      //  evidence: "",
      },
      {
        spoilerFree: false,
        prompt: "Someone is good at sticking to repetitive tasks but doesn’t know when to speak up. Is that a problem with finding facts or about judging people?",
        options: [
          {
            label: "A",
            text: "Facts. If she can't judge situations properly, she can't judge events.",
            feedback: "Judging when to speak is a skill that can be learned, not how good she is at reporting what she saw clearly.",
          },
          {
            label: "B",
            text: "People. Facts and timing when to say things are separate.",
            feedback: "Timing still controls what information reaches some people. Molly knew more accurate information about Gisele’s involvement in the murder, but she withheld the information from the detective initially.",
          },
          {
            label: "C",
            text: "Both",
            feedback: "Most likely. The real thing to wonder is which of her claims depend on interpretations of people and which depend solely on what she saw.",
          },
        ],
       // evidence: "",
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
      "The mystery of The Maid is not just what took place. It represents how quickly they decide whom to believe. ",
      "In the entirety of the novel, Molly is judged on the things she says, the way she acts, and the way she understands the world around her. As the story goes on, we start to understand that the people we thought we could trust turned out to be the worst, while those who seem different or often underestimated. The author teaches us that we cannot assume everything about someone based on their first impressions. Before we go on to judge someone, we should think about whether we have evidence to support us or are simply making assumptions based on looks. ",
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

    researchLabel: "OUTSIDE RESEARCH in MLA Format",
    research: [
      "Frost, Dale. “Confidence, Credibility, & Strategic Leadership.” Goff Strategic Leadership Institute, 24 Aug. 2021, https://goff.utah.edu/confidence-credibility-strategic-leadership/. Accessed 19 Nov. 2026. \n\n",

      "Patrick, Bethanne. “In 'The Maid,' a devoted hotel cleaning lady is a prime murder suspect.” NPR, https://www.npr.org/2022/01/05/1070131496/in-the-maid-a-devoted-hotel-cleaning-lady-is-a-prime-murder-suspect. Accessed 20 November 2026.\n\n",

      "Prose, Nita. “The Maid Character Analysis | SuperSummary.” SuperSummary, https://www.supersummary.com/the-maid/major-character-analysis/. Accessed 21 Nov. 2026.\n\n",

      "“Who (and What) Can You Trust? How Non-Verbal Cues Can Predict a Person’s (and a Robot’s) Trustworthiness.” Association for Psychological Science - APS, https://www.psychologicalscience.org/news/releases/who-and-what-can-you-trust-how-non-verbal-cues-can-predict-a-persons-and-a-robots-trustworthiness.html. Accessed 21 Nov. 2026.\n\n",

      "Wolpert, Stuart. “Well, I See It Differently: Psychologist Explains Why People Don’t View the World the Same Way Others Do.” Medicalxpress.Com, Medical Xpress, 9 June 2022, https://medicalxpress.com/news/2022-06-differently-psychologist-people-dont-view.html. Accessed 21 Nov. 2026.\n\n"
    ],

    imageLabel: "IMAGE CREDITS",
    images: [
      "All images were sourced from Pixabay.",

      "ddzphoto. Corridor Hotel. Pixabay. https://pixabay.com/photos/corridor-hotel-hallway-empty-black-3744201/.",

      "FotoRieth. Towel Fold. Pixabay. https://pixabay.com/photos/towel-fold-laundry-households-pile-8688401/?",

      "Security. Pearls Chain Silk. Pixabay. https://pixabay.com/photos/pearls-chain-silk-velvet-jewellery-713340/.",

      "Mariakray. Hotel Privacy. Pixabay. https://pixabay.com/photos/hotel-privacy-room-sign-8275667/.",

      "DesignScape. Vintage Interior Interior Design. Pixabay. https://pixabay.com/photos/vintage-interior-interior-design-7546804/.",

      "dansamu. Bed Bedding. Pixabay. https://pixabay.com/photos/bed-bedding-hotel-hostel-blanket-1303450/",

      "geralt. Hotel Reception. Pixabay. https://pixabay.com/photos/hotel-reception-entrance-hall-595587/.",

      "Hans. Hotel Key. Pixabay. https://pixabay.com/photos/hotel-key-key-counter-reception-65044/."
    ],

    fontLabel: "FONTS",
    fonts: [
      "Cormorant Garamond and DM Sans, via Google Fonts, licensed under the SIL Open Font License."
    ],
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
