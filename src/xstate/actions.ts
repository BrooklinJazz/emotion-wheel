/**
 * Basic
 */

export const Basic = {
  ANGER: "ANGER",
  FEAR: "FEAR",
  HAPPY: "HAPPY",
  DISGUST: "DISGUST",
  SAD: "SAD",
  SURPRISE: "SURPRISE",
  BAD: "BAD",
};

/**
 * Anger
 */

export const Anger = {
  LET_DOWN: "LET_DOWN",
  HUMILIATED: "HUMILIATED",
  BITTER: "BITTER",
  MAD: "MAD",
  AGGRESSIVE: "AGGRESSIVE",
  FRUSTRATED: "FRUSTRATED",
  DISTANT: "DISTANT",
  CRITICAL: "CRITICAL",
};

export const LetDown = {
  BETRAYED: "BETRAYED",
  RESENTFUL: "RESENTFUL",
};

export const Mad = {
  FURIOUS: "FURIOUS",
  JEALOUS: "JEALOUS",
};
export const Aggressive = {
  PROVOKED: "PROVOKED",
  HOSTILE: "HOSTILE",
};

export const Frustrated = {
  INFURIATED: "INFURIATED",
  ANNOYED: "ANNOYED",
};

export const Distant = {
  WITHDRAWN: "WITHDRAWN",
  NUMB: "NUMB",
};

export const Critical = {
  SKEPTICAL: "SKEPTICAL",
  DISMISSIVE: "DISMISSIVE",
};

export const Humiliated = {
  DISRESPECTED: "DISRESPECTED",
  RIDICULED: "RIDICULED",
};

export const Bitter = {
  INDIGNANT: "INDIGNANT",
  VIOLATED: "VIOLATED",
};

/**
 * Disgust Actions
 */

export const Disgust = {
  DISAPPROVING: "DISAPPROVING",
  DISAPPOINTED: "DISAPPOINTED",
  AWFUL: "AWFUL",
  REPELLED: "REPELLED",
};

export const Disapproving = {
  JUDGEMENTAL: "JUDGEMENTAL",
  EMBARRASSED: "EMBARRASSED",
};

export const Disappointed = {
  APPALLED: "APPALLED",
  REVOLTED: "REVOLTED",
};

export const Awful = {
  NAUSEATED: "NAUSEATED",
  DETESTABLE: "DETESTABLE",
};

export const Repelled = {
  HORRIFIED: "HORRIFIED",
  HESITANT: "HESITANT",
};

/**
 * Fear
 */

export const Fear = {
  SCARED: "SCARED",
  ANXIOUS: "ANXIOUS",
  INSECURE: "INSECURE",
  WEAK: "WEAK",
  REJECTED: "REJECTED",
  THREATENED: "THREATENED",
};

export const Scared = {
  HELPLESS: "HELPLESS",
  FRIGHTENED: "FRIGHTENED",
};

export const Anxious = {
  OVERWHELMED: "OVERWHELMED",
  WORRIED: "WORRIED",
};

export const Insecure = {
  INADEQUATE: "INADEQUATE",
  INFERIOR: "INFERIOR",
};

export const Weak = {
  WORTHLESS: "WORTHLESS",
  INSIGNIFICANT: "INSIGNIFICANT",
};

export const Rejected = {
  EXCLUDED: "EXCLUDED",
  PERSECUTED: "PERSECUTED",
};

export const Threatened = {
  NERVOUS: "NERVOUS",
  EXPOSED: "EXPOSED",
};

/**
 * Surprised
 */

export const Surprise = {
  STARTLED: "STARTLED",
  CONFUSED: "CONFUSED",
  AMAZED: "AMAZED",
  EXCITED: "EXCITED",
};

export const Startled = {
  SHOCKED: "SHOCKED",
  DISMAYED: "DISMAYED",
};

export const Confused = {
  DISILLUSIONED: "DISILLUSIONED",
  PERPLEXED: "PERPLEXED",
};

export const Amazed = {
  ASTONISHED: "ASTONISHED",
  AWE: "AWE",
};

export const Excited = {
  EAGER: "EAGER",
  ENERGETIC: "ENERGETIC",
};

/**
 * Sad
 */

export const Sad = {
  LONELY: "LONELY",
  VULNERABLE: "VULNERABLE",
  DESPAIR: "DESPAIR",
  GUILTY: "GUILTY",
  DEPRESSED: "DEPRESSED",
  HURT: "HURT",
};

export const Lonely = {
  ISOLATED: "ISOLATED",
  ABANDONED: "ABANDONED",
};

export const Vulnerable = {
  VICTIMIZED: "VICTIMIZED",
  FRAGILE: "FRAGILE",
};

export const Despair = {
  GRIEF: "GRIEF",
  POWERLESS: "POWERLESS",
};

export const Guilty = {
  ASHAMED: "ASHAMED",
  REMORSEFUL: "REMORSEFUL",
};

export const Depressed = {
  INFERIOR: "INFERIOR",
  EMPTY: "EMPTY",
};

export const Hurt = {
  // duplicated under Disgust so removing
  // DISAPPOINTED: "DISAPPOINTED",
  EMBARRASSED: "EMBARRASSED",
};

/**
 * Bad
 */

export const Bad = {
  TIRED: "TIRED",
  STRESSED: "STRESSED",
  BUSY: "BUSY",
  BORED: "BORED",
};

export const Tired = {
  UNFOCUSSED: "UNFOCUSSED",
  SLEEPY: "SLEEPY",
};

export const Stressed = {
  // NOTE, duplicate overwhelmed may cause issues
  OVERWHELMED: "OVERWHELMED",
  OUT_OF_CONTROL: "OUT_OF_CONTROL",
};

export const Busy = {
  PRESSURED: "PRESSURED",
  RUSHED: "RUSHED",
};

export const Bored = {
  APATHETIC: "APATHETIC",
  INDIFFERENT: "INDIFFERENT",
};

/**
 * Happy
 */

export const Happy = {
  PLAYFUL: "PLAYFUL",
  CONTENT: "CONTENT",
  INTERESTED: "INTERESTED",
  PROUD: "PROUD",
  ACCEPTED: "ACCEPTED",
  POWERFUL: "POWERFUL",
  PEACEFUL: "PEACEFUL",
  TRUSTING: "TRUSTING",
  OPTIMISTIC: "OPTIMISTIC",
};

export const Playful = {
  AROUSED: "AROUSED",
  CHEEKY: "CHEEKY",
};

export const Content = {
  FREE: "FREE",
  JOYFUL: "JOYFUL",
};

export const Interested = {
  CURIOUS: "CURIOUS",
  INQUISITIVE: "INQUISITIVE",
};

export const Proud = {
  SUCCESSFUL: "SUCCESSFUL",
  CONFIDENT: "CONFIDENT",
};

export const Accepted = {
  RESPECTED: "RESPECTED",
  VALUED: "VALUED",
};

export const Powerful = {
  COURAGEOUS: "COURAGEOUS",
  CREATIVE: "CREATIVE",
};

export const Peaceful = {
  LOVING: "LOVING",
  THANKFUL: "THANKFUL",
};

export const Trusting = {
  SENSITIVE: "SENSITIVE",
  INTIMATE: "INTIMATE",
};

export const Optimistic = {
  HOPEFUL: "HOPEFUL",
  INSPIRED: "INSPIRED",
};

export const Finish = {};

/**
 * EmoActions
 */

const BadActions = {
  ...Bad,
  ...Tired,
  ...Stressed,
  ...Busy,
  ...Bored,
};

const FearActions = {
  ...Fear,
  ...Scared,
  ...Anxious,
  ...Insecure,
  ...Weak,
  ...Rejected,
  ...Threatened,
};

const AngerActions = {
  ...Anger,
  ...LetDown,
  ...Humiliated,
  ...Bitter,
  ...Mad,
  ...Aggressive,
  ...Frustrated,
  ...Distant,
  ...Critical,
};

const DisgustActions = {
  ...Disgust,
  ...Disapproving,
  ...Disappointed,
  ...Awful,
  ...Repelled,
};

const SurpriseActions = {
  ...Surprise,
  ...Startled,
  ...Confused,
  ...Amazed,
  ...Excited,
};

const SadActions = {
  ...Sad,
  ...Lonely,
  ...Vulnerable,
  ...Despair,
  ...Guilty,
  ...Depressed,
  ...Hurt,
};

const HappyActions = {
  ...Happy,
  ...Playful,
  ...Content,
  ...Interested,
  ...Proud,
  ...Accepted,
  ...Powerful,
  ...Peaceful,
  ...Trusting,
  ...Optimistic,
};

export const EmoActions = {
  START: "SELECTING",
  FINISH: "FINISHED",
  ...Basic,
  ...AngerActions,
  ...DisgustActions,
  ...FearActions,
  ...SurpriseActions,
  ...BadActions,
  ...SadActions,
  ...HappyActions,
};

export const EmoStates = {
  ...EmoActions,
  INIT: "INIT",
  SELECTING: "SELECTING",
  FINISHED: "FINISHED",
};

export const EmoTree = {
  [EmoStates.ANGER]: {
    [EmoStates.LET_DOWN]: {
      [EmoStates.BETRAYED]: EmoStates.FINISHED,
      [EmoStates.RESENTFUL]: EmoStates.FINISHED,
    },
    [EmoStates.HUMILIATED]: {
      [EmoStates.DISRESPECTED]: EmoStates.FINISHED,
      [EmoStates.RIDICULED]: EmoStates.FINISHED,
    },
    [EmoStates.BITTER]: {
      [EmoStates.INDIGNANT]: EmoStates.FINISHED,
      [EmoStates.VIOLATED]: EmoStates.FINISHED,
    },
    [EmoStates.MAD]: {
      [EmoStates.FURIOUS]: EmoStates.FINISHED,
      [EmoStates.JEALOUS]: EmoStates.FINISHED,
    },
    [EmoStates.AGGRESSIVE]: {
      [EmoStates.PROVOKED]: EmoStates.FINISHED,
      [EmoStates.HOSTILE]: EmoStates.FINISHED,
    },
    [EmoStates.FRUSTRATED]: {
      [EmoStates.INFURIATED]: EmoStates.FINISHED,
      [EmoStates.ANNOYED]: EmoStates.FINISHED,
    },
    [EmoStates.DISTANT]: {
      [EmoStates.WITHDRAWN]: EmoStates.FINISHED,
      [EmoStates.NUMB]: EmoStates.FINISHED,
    },
    [EmoStates.CRITICAL]: {
      [EmoStates.SKEPTICAL]: EmoStates.FINISHED,
      [EmoStates.DISMISSIVE]: EmoStates.FINISHED,
    },
  },
  [EmoStates.SAD]: {
    [EmoStates.LONELY]: {
      [EmoStates.ISOLATED]: EmoStates.FINISHED,
      [EmoStates.ABANDONED]: EmoStates.FINISHED,
    },
    [EmoStates.VULNERABLE]: {
      [EmoStates.VICTIMIZED]: EmoStates.FINISHED,
      [EmoStates.FRAGILE]: EmoStates.FINISHED,
    },
    [EmoStates.DESPAIR]: {
      [EmoStates.GRIEF]: EmoStates.FINISHED,
      [EmoStates.POWERLESS]: EmoStates.FINISHED,
    },
    [EmoStates.GUILTY]: {
      [EmoStates.ASHAMED]: EmoStates.FINISHED,
      [EmoStates.REMORSEFUL]: EmoStates.FINISHED,
    },
    [EmoStates.DEPRESSED]: {
      [EmoStates.INFERIOR]: EmoStates.FINISHED,
      [EmoStates.EMPTY]: EmoStates.FINISHED,
    },
    [EmoStates.HURT]: {
      [EmoStates.EMBARRASSED]: EmoStates.FINISHED,
      // duplicate in disgust so removing
      // [EmoStates.DISAPPOINTED]: EmoStates.FINISHED,
    },
  },
  [EmoStates.BAD]: {
    [EmoStates.TIRED]: {
      [EmoStates.UNFOCUSSED]: EmoStates.FINISHED,
      [EmoStates.SLEEPY]: EmoStates.FINISHED,
    },
    [EmoStates.STRESSED]: {
      [EmoStates.OVERWHELMED]: EmoStates.FINISHED,
      [EmoStates.OUT_OF_CONTROL]: EmoStates.FINISHED,
    },
    [EmoStates.BUSY]: {
      [EmoStates.PRESSURED]: EmoStates.FINISHED,
      [EmoStates.RUSHED]: EmoStates.FINISHED,
    },
    [EmoStates.BORED]: {
      [EmoStates.APATHETIC]: EmoStates.FINISHED,
      [EmoStates.INDIFFERENT]: EmoStates.FINISHED,
    },
  },
  [EmoStates.DISGUST]: {
    [EmoStates.DISAPPROVING]: {
      [EmoStates.JUDGEMENTAL]: EmoStates.FINISHED,
      [EmoStates.EMBARRASSED]: EmoStates.FINISHED,
    },
    [EmoStates.DISAPPOINTED]: {
      [EmoStates.APPALLED]: EmoStates.FINISHED,
      [EmoStates.REVOLTED]: EmoStates.FINISHED,
    },
    [EmoStates.AWFUL]: {
      [EmoStates.NAUSEATED]: EmoStates.FINISHED,
      [EmoStates.DETESTABLE]: EmoStates.FINISHED,
    },
    [EmoStates.REPELLED]: {
      [EmoStates.HORRIFIED]: EmoStates.FINISHED,
      [EmoStates.HESITANT]: EmoStates.FINISHED,
    },
  },
  [EmoStates.FEAR]: {
    [EmoStates.SCARED]: {
      [EmoStates.HELPLESS]: EmoStates.FINISHED,
      [EmoStates.FRIGHTENED]: EmoStates.FINISHED,
    },
    [EmoStates.ANXIOUS]: {
      [EmoStates.OVERWHELMED]: EmoStates.FINISHED,
      [EmoStates.WORRIED]: EmoStates.FINISHED,
    },
    [EmoStates.INSECURE]: {
      [EmoStates.INADEQUATE]: EmoStates.FINISHED,
      [EmoStates.INFERIOR]: EmoStates.FINISHED,
    },
    [EmoStates.WEAK]: {
      [EmoStates.WORTHLESS]: EmoStates.FINISHED,
      [EmoStates.INSIGNIFICANT]: EmoStates.FINISHED,
    },
    [EmoStates.REJECTED]: {
      [EmoStates.EXCLUDED]: EmoStates.FINISHED,
      [EmoStates.PERSECUTED]: EmoStates.FINISHED,
    },
    [EmoStates.THREATENED]: {
      [EmoStates.NERVOUS]: EmoStates.FINISHED,
      [EmoStates.EXPOSED]: EmoStates.FINISHED,
    },
  },
  [EmoStates.SURPRISE]: {
    [EmoStates.STARTLED]: {
      [EmoStates.SHOCKED]: EmoStates.FINISHED,
      [EmoStates.DISMAYED]: EmoStates.FINISHED,
    },
    [EmoStates.CONFUSED]: {
      [EmoStates.DISILLUSIONED]: EmoStates.FINISHED,
      [EmoStates.PERPLEXED]: EmoStates.FINISHED,
    },
    [EmoStates.AMAZED]: {
      [EmoStates.ASTONISHED]: EmoStates.FINISHED,
      [EmoStates.AWE]: EmoStates.FINISHED,
    },
    [EmoStates.EXCITED]: {
      [EmoStates.EAGER]: EmoStates.FINISHED,
      [EmoStates.ENERGETIC]: EmoStates.FINISHED,
    },
  },
  [EmoStates.HAPPY]: {
    [EmoStates.PLAYFUL]: {
      [EmoStates.AROUSED]: EmoStates.FINISHED,
      [EmoStates.CHEEKY]: EmoStates.FINISHED,
    },
    [EmoStates.CONTENT]: {
      [EmoStates.FREE]: EmoStates.FINISHED,
      [EmoStates.JOYFUL]: EmoStates.FINISHED,
    },
    [EmoStates.INTERESTED]: {
      [EmoStates.CURIOUS]: EmoStates.FINISHED,
      [EmoStates.INQUISITIVE]: EmoStates.FINISHED,
    },
    [EmoStates.PROUD]: {
      [EmoStates.SUCCESSFUL]: EmoStates.FINISHED,
      [EmoStates.CONFIDENT]: EmoStates.FINISHED,
    },
    [EmoStates.ACCEPTED]: {
      [EmoStates.RESPECTED]: EmoStates.FINISHED,
      [EmoStates.VALUED]: EmoStates.FINISHED,
    },
    [EmoStates.POWERFUL]: {
      [EmoStates.COURAGEOUS]: EmoStates.FINISHED,
      [EmoStates.CREATIVE]: EmoStates.FINISHED,
    },
    [EmoStates.PEACEFUL]: {
      [EmoStates.LOVING]: EmoStates.FINISHED,
      [EmoStates.THANKFUL]: EmoStates.FINISHED,
    },
    [EmoStates.TRUSTING]: {
      [EmoStates.SENSITIVE]: EmoStates.FINISHED,
      [EmoStates.INTIMATE]: EmoStates.FINISHED,
    },
    [EmoStates.OPTIMISTIC]: {
      [EmoStates.HOPEFUL]: EmoStates.FINISHED,
      [EmoStates.INSPIRED]: EmoStates.FINISHED,
    },
  },
};

export const EmoObjects = {
  [EmoStates.SELECTING]: Basic,
  [EmoStates.ANGER]: Anger,
  [EmoStates.LET_DOWN]: LetDown,
  [EmoStates.MAD]: Mad,
  [EmoStates.AGGRESSIVE]: Aggressive,
  [EmoStates.FRUSTRATED]: Frustrated,
  [EmoStates.DISTANT]: Distant,
  [EmoStates.CRITICAL]: Critical,
  [EmoStates.HUMILIATED]: Humiliated,
  [EmoStates.BITTER]: Bitter,
  [EmoStates.DISGUST]: Disgust,
  [EmoStates.DISAPPROVING]: Disapproving,
  [EmoStates.DISAPPOINTED]: Disappointed,
  [EmoStates.AWFUL]: Awful,
  [EmoStates.REPELLED]: Repelled,
  [EmoStates.FEAR]: Fear,
  [EmoStates.SCARED]: Scared,
  [EmoStates.ANXIOUS]: Anxious,
  [EmoStates.INSECURE]: Insecure,
  [EmoStates.WEAK]: Weak,
  [EmoStates.REJECTED]: Rejected,
  [EmoStates.THREATENED]: Threatened,
  [EmoStates.SURPRISE]: Surprise,
  [EmoStates.STARTLED]: Startled,
  [EmoStates.CONFUSED]: Confused,
  [EmoStates.AMAZED]: Amazed,
  [EmoStates.EXCITED]: Excited,
  [EmoStates.SAD]: Sad,
  [EmoStates.LONELY]: Lonely,
  [EmoStates.VULNERABLE]: Vulnerable,
  [EmoStates.DESPAIR]: Despair,
  [EmoStates.GUILTY]: Guilty,
  [EmoStates.DEPRESSED]: Depressed,
  [EmoStates.HURT]: Hurt,
  [EmoStates.BAD]: Bad,
  [EmoStates.TIRED]: Tired,
  [EmoStates.STRESSED]: Stressed,
  [EmoStates.BUSY]: Busy,
  [EmoStates.BORED]: Bored,
  [EmoStates.HAPPY]: Happy,
  [EmoStates.PLAYFUL]: Playful,
  [EmoStates.CONTENT]: Content,
  [EmoStates.INTERESTED]: Interested,
  [EmoStates.PROUD]: Proud,
  [EmoStates.ACCEPTED]: Accepted,
  [EmoStates.POWERFUL]: Powerful,
  [EmoStates.PEACEFUL]: Peaceful,
  [EmoStates.TRUSTING]: Trusting,
  [EmoStates.OPTIMISTIC]: Optimistic,
};
