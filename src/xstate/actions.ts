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
  RESENTFUL: "RESENTFUL"
}

export const Mad = {
  FURIOUS: "FURIOUS",
  JEALOUS: "FURIOUS",
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
  EMBARRASSED: "EMBARRASSED", // duplicated under Disgust
  DISAPPOINTED: "DISAPPOINTED",
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
  ...Optimistic
}

export const EmoActions = {
  START: "selecting",
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
};
